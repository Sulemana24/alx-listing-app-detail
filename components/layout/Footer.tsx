import React from "react";
import Logo from "../../public/images/logo.jpg";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src={Logo.src} alt="Logo" className="h-10 w-auto mb-4" />
            {/* <h3 className="text-2xl font-bold mb-4">ProDev</h3> */}
            <p className="text-gray-300 mb-4">
              Find your perfect place to stay from over 2 million properties
              worldwide. The best prices guaranteed with exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#FF4FA1] hover:text-white">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#FF4FA1] hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#FF4FA1] hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#FF4FA1] hover:text-white">
                <FaTiktok className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#FF4FA1] hover:text-white">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#FF4FA1] hover:text-white">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 RentSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
