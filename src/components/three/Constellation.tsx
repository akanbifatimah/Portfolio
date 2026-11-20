"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { MotionValue } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/**
 * A particle field that starts as one breathing sphere and, as `morph` goes
 * from 0 to 1, splits into three product clusters (ColCare, KiaRelay, Ontime)
 * plus a layer of ambient dust.
 */

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;
  uniform float uSpread;
  uniform float uClusterR;
  uniform float uVertical;
  uniform float uSize;
  uniform float uPixelRatio;

  attribute vec3 aSphere;
  attribute vec3 aLocal;
  attribute float aCluster;
  attribute float aRand;

  varying vec3 vColor;
  varying float vAlpha;

  vec3 rotY(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z); }
  vec3 rotX(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x, c * p.y - s * p.z, s * p.y + c * p.z); }

  vec3 centerOf(float c) {
    vec3 h; vec3 v;
    if (c < 0.5)      { h = vec3(-1.0, 0.0, 0.0); v = vec3(-0.55,  1.15, 0.0); }
    else if (c < 1.5) { h = vec3( 0.0, 0.0, 0.0); v = vec3( 0.55,  0.0,  0.0); }
    else              { h = vec3( 1.0, 0.0, 0.0); v = vec3(-0.55, -1.15, 0.0); }
    return mix(h, v, uVertical);
  }

  void main() {
    float t = uTime;

    // State A: a single sphere that breathes and turns.
    vec3 a = aSphere;
    float n = sin(a.x * 1.6 + t * 0.9) * sin(a.y * 1.8 + t * 0.7) * sin(a.z * 1.4 + t * 0.8);
    a *= 1.0 + n * 0.09;
    a = rotX(rotY(a, t * 0.12), 0.35);

    // State B: three product clusters and drifting dust.
    vec3 b;
    if (aCluster > 2.5) {
      b = aLocal;
      b.y += sin(t * 0.25 + aRand * 6.2831) * 0.2;
    } else {
      vec3 l = rotY(aLocal, t * (0.22 + aCluster * 0.06) + aCluster);
      if (aCluster > 0.5 && aCluster < 1.5) l = rotX(l, 1.15);
      if (aCluster > 1.5) l = rotX(l, 0.95);
      b = centerOf(aCluster) * uSpread + l * uClusterR;
    }

    // Each particle starts its journey at a slightly different time.
    float m = clamp(uMorph * 1.5 - aRand * 0.5, 0.0, 1.0);
    m = m * m * (3.0 - 2.0 * m);
    vec3 p = mix(a, b, m);
    p = rotY(p, sin(m * 3.14159) * 0.8 * (aRand - 0.5));

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (0.35 + aRand * 0.9) * uPixelRatio / -mv.z;

    vec3 violet = vec3(0.545, 0.482, 1.0);
    vec3 coral  = vec3(1.0, 0.478, 0.349);
    vec3 cream  = vec3(0.95, 0.94, 0.92);

    vec3 sphereCol = mix(violet, coral, smoothstep(-1.0, 1.0, aSphere.y / 2.3 + aSphere.x / 4.0));
    if (aRand > 0.94) sphereCol = cream;

    vec3 clusterCol;
    if (aCluster < 0.5)      clusterCol = vec3(0.369, 0.918, 0.831);
    else if (aCluster < 1.5) clusterCol = vec3(1.0, 0.769, 0.42);
    else if (aCluster < 2.5) clusterCol = violet;
    else                     clusterCol = cream;
    if (aRand > 0.95 && aCluster < 2.5) clusterCol = cream;

    vColor = mix(sphereCol, clusterCol, m);
    float dust = step(2.5, aCluster);
    vAlpha = mix(0.9, mix(0.95, 0.25, dust), m);
    vAlpha *= clamp(1.3 + (mv.z + 8.0) * 0.22, 0.2, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = pow(1.0 - d * 2.0, 1.8);
    gl_FragColor = vec4(vColor, a * vAlpha);
  }
`;

export const clusters = [
  { name: "ColCare", sector: "Telehealth" },
  { name: "KiaRelay", sector: "Logistics" },
  { name: "TKPMA Ontime", sector: "Education" },
] as const;

// Same centres as `centerOf` in the shader, used to place the HTML labels.
const horizontalCentres: [number, number, number][] = [
  [-1, 0, 0],
  [0, 0, 0],
  [1, 0, 0],
];
// Narrow screens: a vertical zig-zag (uSpread is 1 there).
const verticalCentres: [number, number, number][] = [
  [-0.55, 1.15, 0],
  [0.55, 0, 0],
  [-0.55, -1.15, 0],
];

function buildGeometry(count: number) {
  const sphere = new Float32Array(count * 3);
  const local = new Float32Array(count * 3);
  const cluster = new Float32Array(count);
  const rand = new Float32Array(count);
  const golden = Math.PI * (3 - Math.sqrt(5));
  const dustCount = Math.floor(count * 0.12);

  for (let i = 0; i < count; i++) {
    // Fibonacci sphere with a slightly thick shell.
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const R = 2.3 * (0.92 + Math.random() * 0.12);
    sphere.set([Math.cos(theta) * r * R, y * R, Math.sin(theta) * r * R], i * 3);

    rand[i] = Math.random();

    if (i < dustCount) {
      cluster[i] = 3;
      local.set([(Math.random() - 0.5) * 18, (Math.random() - 0.5) * 10, -6 + Math.random() * 8], i * 3);
      continue;
    }

    const c = i % 3;
    cluster[i] = c;
    if (c === 0) {
      // ColCare: a soft sphere.
      const u = Math.random() * 2 - 1;
      const phi = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u) * (0.85 + Math.random() * 0.15);
      local.set([Math.cos(phi) * s, u * (0.85 + Math.random() * 0.15), Math.sin(phi) * s], i * 3);
    } else if (c === 1) {
      // KiaRelay: a torus, routes looping around.
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const big = 0.82;
      const tube = 0.2 + Math.random() * 0.04;
      local.set([(big + tube * Math.cos(v)) * Math.cos(u), tube * Math.sin(v), (big + tube * Math.cos(v)) * Math.sin(u)], i * 3);
    } else {
      // Ontime: concentric grooves, like a record.
      const ring = Math.floor(Math.random() * 8);
      const radius = 0.22 + ring * 0.11 + Math.random() * 0.02;
      const ang = Math.random() * Math.PI * 2;
      local.set([Math.cos(ang) * radius, (Math.random() - 0.5) * 0.04, Math.sin(ang) * radius], i * 3);
    }
  }

  const geo = new THREE.BufferGeometry();
  // `position` is required by three.js for bounds; the shader uses aSphere/aLocal.
  geo.setAttribute("position", new THREE.BufferAttribute(sphere, 3));
  geo.setAttribute("aSphere", new THREE.BufferAttribute(sphere, 3));
  geo.setAttribute("aLocal", new THREE.BufferAttribute(local, 3));
  geo.setAttribute("aCluster", new THREE.BufferAttribute(cluster, 1));
  geo.setAttribute("aRand", new THREE.BufferAttribute(rand, 1));
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 12);
  return geo;
}

function Particles({
  morph,
  count,
  animate,
  labelEls,
}: {
  morph: MotionValue<number>;
  count: number;
  animate: boolean;
  labelEls: React.RefObject<(HTMLDivElement | null)[]>;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const tmp = useMemo(() => new THREE.Vector3(), []);
  const { viewport, gl, camera, size } = useThree();

  const geometry = useMemo(() => buildGeometry(count), [count]);
  useEffect(() => () => geometry.dispose(), [geometry]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMorph: { value: 0 },
      uSpread: { value: 3 },
      uClusterR: { value: 0.9 },
      uVertical: { value: 0 },
      uSize: { value: 42 },
      uPixelRatio: { value: 1 },
    }),
    [],
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    const mat = material.current;
    const g = group.current;
    if (!mat || !g) return;
    const u = mat.uniforms;
    const dt = Math.min(delta, 1 / 20);

    if (animate) u.uTime.value += dt;
    u.uPixelRatio.value = gl.getPixelRatio();
    u.uMorph.value = THREE.MathUtils.damp(u.uMorph.value, morph.get(), 3.5, dt);
    const m = u.uMorph.value;

    const narrow = viewport.aspect < 0.9;
    u.uVertical.value = narrow ? 1 : 0;
    const spread = narrow ? 1 : Math.min(3.4, viewport.width * 0.3);
    u.uSpread.value = spread;
    u.uClusterR.value = narrow ? Math.min(0.5, viewport.width * 0.17) : Math.min(spread * 0.27, 0.85);

    // In the intro the sphere sits to the right (desktop) or high up (mobile); it centres as it splits.
    const restX = narrow ? 0 : viewport.width * 0.2;
    const restY = narrow ? viewport.height * 0.2 : 0;
    const splitY = narrow ? -viewport.height * 0.2 : -viewport.height * 0.15;
    const scale = narrow ? Math.min(1, viewport.width / 5.4) : Math.min(1, viewport.width / 11);
    const splitScale = narrow ? Math.min(1, viewport.width / 3) : 1;
    g.position.x = restX * (1 - m);
    g.position.y = THREE.MathUtils.lerp(restY, splitY, m);
    g.scale.setScalar(THREE.MathUtils.lerp(scale, splitScale, m));

    // Follow the pointer a little.
    const k = animate ? 1 : 0;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, pointer.current.x * 0.25 * k, 2.5, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.current.y * 0.15 * k, 2.5, dt);

    // Labels projected from 3D to screen space: under each cluster on desktop, beside it on mobile.
    g.updateMatrixWorld();
    const labelAlpha = THREE.MathUtils.smoothstep(m, 0.8, 1);
    const R = u.uClusterR.value;
    for (let i = 0; i < 3; i++) {
      const el = labelEls.current[i];
      if (!el) continue;
      let anchor = "translate(-50%, -50%)";
      if (narrow) {
        const [x, y, z] = verticalCentres[i];
        const side = x < 0 ? 1 : -1;
        tmp.set(x + side * (R + 0.18), y, z);
        anchor = side > 0 ? "translate(0, -50%)" : "translate(-100%, -50%)";
        el.style.textAlign = side > 0 ? "left" : "right";
      } else {
        const [x, y, z] = horizontalCentres[i];
        tmp.set(x * spread, y * spread - R - 0.32, z * spread);
        el.style.textAlign = "center";
      }
      tmp.applyMatrix4(g.matrixWorld).project(camera);
      const sx = ((tmp.x + 1) / 2) * size.width;
      const sy = ((1 - tmp.y) / 2) * size.height + (1 - labelAlpha) * 12;
      el.style.opacity = String(labelAlpha);
      el.style.transform = `translate3d(${sx}px, ${sy}px, 0) ${anchor}`;
    }
  });

  return (
    <group ref={group}>
      <points geometry={geometry} frustumCulled={false}>
        <shaderMaterial
          ref={material}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function Constellation({
  morph,
  active,
  reducedMotion,
}: {
  morph: MotionValue<number>;
  active: boolean;
  reducedMotion: boolean;
}) {
  const [count] = useState(() => (typeof window !== "undefined" && window.innerWidth < 768 ? 7000 : 16000));
  const labelEls = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.75]}
        frameloop={active ? "always" : "never"}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Particles morph={morph} count={count} animate={!reducedMotion} labelEls={labelEls} />
      </Canvas>
      {clusters.map((c, i) => (
        <div
          key={c.name}
          ref={(el) => {
            labelEls.current[i] = el;
          }}
          className="pointer-events-none absolute top-0 left-0 whitespace-nowrap opacity-0"
        >
          <p className="font-serif text-xl text-paper italic sm:text-2xl">{c.name}</p>
          <p className="mt-1 font-mono text-[10px] tracking-[0.25em] text-mute uppercase">{c.sector}</p>
        </div>
      ))}
    </div>
  );
}

