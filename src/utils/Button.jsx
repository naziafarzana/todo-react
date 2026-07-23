function Button({ label, onClick, className = "", type = "button" }) {
  
    return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium transition duration-200 ${className}`}
    >
      {label}
    </button>
  )
}

export default Button