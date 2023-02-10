const Button = ({ text, href, secondary, type }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`w-fit border-2 border-milk-cyan text-center py-2 px-4 rounded-md text-lg text-medium  transition-all duration-400 ${
        secondary
          ? "bg-transparent text-milk-cyan hover:bg-milk-cyan/20"
          : "bg-milk-cyan text-white hover:bg-milk-cyan/80"
      }`}
    >
      {text}
    </a>
  );
};

export default Button;
