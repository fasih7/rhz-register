export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#f5fbf2" }}
      className="rounded-t-xl mt-12 w-full"
    >
      <div className="container mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} RHZ & Intiqal Register. All rights
          reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-green-700 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-green-700 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-green-700 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
