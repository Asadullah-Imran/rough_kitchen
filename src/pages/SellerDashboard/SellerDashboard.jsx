import { useState } from "react";
import { Package, ShoppingBag, BarChart3, Users, MessageSquare, ChefHat } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
import StockManagement from "../../components/StockManagement/StockManagement";
import BusinessCharts from "../../components/BusinessCharts/BusinessCharts";
import ValuableCustomers from "../../components/ValuableCustomers/ValuableCustomers";
import ReviewSuggestions from "../../components/ReviewSuggestions/ReviewSuggestions";
import { MOCK_ORDERS, BUSINESS_ANALYTICS, MOCK_REVIEWS } from "../../constants/sellerData";
import { MOCK_KITCHENS } from "../../constants/mockData";
import { useAuth } from "../../contexts/AuthContext";

const SellerDashboard = () => {
  const { userRole } = useAuth();
  const [activeTab, setActiveTab] = useState("orders");
  
  // Get current chef's kitchen (assuming chef with id 1 for demo)
  const currentKitchen = MOCK_KITCHENS[0];
  const orders = MOCK_ORDERS;
  const topCustomers = BUSINESS_ANALYTICS.topCustomers;

  const tabs = [
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "stock", label: "Stock", icon: Package },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "customers", label: "Customers", icon: Users },
    { id: "reviews", label: "Reviews", icon: MessageSquare },
    { id: "profile", label: "Kitchen Profile", icon: ChefHat }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Kitchen Header */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{currentKitchen?.name || "My Kitchen"}</h1>
              <p className="text-teal-200">{currentKitchen?.chefTitle || "Home Chef"}</p>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-teal-200 text-sm">Kitchen Status</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="font-bold">Open for Orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm font-medium mb-1">Today's Revenue</p>
            <p className="text-3xl font-bold text-teal-900">৳ {BUSINESS_ANALYTICS.revenue.today}</p>
            <p className="text-xs text-green-600 mt-1">+12% from yesterday</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm font-medium mb-1">Pending Orders</p>
            <p className="text-3xl font-bold text-yellow-600">{orders.filter(o => o.status === 'pending').length}</p>
            <p className="text-xs text-gray-500 mt-1">Needs attention</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm font-medium mb-1">This Month</p>
            <p className="text-3xl font-bold text-purple-700">৳ {BUSINESS_ANALYTICS.revenue.thisMonth.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">{BUSINESS_ANALYTICS.orders.thisMonth} orders</p>
          </div>
          <div className="bg-gradient-to-br from-teal-800 to-teal-900 p-6 rounded-2xl shadow-lg text-white">
            <p className="text-teal-200 text-sm font-medium mb-1">Total Customers</p>
            <p className="text-3xl font-bold">{topCustomers.length}</p>
            <p className="text-xs text-teal-200 mt-1">Active this month</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium text-sm transition-colors border-b-2 ${
                      activeTab === tab.id
                        ? "border-yellow-400 text-teal-900 bg-yellow-50"
                        : "border-transparent text-gray-600 hover:text-teal-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "orders" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">Active Orders</h3>
                <span className="text-gray-500 text-sm">{orders.length} orders</span>
              </div>
              <OrdersTable orders={orders} />
            </div>
          )}

          {activeTab === "stock" && (
            <StockManagement />
          )}

          {activeTab === "analytics" && (
            <BusinessCharts analytics={BUSINESS_ANALYTICS} />
          )}

          {activeTab === "customers" && (
            <ValuableCustomers customers={topCustomers} />
          )}

          {activeTab === "reviews" && (
            <ReviewSuggestions reviews={MOCK_REVIEWS} />
          )}

          {activeTab === "profile" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Kitchen Profile</h3>
              {currentKitchen && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Kitchen Name</label>
                    <input
                      type="text"
                      defaultValue={currentKitchen.name}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Chef Title</label>
                    <input
                      type="text"
                      defaultValue={currentKitchen.chefTitle}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      rows="3"
                      defaultValue={currentKitchen.bio}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Kitchen Story</label>
                    <textarea
                      rows="3"
                      defaultValue={currentKitchen.story}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                    />
                  </div>
                  <Button variant="primary" fullWidth>
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
