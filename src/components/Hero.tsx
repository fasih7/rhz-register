import Map from "../components/map";
import { MainButton } from "./utils/Button";
import { DropdownMenu } from "./utils/Dropdown";

export function HeroSection() {
  return (
    <main className="flex-1">
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-8 py-16">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
            RHZ & Intiqal Register
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Manage District, Tehsil, Mouza with Professional Indexing
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <MainButton mainText="RHZ Register" type="primary" />
            <MainButton mainText="Intiqal Register" type="secondary" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <DropdownMenu />
            <DropdownMenu />
            <DropdownMenu />
          </div>

          <div className="flex flex-wrap gap-4">
            <MainButton mainText="Create RHZ Register" type="primary" />
            <MainButton mainText="Create Intiqal Register" type="secondary" />
          </div>
        </div>

        {/* Right Map Section */}
        <Map />
      </section>
    </main>
  );
}
