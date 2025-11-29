const Badge = ({ children, color = "gray", className = "" }) => {
  const colors = {
    gray: "bg-gray-100 text-gray-700",
    green: "bg-emerald-100 text-emerald-800",
    yellow: "bg-yellow-100 text-yellow-800",
    teal: "bg-teal-50 text-teal-700",
    dark: "bg-teal-900 text-white"
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap ${colors[color] || colors.gray} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;

