const Shimmer = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 mt-20 p-8 mx-auto w-full ">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            className="w-[14rem] px-4 py-8 shadow animate-pulse sm:w-[18rem]"
            key={index}
          >
            <div className="h-32 rounded-lg bg-gray-xlight animate-shimmer mb-4"></div>
            <div className="space-y-3">
              <div className="h-3 rounded-lg bg-gray-xlight animate-shimmer bg-gradient-to-r from-gray-xlight to-gray-default"></div>
              <div className="h-3 rounded-lg bg-gray-xlight animate-shimmer "></div>
              <div className="h-3 rounded-lg bg-gray-xlight animate-shimmer"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
