import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Grid } from "@/components/Grid";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className=" bg-black pt-10 pb-36">
      <div>
        <Navbar />
        <Hero />
        <Grid />
        <Contact />
      </div>
    </main>
  );
}
