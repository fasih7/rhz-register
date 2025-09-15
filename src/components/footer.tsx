import { Heart, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 text-white ${className}`}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://kad.pulse.gop.pk:5000/assets/img/pulse-logo-Light.png"
                alt="RHZ Logo"
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold">RHZ Register</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Professional land management system for District, Tehsil, and
              Mouza indexing. Streamlining property records with modern
              technology and user-friendly interface.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-sm">support@rhzregister.pk</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-sm">+92 (0) 51 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  RHZ Register
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  Intiqal Register
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  Property Search
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-2 md:mb-0">
              © {currentYear} RHZ & Intiqal Register. All rights reserved.
            </p>
            <p className="flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in
              Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
