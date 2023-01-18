import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const nestedHeaderWithJSX = (
  <div className="title">
    <h1>i am h1</h1>
    <h2>i am h2</h2>
    <h3>i am h3</h3>
  </div>
);
const nestedHeader = React.createElement(
  "div",
  {
    className: "title",
  },
  React.createElement("h1", {}, "I am heading 1!!"),
  React.createElement("h2", {}, "I am heading 2!!"),
  React.createElement("h3", {}, "I am heading 3!!")
);

const Header = () => {
  return (
    <div>
      {heading}
      <h1>i am header component!!</h1>
      <h2>i am secondary heading!!</h2>
    </div>
  );
};

const NestedHeader = () => {
  return (
    <div className="title">
      <Header />
      <h1 className="h1" key="heading1">
        i am h1 from component.
      </h1>
      <h2>i am h2 from component.</h2>
      <h3>i am h3 from component.</h3>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="img-container">
        <img
          src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
          alt="logo"
        />
      </div>

      <input type="search" className="inp" placeholder="search..." />
      <ul className="list-items">
        <li>Home</li>
        <li>Contact</li>
        <li>About us</li>
        <li>Cart</li>
        <span className="material-symbols-outlined icon">person</span>
      </ul>
    </header>
  );
};

const heading = (
  <h1 id="jsx" key="jsx">
    !!JSX here
  </h1>
);

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
  cloudinaryImageId,
}) => {
  return (
    <div className="restaurant-card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="food-img"
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <span>{avgRating}</span>
      <span>{deliveryTime}</span>
      <span>{costForTwoString}</span>
    </div>
  );
};

