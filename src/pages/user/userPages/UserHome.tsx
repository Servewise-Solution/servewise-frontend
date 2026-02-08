import React, { useState } from "react";
import { UserLayout } from "../../../layout/UserLayout";
import {
  Search,
  MapPin,
  Star,
  Clock,
  Calendar,
  ChevronRight,
  Wrench,
  Droplet,
  Zap,
  Shield,
  Car,
  Settings,
} from "lucide-react";

export const UserHome: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("");

  // Mock data for nearby service stations
  const nearbyStations = [
    {
      id: 1,
      name: "AutoCare Pro",
      rating: 4.8,
      reviews: 234,
      distance: "1.2 km",
      services: ["Oil Change", "Brake Service", "AC Repair"],
      image: "🏪",
      availability: "Available Now",
    },
    {
      id: 2,
      name: "QuickFix Motors",
      rating: 4.6,
      reviews: 189,
      distance: "2.5 km",
      services: ["Engine Repair", "Tire Service", "Battery"],
      image: "🔧",
      availability: "Available Now",
    },
    {
      id: 3,
      name: "Elite Service Center",
      rating: 4.9,
      reviews: 312,
      distance: "3.1 km",
      services: ["Full Service", "Detailing", "Inspection"],
      image: "⚙️",
      availability: "Busy - 2hr wait",
    },
    {
      id: 4,
      name: "SpeedyFix Garage",
      rating: 4.7,
      reviews: 156,
      distance: "4.0 km",
      services: ["Quick Service", "Oil Change", "Alignment"],
      image: "🚗",
      availability: "Available Now",
    },
  ];

  // Popular services
  const popularServices = [
    { icon: Droplet, name: "Oil Change", color: "blue" },
    { icon: Wrench, name: "Brake Service", color: "purple" },
    { icon: Zap, name: "AC Repair", color: "green" },
    { icon: Shield, name: "Inspection", color: "orange" },
    { icon: Car, name: "Tire Service", color: "red" },
    { icon: Settings, name: "Full Service", color: "indigo" },
  ];

  // Recent bookings
  const recentBookings = [
    {
      id: 1,
      station: "AutoCare Pro",
      service: "Oil Change",
      date: "2026-02-05",
      status: "Completed",
      amount: "₹899",
    },
    {
      id: 2,
      station: "Elite Service Center",
      service: "Full Service",
      date: "2026-01-28",
      status: "Completed",
      amount: "₹2,499",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; hover: string }> = {
      blue: {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        hover: "hover:bg-blue-100",
      },
      purple: {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        hover: "hover:bg-purple-100",
      },
      green: {
        bg: "bg-green-50",
        icon: "text-green-600",
        hover: "hover:bg-green-100",
      },
      orange: {
        bg: "bg-orange-50",
        icon: "text-orange-600",
        hover: "hover:bg-orange-100",
      },
      red: {
        bg: "bg-red-50",
        icon: "text-red-600",
        hover: "hover:bg-red-100",
      },
      indigo: {
        bg: "bg-indigo-50",
        icon: "text-indigo-600",
        hover: "hover:bg-indigo-100",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <UserLayout>
      <div className="min-h-screen">
        {/* Hero Section with Search */}
        <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Perfect Service Station
              </h1>
              <p className="text-xl text-blue-100">
                Book professional vehicle services near you
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for services or stations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none text-gray-900 font-medium"
                    />
                  </div>
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Your location"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none text-gray-900 font-medium"
                  />
                </div>
              </div>
              <button className="w-full mt-4 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-200">
                Search Service Stations
              </button>
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Popular Services
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {popularServices.map((service, index) => {
                const colors = getColorClasses(service.color);
                const Icon = service.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedService(service.name)}
                    className={`p-6 rounded-2xl ${colors.bg} ${colors.hover} transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${selectedService === service.name
                        ? "ring-2 ring-offset-2 ring-blue-600"
                        : ""
                      }`}
                  >
                    <Icon className={`w-8 h-8 ${colors.icon} mx-auto mb-3`} />
                    <p className="text-sm font-semibold text-gray-900 text-center">
                      {service.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nearby Service Stations */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Nearby Service Stations
              </h2>
              <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">
                View All
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nearbyStations.map((station) => (
                <div
                  key={station.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Station Image/Icon */}
                  <div className="h-32 bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="text-6xl">{station.image}</div>
                  </div>

                  {/* Station Details */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {station.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-gray-900">
                          {station.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        ({station.reviews} reviews)
                      </span>
                    </div>

                    {/* Distance */}
                    <div className="flex items-center gap-2 mb-3 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{station.distance} away</span>
                    </div>

                    {/* Services */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {station.services.slice(0, 2).map((service, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                        {station.services.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                            +{station.services.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">
                        {station.availability}
                      </span>
                    </div>

                    {/* Book Button */}
                    <button className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Bookings */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Recent Bookings
              </h2>
              <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">
                View All
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {booking.station}
                      </h3>
                      <p className="text-gray-600 mb-2">{booking.service}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{booking.date}</span>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                          {booking.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          {booking.amount}
                        </p>
                      </div>
                      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                        Book Again
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {recentBookings.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No bookings yet
                </h3>
                <p className="text-gray-600">
                  Start by booking your first service!
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </UserLayout>
  );
};