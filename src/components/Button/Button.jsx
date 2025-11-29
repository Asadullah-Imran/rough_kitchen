const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "", 
  icon: Icon, 
  fullWidth = false,
  disabled = false,
  type = "button"
}) => {
  const baseStyle = "px-5 py-2.5 rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-yellow-400 hover:bg-yellow-500 text-teal-900 shadow-md hover:shadow-lg",
    secondary: "bg-white hover:bg-gray-50 text-teal-800 border border-teal-200 shadow-sm",
    ghost: "text-teal-700 hover:bg-teal-50",
    danger: "bg-red-50 hover:bg-red-100 text-red-600",
    dark: "bg-teal-800 hover:bg-teal-900 text-white shadow-md"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;