const Body = () => {
  const restaurantList = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "329631",
        name: "Chai Point",
        uuid: "d949eb29-d153-4412-bb9e-5d6c62fb765f",
        city: "10459",
        area: "Golf Course Road",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "begx8kr5tx6yg2v59fqa",
        cuisines: [
          "Bakery",
          "Beverages",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "South Indian",
          "Punjabi",
        ],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 41,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        slaString: "40-50 MINS",
        lastMileTravel: 8.199999809265137,
        slugs: {
          restaurant: "chai-point-sector-73-golf-course",
          city: "noida-1",
        },
        cityState: "10459",
        address:
          "ChaiPoint, Cloud Kitchen Noida Sector 73, Kitchen Block no 11, Pin Code 201307",
        locality: "Sector 73",
        parentId: 1607,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹125 | Use code GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹125 | Use code GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 5500,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5500,
          message: "",
          title: "Delivery Charge",
          amount: "5500",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5737798~p=1~eid=00000185-c259-2dbe-04e9-acb6005f0165",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "8.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "329631",
          deliveryTime: 41,
          minDeliveryTime: 40,
          maxDeliveryTime: 50,
          lastMileTravel: 8.199999809265137,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.3",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "234763",
        name: "Chaayos Chai+Snacks=Relax",
        uuid: "7d29b900-9b81-4627-8568-8f1503becfae",
        city: "10459",
        area: "Sector 142",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "oxthhcdwhqhu5lhd8fh3",
        cuisines: [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Fast Food",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets",
        ],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: "28 MINS",
        lastMileTravel: 4.099999904632568,
        slugs: {
          restaurant: "chaayos-orion-mall-noida-expressway",
          city: "noida-1",
        },
        cityState: "10459",
        address:
          "Unit No. 8 on GF, Tower C, Advant Navis Business Park, Noida Expressway Sector 142, Noida 201305\t",
        locality: "Advant Navis Business Park",
        parentId: 281782,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3300,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3300,
          message: "",
          title: "Delivery Charge",
          amount: "3300",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4 kms",
        hasSurge: false,
        sla: {
          restaurantId: "234763",
          deliveryTime: 28,
          minDeliveryTime: 28,
          maxDeliveryTime: 28,
          lastMileTravel: 4.099999904632568,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.3",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "214227",
        name: "Subway",
        uuid: "08006281-ecff-43f8-9b85-31b6d7429b4c",
        city: "10459",
        area: "Noida Expressway",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "tfwtzv2mdzyibkg8oddl",
        cuisines: ["Fast Food", "Salads", "Snacks", "Desserts", "Beverages"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 5,
        slugs: {
          restaurant: "subway-noida-expressway-noida-expressway",
          city: "noida-1",
        },
        cityState: "10459",
        address:
          "Assotech Business Cresterra, Sector 135, Noida, Uttar Pradesh, India",
        locality: "Noida Expressway",
        parentId: 2,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3800,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3800,
          message: "",
          title: "Delivery Charge",
          amount: "3800",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "214227",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "583088",
        name: "Simple Burger",
        uuid: "12b65a48-9269-4596-8987-669989d3e57f",
        city: "10459",
        area: "Sector 50",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "d3to7amcs0pu8jwauayb",
        cuisines: ["Burgers", "Snacks", "Beverages"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 42,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        slaString: "40-50 MINS",
        lastMileTravel: 8.300000190734863,
        slugs: {
          restaurant: "simple-burger-sector-50-sector-50",
          city: "noida-1",
        },
        cityState: "10459",
        address:
          "Shop No. 2, Inside Simple Bazaar, Metro Station, Block E, Sector 51, Noida, Uttar Pradesh 201301, India",
        locality: "Inside Simple Bazaar",
        parentId: 349369,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FLAT150 off",
          shortDescriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹150 OFF",
          shortDescriptionList: [
            {
              meta: "Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 6600,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 6600,
          message: "",
          title: "Delivery Charge",
          amount: "6600",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5653705~p=4~eid=00000185-c259-2dbe-04e9-acb7005f047d",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "8.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "583088",
          deliveryTime: 42,
          minDeliveryTime: 40,
          maxDeliveryTime: 50,
          lastMileTravel: 8.300000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.3",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "555812",
        name: "Throttle Shrottle",
        uuid: "fc5e9dac-adee-468d-9719-3eada393a067",
        city: "10459",
        area: "Sector 132",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "i0j7imthtjpf9aapafdj",
        cuisines: [
          "North Indian",
          "Chinese",
          "Italian-American",
          "Fast Food",
          "Snacks",
          "Beverages",
        ],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        slaString: "32 MINS",
        lastMileTravel: 3.5999999046325684,
        slugs: {
          restaurant: "throttle-shrottle-noida-expressway-noida-expressway",
          city: "noida-1",
        },
        cityState: "10459",
        address:
          "ROHILLAPUR, BLOCK-A,  SECTOR-132, NOIDA, JEWAR TEHSIL, Gautam Buddha Nagar , , Uttar Pradesh, 201301",
        locality: "Noida Expressway",
        parentId: 215972,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3900,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3900,
          message: "",
          title: "Delivery Charge",
          amount: "3900",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "555812",
          deliveryTime: 32,
          minDeliveryTime: 32,
          maxDeliveryTime: 32,
          lastMileTravel: 3.5999999046325684,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "590722",
        name: "Goli Vada Pav No.1",
        uuid: "7631235e-1364-4f7b-9637-445d186841b7",
        city: "10459",
        area: "Sector 135",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "kaxidir73pury7xhuriz",
        cuisines: ["Maharashtrian", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 5,
        slugs: {
          restaurant: "goli-vada-pav-no.1-noida-expressway-noida-expressway",
          city: "noida-1",
        },
        cityState: "10459",
        address:
          "SHOP NO 17, SECTOR 135 Assotech Business Cresterra, SANDAL STREET, J P GREENS G BLOCK SURAJPUR, GautamBudh Nagar Tahsil-I, Gautam Buddha Nagar , Uttar Pradesh - 201301",
        locality: "Gautambudh Nagar",
        parentId: 3998,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 4900,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4900,
          message: "",
          title: "Delivery Charge",
          amount: "4900",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "590722",
          deliveryTime: 33,
          minDeliveryTime: 33,
          maxDeliveryTime: 33,
          lastMileTravel: 5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.3",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
  ];

  return (
    <div className="body">
      {restaurantList.map((restaurant) => (
        <RestaurantCard {...restaurant.data} />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>footer here!</h1>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
