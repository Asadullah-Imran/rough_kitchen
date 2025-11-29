import { Star, Award, TrendingUp, ShoppingBag } from "lucide-react";

const ValuableCustomers = ({ customers }) => {
  if (!customers || customers.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Valuable Customers</h3>
        <p className="text-gray-500 text-center py-8">No customer data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700">
          <Award size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Valuable Customers</h3>
          <p className="text-sm text-gray-500">Your most loyal foodies</p>
        </div>
      </div>

      <div className="space-y-4">
        {customers.map((customer, index) => (
          <div
            key={customer.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  {customer.name.charAt(0)}
                </div>
                {index === 0 && (
                  <div className="absolute -top-1 -right-1 bg-yellow-400 text-teal-900 rounded-full p-1">
                    <Award size={12} />
                  </div>
                )}
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-gray-800">{customer.name}</h4>
                  {index === 0 && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-bold">
                      #1 VIP
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <ShoppingBag size={12} />
                    {customer.orders} orders
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                    {customer.rating} avg rating
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold text-teal-700 text-lg">৳ {customer.total}</p>
              <p className="text-xs text-gray-500">Total spent</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp size={12} className="text-green-600" />
                <span className="text-xs text-green-600 font-medium">Loyal</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Stats Summary */}
      <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-teal-700">{customers.length}</p>
          <p className="text-xs text-gray-500">VIP Customers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-yellow-600">
            {customers.reduce((sum, c) => sum + c.orders, 0)}
          </p>
          <p className="text-xs text-gray-500">Total Orders</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">
            ৳ {customers.reduce((sum, c) => sum + c.total, 0)}
          </p>
          <p className="text-xs text-gray-500">Total Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default ValuableCustomers;

