import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="">
      <Navigation />
      <Hero />
      <AboutUs />
      <Features />
    </main>
  );
}
