const TechBubble = ({ data }) => {
  return (
    <div className="py-2 w-fit px-6 lg:w-[160px] bg-milk-coffe dark:bg-milk-choco rounded-full">
      <p className="text-sm lg:text-lg font-medium text-milk-white text-center">
        {data}
      </p>
    </div>
  );
};

export default TechBubble;
