const Shimmer = () => {
  return (
    <div className="mt-20  border border-black flex gap-4 w-full flex-wrap">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div className="w-[18rem] p-4 bg-gray-dark" key={index}>
            <div className="h-32 rounded-lg bg-gray-light animate-pulse mb-4"></div>
            <div className="space-y-3">
              <div className="h-3 rounded-lg bg-gray-light animate-pulse"></div>
              <div className="h-3 rounded-lg bg-gray-light animate-pulse"></div>
              <div className="h-3 rounded-lg bg-gray-light animate-pulse"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
