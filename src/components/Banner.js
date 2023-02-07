import { IMG_CDN_URL } from "../../constants";

const Banner = ({
  name,
  cloudinaryImageId,
  cuisines,
  locality,
  area,
  avgRating,
  sla,
  costForTwo,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="hidden bg-current md:flex flex-wrap items-center gap-5 p-4 mt-20">
      {/* left img */}
      <div className="max-w-[16rem] my-8">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-img" />
      </div>

      {/* central restro details */}
      <div className="flex flex-col grow text-white mt-4 px-12">
        <h1 className="text-3xl">{name}</h1>

        <div className="mt-4">
          <h4 className="text-gray-default font-light text-sm">
            {cuisines?.join(", ")}
          </h4>
          <h4 className="mt-2 text-gray-default font-light text-sm">
            {locality + ", " + area}
          </h4>
          <div className="flex flex-wrap gap-6 items-center mt-4">
            <span className="text-lg font-semibold relative -top-0.5">
              <i className="material-symbols-outlined relative top-0.5">star</i>
              {avgRating}
            </span>
            <span className="text-lg font-semibold">
              {sla?.deliveryTime} mins
            </span>
            <span className="text-lg font-semibold">₹ {costForTwo / 100}</span>
          </div>
        </div>
      </div>
      {/* offer section */}
      <div className="text-white border border-white grow p-4">
        <fieldset>
          <legend>Offers</legend>
          <div className="flex flex-col gap-6 mt-4">
            {aggregatedDiscountInfo?.descriptionList.map((disc, idx) => (
              <div className="flex gap-6 items-center text-sm">
                <span class="material-symbols-outlined border rounded-full p-px ">
                  percent
                </span>
                <span key={idx} className="">
                  {" "}
                  {disc?.meta}
                </span>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Banner;
