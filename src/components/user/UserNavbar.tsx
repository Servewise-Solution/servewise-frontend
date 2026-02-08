import React, { useState, useRef, useEffect } from "react";
import { Search, Menu, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "../common/Logo";
import { Dropdown } from "../../components/common/DropDown";

const dummyNotifications = [
  {
    id: "1",
    title: "Service Assigned",
    description: "A technician has been assigned to your request.",
    time: "2 mins ago",
  },
  {
    id: "2",
    title: "Service Completed",
    description: "Your AC repair service has been completed.",
    time: "1 hour ago",
  },
];

export const UserNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-md py-4 px-6 shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <Logo role="user" />

        <div className="relative grow max-w-lg mx-6 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 bg-gray-50/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-200"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* Notification Bell Icon with Dropdown */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200"
            >
              <Bell className="h-5 w-5 text-gray-600" />
              {/* Notification Badge */}
              {dummyNotifications.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {dummyNotifications.length}
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                <div className="px-4 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white">
                  <h3 className="font-semibold text-lg">Notifications</h3>
                  <p className="text-xs text-blue-100">
                    You have {dummyNotifications.length} new notifications
                  </p>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {dummyNotifications.length > 0 ? (
                    dummyNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <p className="text-sm font-semibold text-gray-900">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {notification.description}
                        </p>
                        <span className="text-xs text-gray-400 mt-1 block">
                          {notification.time}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <p className="text-gray-500 text-sm">
                        No new notifications
                      </p>
                    </div>
                  )}
                </div>

                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                  <button className="w-full text-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          <Dropdown role="user" />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
          <div className="space-y-3">
            <div className="relative px-4">
              <input
                type="search"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-200"
              />
              <Search className="absolute left-8 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <Link
              to="/user/home"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-all duration-200"
            >
              Home
            </Link>

            <Link
              to="/user/categories"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-all duration-200"
            >
              Services
            </Link>

            <div className="pt-4 border-t border-gray-100">
              <p className="px-4 text-sm font-semibold text-gray-600">
                Notifications
              </p>

              <div className="mt-2 space-y-2">
                {dummyNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="mx-4 px-4 py-3 bg-gray-50 rounded-xl"
                  >
                    <p className="text-sm font-medium text-gray-800">
                      {notification.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {notification.description}
                    </p>
                    <span className="text-[10px] text-gray-400">
                      {notification.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};