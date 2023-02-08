const TechBubble = ({ data }) => {
  return (
    <div className="py-2 w-[160px] bg-milk-coffe dark:bg-milk-choco rounded-full">
      <p className="text-lg font-medium text-milk-white text-center">{data}</p>
    </div>
  );
};

export default TechBubble;
