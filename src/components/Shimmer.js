const Shimmer = () => {
  return (
    <div className="">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div className="" key={index}>
            <div className=""></div>
            <div className="">
              <div className=" "></div>
              <div className=""></div>
              <div className=" "></div>
              <div className=""></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
