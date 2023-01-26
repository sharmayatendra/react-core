const Shimmer = () => {
  return (
    <div className="flex">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmerBG media"></div>
            <div className="p-32">
              <div className="shimmerBG title-line"></div>
              <div className="shimmerBG title-line end"></div>
              <div className="shimmerBG content-line m-t-24"></div>
              <div className="shimmerBG content-line"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
