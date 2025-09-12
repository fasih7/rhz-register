import { HeroSection } from "../components/Hero";

export function Home() {
  return (
    <div
      style={{ backgroundColor: "#ceedcb" }}
      className="min-h-screen flex flex-col relative"
    >
      <HeroSection />
    </div>
  );
}
