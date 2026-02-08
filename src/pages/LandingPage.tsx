import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Shield, Clock, ChevronRight } from "lucide-react";

export const LandingPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Servewise Solutions
              </div>
            </div>

            {/* Right Side Options */}
            <div className="flex items-center gap-6">
              <Link
                to="/provider/login"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:underline underline-offset-4"
              >
                Partner with us
              </Link>
              <Link
                to="/user/register"
                className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  🚗 Your Vehicle Care Partner
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Connect with{" "}
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Nearby Service Stations
                </span>{" "}
                Instantly
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Book professional vehicle services at trusted service stations
                near you. Quick, reliable, and hassle-free vehicle maintenance
                at your fingertips.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Service Stations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.8★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Illustration */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-8xl mb-4">🚗</div>
                    <div className="text-2xl font-bold">
                      Professional Service
                    </div>
                    <div className="text-lg opacity-90 mt-2">
                      At Your Convenience
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Nearby</div>
                    <div className="text-sm text-gray-600">Find stations</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Easy Booking
                    </div>
                    <div className="text-sm text-gray-600">Quick & simple</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Servewise?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for hassle-free vehicle maintenance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group p-6 rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Location-Based
              </h3>
              <p className="text-gray-600">
                Find the best service stations near your location instantly
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-6 rounded-2xl bg-linear-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Easy Booking
              </h3>
              <p className="text-gray-600">
                Book your service appointment in just a few clicks
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-6 rounded-2xl bg-linear-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trusted Partners
              </h3>
              <p className="text-gray-600">
                All service stations are verified and highly rated
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-6 rounded-2xl bg-linear-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Save Time
              </h3>
              <p className="text-gray-600">
                No more waiting in queues, book and arrive at your time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get your vehicle serviced in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Find Service Station
                </h3>
                <p className="text-gray-600">
                  Browse nearby service stations based on your location and read
                  reviews
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ChevronRight className="w-8 h-8 text-gray-300" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-linear-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Book Service
                </h3>
                <p className="text-gray-600">
                  Select your preferred service and choose a convenient time
                  slot
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ChevronRight className="w-8 h-8 text-gray-300" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-linear-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Serviced
              </h3>
              <p className="text-gray-600">
                Visit the station at your scheduled time and get professional
                service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust Servewise for their
            vehicle care
          </p>
          <Link
            to="/user/login"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200 text-lg"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Servewise Solutions
          </div>
          <p className="mb-6">Connecting you with trusted service stations</p>
          <div className="text-sm text-gray-500">
            © 2026 Servewise Solutions. All rights reserved.
          </div>
        </div>
      </footer>



      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};
