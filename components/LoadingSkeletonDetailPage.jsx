const LoadingSkeletonDetailPage = ({ type }) => {
  return (
    <div className="w-[600px] bg-white dark:bg-milk-coffe rounded-lg">
      <div className="h-8 bg-milk-coffe/20 dark:bg-milk-choco mb-4 mr-20 rounded-lg animate-skeleton-loading"></div>
      <div className="flex items-start gap-4">
        <div
          className={`${
            type === "project" ? "h-[250px] mb-4" : "h-[180px] mb-10"
          } flex-1 bg-milk-coffe/20 dark:bg-milk-choco rounded-lg animate-skeleton-loading`}
        ></div>
        {type === "project" && (
          <div className="w-[180px] h-[100px] bg-milk-coffe/20 dark:bg-milk-choco rounded-lg animate-skeleton-loading"></div>
        )}
      </div>
      {type === "project" && (
        <div className="flex items-center gap-4 mb-12">
          <div className="h-12 w-[120px] bg-milk-coffe/20 dark:bg-milk-choco rounded-lg animate-skeleton-loading"></div>
          <div className="h-12 w-[120px] bg-milk-coffe/20 dark:bg-milk-choco rounded-lg animate-skeleton-loading"></div>
        </div>
      )}
      <div className="h-4 bg-milk-coffe/20 dark:bg-milk-choco mb-2 mr-10 rounded animate-skeleton-loading"></div>
      <div className="h-4 bg-milk-coffe/20 dark:bg-milk-choco mb-2 mr-20 rounded animate-skeleton-loading"></div>
      <div className="h-4 bg-milk-coffe/20 dark:bg-milk-choco mb-2 mr-32 rounded animate-skeleton-loading"></div>
    </div>
  );
};

export default LoadingSkeletonDetailPage;
