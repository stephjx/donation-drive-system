import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-blue-50 to-white border-t border-blue-100 py-16"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-10">
          {/* Logo and Tagline */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">DF</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                DonateFlow
              </span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Empowering change through student giving. Together, we build brighter futures for every learner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-600 from:hover:text-blue-600 to-white-500 font-medium transition-all duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 font-medium transition-all duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 font-medium transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5">Connect With Us</h3>
            <div className="flex space-x-5">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label={Icon.name}
                >
                  <Icon size={22} className="text-blue-600" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-blue-100 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-600">DonateFlow</span>. All rights reserved.
            <br />
            Built with ❤️ to empower students and transform communities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
