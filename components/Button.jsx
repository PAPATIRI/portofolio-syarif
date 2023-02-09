const Button = ({ text, href, secondary }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`w-[132px] text-center py-2 rounded-md text-lg text-medium  transition-all duration-400 ${
        secondary
          ? "border-2 border-milk-cyan bg-transparent text-milk-cyan hover:bg-milk-cyan/20"
          : "bg-milk-cyan text-white hover:bg-milk-cyan/80"
      }`}
    >
      {text}
    </a>
  );
};

export default Button;
