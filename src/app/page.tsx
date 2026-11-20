import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Work } from "@/components/sections/Work";
import { Expertise } from "@/components/sections/Expertise";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Community } from "@/components/sections/Community";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Impact />
      <Work />
      <Expertise />
      <Experience />
      <About />
      <Community />
      <Contact />
    </main>
  );
}
