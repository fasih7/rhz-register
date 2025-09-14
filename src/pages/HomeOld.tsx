import { HeroOJldSection } from "../components/HeroOld";

export function HomeOld() {
  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <HeroOJldSection />
    </div>
  );
}
