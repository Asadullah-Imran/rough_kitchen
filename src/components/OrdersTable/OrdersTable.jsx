import { useState } from "react";
import { ShoppingBag, AlertCircle, CheckCircle, Clock, User } from "lucide-react";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import { calculateEstimatedBazar, checkStockAvailability } from "../../utils/bazarEstimator";
import { useStock } from "../../contexts/StockContext";

const OrdersTable = ({ orders }) => {
  const [showBazar, setShowBazar] = useState(null);
  const { stock } = useStock();
  const estimatedBazar = calculateEstimatedBazar(orders);
  const stockCheck = checkStockAvailability(stock, orders);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "yellow";
      case "cooking": return "green";
      case "ready": return "teal";
      case "delivered": return "gray";
      default: return "gray";
    }
  };

  const handleStatusUpdate = (orderId, newStatus) => {
    // This would typically update the order status via an API
    console.log(`Updating order ${orderId} to ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      {/* Estimated Bazar Summary */}
      {orders.length > 0 && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <ShoppingBag size={20} className="text-yellow-600" />
                Estimated Bazar for {orders.length} Orders
              </h3>
              <p className="text-sm text-gray-600">
                Total items needed: {estimatedBazar.totalItems} • 
                Estimated cost: ৳ {estimatedBazar.estimatedTotal.toFixed(0)}
              </p>
            </div>
            <Button
              onClick={() => setShowBazar(!showBazar)}
              variant="secondary"
              className="text-sm"
            >
              {showBazar ? "Hide" : "View"} Shopping List
            </Button>
          </div>

          {showBazar && (
            <div className="mt-4 bg-white rounded-lg p-4 border border-yellow-200">
              <h4 className="font-bold text-gray-800 mb-3 text-sm">Shopping List:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {estimatedBazar.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded">
                    <span>• {item.ingredient} ({item.estimatedQty} {item.unit})</span>
                    <span className="text-xs text-gray-500">~৳{item.estimatedPrice}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stock Warnings */}
          {stockCheck.missing.length > 0 && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-bold text-red-800 text-sm mb-2">Low Stock Alert!</h4>
                  <div className="space-y-1">
                    {stockCheck.missing.map((item, idx) => (
                      <p key={idx} className="text-xs text-red-700">
                        {item.ingredient}: Need {item.needed} more (Available: {item.available})
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 text-sm font-semibold text-gray-600">Order ID</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Items</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Customer</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Total</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-mono text-sm text-gray-500">{order.id}</div>
                    <div className="text-xs text-gray-400 mt-1">{new Date(order.orderTime).toLocaleTimeString()}</div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="text-sm font-medium text-gray-900">
                          {item.name} x{item.qty}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-400" />
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{order.customer.name}</div>
                        <div className="text-xs text-gray-500">{order.customer.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-bold text-teal-700">৳ {order.total}</td>
                  <td className="p-4">
                    <Badge color={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                      className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value="pending">Pending</option>
                      <option value="cooking">Cooking</option>
                      <option value="ready">Ready</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;

