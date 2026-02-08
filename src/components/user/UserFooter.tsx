import React from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export const UserFooter: React.FC = () => {
  return (
    <footer className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 pb-8 border-b border-slate-700">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-bold text-cyan-400">
                Servewise
              </span>
              <span className="text-3xl font-bold text-white">
                Solutions
              </span>
            </div>

            <p className="text-slate-300 text-lg max-w-md leading-relaxed">
              Delivering reliable, scalable, and smart service solutions for
              businesses and individuals.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full lg:w-96">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Stay Updated
            </h3>
            <p className="text-slate-300 mb-4 text-sm">
              Get updates on new services, features, and announcements.
            </p>
            <div className="flex rounded-xl overflow-hidden shadow-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 flex-1 bg-white/10 backdrop-blur-sm border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
              />
              <button className="bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 transition-all duration-200 flex items-center space-x-2 group">
                <span className="font-medium">Subscribe</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Company
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Our Team", "News"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span>{link}</span>
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Service Management",
                "Technician Solutions",
                "Customer Support",
                "Maintenance Services",
                "All Services",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span>{link}</span>
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Support
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Contact Support",
                "FAQs",
                "Service Policy",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span>{link}</span>
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Get in Touch
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center mr-3 group-hover:bg-cyan-500/20 transition-colors duration-200">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">
                  123 Business Park, City, State, Country
                </span>
              </li>

              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center mr-3 group-hover:bg-cyan-500/20 transition-colors duration-200">
                  <Phone className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="text-slate-300 text-sm">
                  +1 234 567 8900
                </span>
              </li>

              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center mr-3 group-hover:bg-cyan-500/20 transition-colors duration-200">
                  <Mail className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="text-slate-300 text-sm">
                  support@servewise.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Servewise Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
