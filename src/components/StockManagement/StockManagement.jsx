import { useState } from "react";
import { Package, AlertTriangle, Plus, CheckCircle } from "lucide-react";
import Button from "../Button/Button";
import { useStock } from "../../contexts/StockContext";
import Badge from "../Badge/Badge";

const StockManagement = () => {
  const { stock, updateStock, getLowStockItems } = useStock();
  const [editingItem, setEditingItem] = useState(null);
  const [editValue, setEditValue] = useState("");

  const lowStockItems = getLowStockItems();
  const stockEntries = Object.entries(stock);

  const handleEdit = (ingredient, currentQty) => {
    setEditingItem(ingredient);
    setEditValue(currentQty);
  };

  const handleSave = () => {
    if (editingItem && editValue !== "") {
      updateStock(editingItem, parseFloat(editValue));
      setEditingItem(null);
      setEditValue("");
    }
  };

  const handleCancel = () => {
    setEditingItem(null);
    setEditValue("");
  };

  const getStockStatus = (item) => {
    if (item.quantity <= item.minThreshold) {
      return { color: "danger", label: "Critical" };
    } else if (item.quantity <= item.minThreshold * 2) {
      return { color: "yellow", label: "Low" };
    } else {
      return { color: "green", label: "Good" };
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-teal-100 p-2 rounded-lg text-teal-700">
            <Package size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Stock Management</h3>
            <p className="text-sm text-gray-500">Track your ingredients inventory</p>
          </div>
        </div>
        {lowStockItems.length > 0 && (
          <Badge color="danger">
            <AlertTriangle size={14} className="inline mr-1" />
            {lowStockItems.length} Low Stock
          </Badge>
        )}
      </div>

      {/* Low Stock Alert */}
      {lowStockItems.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
          <div className="flex items-start gap-2">
            <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="font-bold text-red-800 mb-2">Items Running Low!</h4>
              <div className="flex flex-wrap gap-2">
                {lowStockItems.map((item) => (
                  <span
                    key={item.name}
                    className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-medium"
                  >
                    {item.name} ({item.quantity} {item.unit} left)
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stock List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stockEntries.map(([ingredient, item]) => {
          const status = getStockStatus(item);
          return (
            <div
              key={ingredient}
              className={`border rounded-lg p-4 ${
                status.color === "danger"
                  ? "border-red-200 bg-red-50"
                  : status.color === "yellow"
                  ? "border-yellow-200 bg-yellow-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-gray-800 text-sm">{ingredient}</h4>
                <Badge color={status.color}>{status.label}</Badge>
              </div>
              
              {editingItem === ingredient ? (
                <div className="space-y-2">
                  <input
                    type="number"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
                    placeholder="Quantity"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSave}
                      className="text-xs py-1 px-3 h-auto"
                      variant="primary"
                    >
                      Save
                    </Button>
                    <Button
                      onClick={handleCancel}
                      className="text-xs py-1 px-3 h-auto"
                      variant="secondary"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {item.quantity} <span className="text-sm text-gray-500">{item.unit}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    Min: {item.minThreshold} {item.unit} | Price: ৳{item.price}/{item.unit}
                  </div>
                  <Button
                    onClick={() => handleEdit(ingredient, item.quantity)}
                    variant="ghost"
                    className="text-xs w-full"
                    icon={Plus}
                  >
                    Update Stock
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Add Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">Quick Stock Update</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {lowStockItems.slice(0, 4).map((item) => (
            <Button
              key={item.name}
              onClick={() => handleEdit(item.name, item.quantity)}
              variant="secondary"
              className="text-xs"
            >
              <Plus size={14} className="mr-1" />
              Restock {item.name.split(' ')[0]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockManagement;

