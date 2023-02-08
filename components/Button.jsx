const Button = ({ text, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-[132px] text-center py-2 bg-milk-cyan rounded-md text-white text-lg text-medium hover:bg-milk-cyan/80 transition-all duration-400"
    >
      {text}
    </a>
  );
};

export default Button;
