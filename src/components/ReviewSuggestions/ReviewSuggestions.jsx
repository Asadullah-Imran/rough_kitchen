import { MessageSquare, Lightbulb, Star, TrendingDown, TrendingUp } from "lucide-react";
import Badge from "../Badge/Badge";

const ReviewSuggestions = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Review Insights</h3>
        <p className="text-gray-500 text-center py-8">No reviews available yet</p>
      </div>
    );
  }

  // Calculate average rating
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  // Extract suggestions from reviews
  const suggestions = reviews
    .filter(r => r.suggestion)
    .map(r => ({
      suggestion: r.suggestion,
      item: r.item,
      customer: r.customer,
      rating: r.rating
    }));

  // Get common feedback themes
  const getCommonThemes = () => {
    const themes = {
      "Spice Level": reviews.filter(r => r.suggestion?.toLowerCase().includes("spicy") || r.suggestion?.toLowerCase().includes("spice")).length,
      "Portion Size": reviews.filter(r => r.suggestion?.toLowerCase().includes("small") || r.suggestion?.toLowerCase().includes("more") || r.suggestion?.toLowerCase().includes("portion")).length,
      "Delivery": reviews.filter(r => r.suggestion?.toLowerCase().includes("delivery") || r.suggestion?.toLowerCase().includes("faster")).length,
      "Quality": reviews.filter(r => r.suggestion?.toLowerCase().includes("fresh") || r.suggestion?.toLowerCase().includes("better") || r.suggestion?.toLowerCase().includes("quality")).length
    };
    return Object.entries(themes).filter(([_, count]) => count > 0).map(([theme, count]) => ({ theme, count }));
  };

  const commonThemes = getCommonThemes();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
          <Lightbulb size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Review Insights & Suggestions</h3>
          <p className="text-sm text-gray-500">Learn from customer feedback</p>
        </div>
      </div>

      {/* Rating Summary */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Average Rating</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.round(avgRating)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800">{avgRating.toFixed(1)}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">{reviews.length} Reviews</p>
            <p className="text-xs text-gray-500">Total Feedback</p>
          </div>
        </div>
      </div>

      {/* Common Feedback Themes */}
      {commonThemes.length > 0 && (
        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-3 text-sm">Common Feedback Themes</h4>
          <div className="flex flex-wrap gap-2">
            {commonThemes.map(({ theme, count }) => (
              <Badge key={theme} color="teal" className="text-xs">
                {theme}: {count} mentions
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Suggestions List */}
      <div className="space-y-4">
        <h4 className="font-bold text-gray-800 mb-3">Customer Suggestions</h4>
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <MessageSquare size={16} className="text-teal-600" />
                <span className="font-medium text-gray-800 text-sm">{suggestion.customer}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={`${
                        i < suggestion.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <Badge color="blue" className="text-xs">{suggestion.item}</Badge>
            </div>
            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg italic">
              "{suggestion.suggestion}"
            </p>
            <div className="mt-2 flex items-center gap-2">
              <TrendingUp size={14} className="text-teal-600" />
              <span className="text-xs text-teal-600 font-medium">Actionable Suggestion</span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">{suggestions.length}</p>
          <p className="text-xs text-gray-500">Suggestions</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-yellow-600">{avgRating.toFixed(1)}</p>
          <p className="text-xs text-gray-500">Avg Rating</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">
            {reviews.filter(r => r.rating >= 4).length}
          </p>
          <p className="text-xs text-gray-500">Positive (4+ stars)</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSuggestions;

