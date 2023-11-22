import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <main className="">
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
      <Navigation />
      <Hero />
      <AboutUs />
      <Features />
      </ThemeProvider>
    </main>
  );
}
