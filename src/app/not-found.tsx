import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-svh place-items-center px-5 text-center">
      <div>
        <p className="font-mono text-xs tracking-[0.25em] text-coral uppercase">Error 404</p>
        <h1 className="mt-6 text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-medium tracking-[-0.04em]">
          Lost in <span className="font-serif font-normal italic">orbit.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-paper/60">This page doesn&apos;t exist, but plenty of shipped work does.</p>
        <div className="mt-10 flex justify-center">
          <Button href="/">
            <ArrowLeft width={16} height={16} /> Back home
          </Button>
        </div>
      </div>
    </main>
  );
}
