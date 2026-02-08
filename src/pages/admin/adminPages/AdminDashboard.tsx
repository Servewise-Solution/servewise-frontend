import React from "react";
import AdminLayout from "../../../layout/AdminLayout";
import {
  Users,
  Building2,
  Calendar,
  DollarSign,
  TrendingUp,
  Activity,
  UserCheck,
  UserX,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
} from "lucide-react";

export const AdminDashboard: React.FC = () => {
  // Platform statistics
  const platformStats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+18.2%",
      trend: "up",
      icon: Users,
      color: "blue",
    },
    {
      title: "Service Providers",
      value: "89",
      change: "+12.5%",
      trend: "up",
      icon: Building2,
      color: "purple",
    },
    {
      title: "Total Bookings",
      value: "3,456",
      change: "+24.8%",
      trend: "up",
      icon: Calendar,
      color: "green",
    },
    {
      title: "Platform Revenue",
      value: "₹2.4M",
      change: "+32.1%",
      trend: "up",
      icon: DollarSign,
      color: "orange",
    },
  ];

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      type: "New User",
      description: "Rajesh Kumar registered as a new user",
      timestamp: "2 mins ago",
      status: "success",
    },
    {
      id: 2,
      type: "New Provider",
      description: "AutoCare Pro registered as service provider",
      timestamp: "15 mins ago",
      status: "success",
    },
    {
      id: 3,
      type: "Booking",
      description: "Booking #BK1234 completed successfully",
      timestamp: "1 hour ago",
      status: "success",
    },
    {
      id: 4,
      type: "Issue",
      description: "Payment failed for booking #BK1235",
      timestamp: "2 hours ago",
      status: "warning",
    },
    {
      id: 5,
      type: "Provider",
      description: "QuickFix Motors updated service pricing",
      timestamp: "3 hours ago",
      status: "info",
    },
  ];

  // User/Provider overview
  const userProviderStats = [
    { label: "Active Users", value: 1156, color: "green", icon: UserCheck },
    { label: "Inactive Users", value: 78, color: "gray", icon: UserX },
    { label: "Active Providers", value: 82, color: "blue", icon: Building2 },
    { label: "Pending Approvals", value: 7, color: "yellow", icon: Clock },
  ];

  // System health metrics
  const systemMetrics = [
    { label: "System Uptime", value: "99.9%", status: "excellent" },
    { label: "Active Sessions", value: "342", status: "good" },
    { label: "API Response Time", value: "120ms", status: "good" },
    { label: "Error Rate", value: "0.02%", status: "excellent" },
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
      gray: {
        bg: "bg-gray-50",
        text: "text-gray-700",
        icon: "text-gray-600",
        border: "border-gray-200",
      },
    };
    return colors[color] || colors.blue;
  };

  const getActivityIcon = (status: string) => {
    const icons: Record<string, React.ReactNode> = {
      success: <CheckCircle className="w-5 h-5 text-green-600" />,
      warning: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
      info: <Activity className="w-5 h-5 text-blue-600" />,
    };
    return icons[status] || icons.info;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      excellent: "text-green-600",
      good: "text-blue-600",
      warning: "text-yellow-600",
      critical: "text-red-600",
    };
    return colors[status] || colors.good;
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor and manage the entire Servewise platform
          </p>
        </div>

        {/* Platform Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {platformStats.map((stat, index) => {
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
          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Recent Activities
              </h2>
              <button className="text-blue-600 font-semibold hover:text-blue-700 text-sm flex items-center gap-1">
                View All
                <Eye className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="shrink-0 mt-1">
                    {getActivityIcon(activity.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">
                      {activity.type}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User & Provider Overview + System Health */}
          <div className="space-y-6">
            {/* User & Provider Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                User & Provider Overview
              </h2>
              <div className="space-y-4">
                {userProviderStats.map((stat, index) => {
                  const colors = getColorClasses(stat.color);
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center`}
                        >
                          <Icon className={`w-5 h-5 ${colors.icon}`} />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {stat.label}
                        </span>
                      </div>
                      <span className={`text-lg font-bold ${colors.text}`}>
                        {stat.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* System Health */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  System Health
                </h2>
              </div>
              <div className="space-y-4">
                {systemMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-600">
                      {metric.label}
                    </span>
                    <span
                      className={`text-sm font-bold ${getStatusColor(
                        metric.status
                      )}`}
                    >
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Overall Health Indicator */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Overall Health
                  </span>
                  <span className="text-sm font-bold text-green-600">
                    Excellent
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-green-500 to-green-600 h-2 rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="py-3 px-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Manage Users
            </button>
            <button className="py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2">
              <Building2 className="w-5 h-5" />
              Manage Providers
            </button>
            <button className="py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              View All Bookings
            </button>
            <button className="py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2">
              <Activity className="w-5 h-5" />
              System Reports
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
