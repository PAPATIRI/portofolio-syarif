const LoadingSkeleton = ({ type }) => {
  return (
    <div className="w-[350px] self-start bg-milk-white dark:bg-milk-choco/50 rounded-lg p-4 animate-pulse">
      <div
        className={`bg-milk-coffe/20 dark:bg-milk-choco rounded w-full mb-4 ${
          type === "post" ? "h-[100px]" : "h-[200px]"
        }`}
      ></div>
      <div
        className={`bg-milk-coffe/20 dark:bg-milk-choco rounded h-4 ${
          type === "post" ? "mb-2" : "mx-10"
        }`}
      ></div>
      {type === "post" && (
        <div className="bg-milk-coffe/20 dark:bg-milk-choco rounded h-4 w-[40%]"></div>
      )}
    </div>
  );
};

export default LoadingSkeleton;
