export const buttonClassName = {
  className:
    "mt-2 px-5 py-2.5 text-center rounded-lg h-12 min-w-21 max-w-120 cursor-pointer self-center duration-500",
};

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`bg-[#125ced] text-white border-none hover:bg-[#072e7c] transition-colors ${buttonClassName.className} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Button2({ className = "", children, ...props }) {
  return (
    <button
      className={`mb-0 border-none cursor-pointer hover:bg-[#898a8b] ${buttonClassName.className} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
