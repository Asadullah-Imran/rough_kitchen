import { TrendingUp, DollarSign, ShoppingBag, Users } from "lucide-react";

const BusinessCharts = ({ analytics }) => {
  const revenueGrowth = analytics?.revenue 
    ? ((analytics.revenue.thisMonth - analytics.revenue.lastMonth) / analytics.revenue.lastMonth * 100).toFixed(1)
    : 0;

  const ordersGrowth = analytics?.orders
    ? ((analytics.orders.thisMonth - analytics.orders.lastMonth) / analytics.orders.lastMonth * 100).toFixed(1)
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Business Analytics</h3>
      
      {/* Revenue Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="text-teal-700" size={20} />
            <span className={`text-xs font-bold ${revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {revenueGrowth >= 0 ? '+' : ''}{revenueGrowth}%
            </span>
          </div>
          <p className="text-xs text-gray-600 mb-1">Today</p>
          <p className="text-2xl font-bold text-teal-900">৳ {analytics?.revenue?.today || 0}</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="text-blue-700" size={20} />
            <TrendingUp className="text-blue-600" size={16} />
          </div>
          <p className="text-xs text-gray-600 mb-1">This Week</p>
          <p className="text-2xl font-bold text-blue-900">৳ {analytics?.revenue?.thisWeek || 0}</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="text-purple-700" size={20} />
            <TrendingUp className="text-purple-600" size={16} />
          </div>
          <p className="text-xs text-gray-600 mb-1">This Month</p>
          <p className="text-2xl font-bold text-purple-900">৳ {analytics?.revenue?.thisMonth || 0}</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <ShoppingBag className="text-yellow-700" size={20} />
            <Users className="text-yellow-600" size={16} />
          </div>
          <p className="text-xs text-gray-600 mb-1">Total Orders</p>
          <p className="text-2xl font-bold text-yellow-900">{analytics?.orders?.thisMonth || 0}</p>
        </div>
      </div>

      {/* Popular Items */}
      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-bold text-gray-800 mb-4">Top Selling Items</h4>
        <div className="space-y-3">
          {analytics?.popularItems?.slice(0, 4).map((item, index) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-sm">
                  #{index + 1}
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.orders} orders</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-teal-700">৳ {item.revenue}</p>
                <p className="text-xs text-gray-500">Revenue</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Revenue Chart Visualization */}
      <div className="border-t border-gray-200 pt-6 mt-6">
        <h4 className="font-bold text-gray-800 mb-4">Revenue Trend</h4>
        <div className="flex items-end justify-between h-32 gap-2">
          <div className="flex-1 flex flex-col items-center justify-end">
            <div 
              className="w-full bg-teal-400 rounded-t"
              style={{ height: `${(analytics?.revenue?.lastMonth / analytics?.revenue?.thisMonth) * 100}%` }}
            ></div>
            <p className="text-xs text-gray-500 mt-2">Last Month</p>
            <p className="text-xs font-bold text-gray-700">৳ {analytics?.revenue?.lastMonth || 0}</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-end">
            <div className="w-full bg-teal-600 rounded-t h-full"></div>
            <p className="text-xs text-gray-500 mt-2">This Month</p>
            <p className="text-xs font-bold text-gray-700">৳ {analytics?.revenue?.thisMonth || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCharts;

