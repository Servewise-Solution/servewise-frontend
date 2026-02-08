import React from "react";
import { ProviderLayout } from "../../../layout/ProviderLayout";
import {
  DollarSign,
  Calendar,
  Users,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Settings,
  Plus,
  Eye,
} from "lucide-react";

export const ProviderPortal: React.FC = () => {
  // Mock data for statistics
  const stats = [
    {
      title: "Total Revenue",
      value: "₹45,230",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "blue",
    },
    {
      title: "Total Bookings",
      value: "156",
      change: "+8.2%",
      trend: "up",
      icon: Calendar,
      color: "purple",
    },
    {
      title: "Total Customers",
      value: "89",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "green",
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.3",
      trend: "up",
      icon: Star,
      color: "orange",
    },
  ];

  // Recent bookings
  const recentBookings = [
    {
      id: "BK001",
      customer: "Rajesh Kumar",
      service: "Oil Change",
      date: "2026-02-08",
      time: "10:00 AM",
      status: "Completed",
      amount: "₹899",
    },
    {
      id: "BK002",
      customer: "Priya Sharma",
      service: "Brake Service",
      date: "2026-02-08",
      time: "2:00 PM",
      status: "In Progress",
      amount: "₹1,499",
    },
    {
      id: "BK003",
      customer: "Amit Patel",
      service: "AC Repair",
      date: "2026-02-08",
      time: "4:00 PM",
      status: "Pending",
      amount: "₹2,199",
    },
    {
      id: "BK004",
      customer: "Sneha Reddy",
      service: "Full Service",
      date: "2026-02-07",
      time: "11:00 AM",
      status: "Completed",
      amount: "₹2,999",
    },
  ];

  // Service status overview
  const serviceStatus = [
    { status: "Pending", count: 12, color: "yellow" },
    { status: "In Progress", count: 8, color: "blue" },
    { status: "Completed", count: 136, color: "green" },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { bg: string; text: string; icon: string; border: string }
    > = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        icon: "text-blue-600",
        border: "border-blue-200",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-700",
        icon: "text-purple-600",
        border: "border-purple-200",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-700",
        icon: "text-green-600",
        border: "border-green-200",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-700",
        icon: "text-orange-600",
        border: "border-orange-200",
      },
      yellow: {
        bg: "bg-yellow-50",
        text: "text-yellow-700",
        icon: "text-yellow-600",
        border: "border-yellow-200",
      },
    };
    return colors[color] || colors.blue;
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<
      string,
      { bg: string; text: string; icon: React.ReactNode }
    > = {
      Completed: {
        bg: "bg-green-100",
        text: "text-green-700",
        icon: <CheckCircle className="w-4 h-4" />,
      },
      "In Progress": {
        bg: "bg-blue-100",
        text: "text-blue-700",
        icon: <Clock className="w-4 h-4" />,
      },
      Pending: {
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        icon: <AlertCircle className="w-4 h-4" />,
      },
      Cancelled: {
        bg: "bg-red-100",
        text: "text-red-700",
        icon: <XCircle className="w-4 h-4" />,
      },
    };

    const config = statusConfig[status] || statusConfig.Pending;
    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
      >
        {config.icon}
        {status}
      </span>
    );
  };

  return (
    <ProviderLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with your service station
            today.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`${colors.bg} rounded-2xl p-6 border-2 ${colors.border} hover:shadow-lg transition-all duration-200`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center ring-2 ring-white`}
                  >
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </h3>
                <p className={`text-3xl font-bold ${colors.text}`}>
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Recent Bookings
              </h2>
              <button className="text-blue-600 font-semibold hover:text-blue-700 text-sm flex items-center gap-1">
                View All
                <Eye className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Booking ID
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Customer
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Service
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Date & Time
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-4 text-sm font-medium text-gray-900">
                        {booking.id}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700">
                        {booking.customer}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700">
                        {booking.service}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        <div>{booking.date}</div>
                        <div className="text-xs text-gray-500">
                          {booking.time}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {getStatusBadge(booking.status)}
                      </td>
                      <td className="py-4 px-4 text-sm font-semibold text-gray-900">
                        {booking.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions & Service Status */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add New Service
                </button>
                <button className="w-full py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  View Schedule
                </button>
                <button className="w-full py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2">
                  <Settings className="w-5 h-5" />
                  Manage Services
                </button>
              </div>
            </div>

            {/* Service Status Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Service Status
              </h2>
              <div className="space-y-4">
                {serviceStatus.map((item, index) => {
                  const colors = getColorClasses(item.color);
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${colors.bg} ring-2 ${colors.border}`}
                        ></div>
                        <span className="text-sm font-medium text-gray-700">
                          {item.status}
                        </span>
                      </div>
                      <span className={`text-lg font-bold ${colors.text}`}>
                        {item.count}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-xs text-gray-600 mb-2">
                  <span>Completion Rate</span>
                  <span className="font-semibold">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProviderLayout>
  );
};
