import React from "react";
import ReactDOM from "react-dom/client";

/*
Episodes 1,2,3
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "h1- Hello World from nested elements!"),
//     React.createElement("h2", {}, "h2- Hello World from nested elements!"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "h1- Hello World from nested elements!"),
//     React.createElement("h2", {}, "h2- Hello World from nested elements!"),
//   ]),
// ]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);
console.log(heading); // object

const jsxHeading = <h1>Hello World using JSX!</h1>;

const Title = () => <h1>My title</h1>;

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1>Hello World from a React component!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent />);
*/

const resList = [
  {
    info: {
      id: "78036",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/a615b4aa-0dc0-43a2-8078-0ca6a1ad3922_78036.jpg",
      locality: "Central Plaza, Kalina",
      areaName: "Santacruz East",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "37K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-12 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/burger-king-central-plaza-kalina-santacruz-east-rest78036",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "31775",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/7d27a6e5-4e91-4e3a-9289-398c7f67f310_31775.JPG",
      locality: "The Capital Bandra Kurla Complex",
      areaName: "Bandra East",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-12 01:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/subway-the-capital-bandra-kurla-complex-bandra-east-rest31775",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "334353",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/0d0a25cb-062e-4554-ac2f-e62e415dc140_334353.jpg",
      locality: "Arihant",
      areaName: "Arihant height",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "8.1K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-12 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/mcdonalds-arihant-arihant-height-rest334353",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "458770",
      name: "SMOOR",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/18/436c89fc-8274-4677-8783-cb7ffa6ca0e2_458770.jpg",
      locality: "Sakinaka",
      areaName: "Sakinaka",
      costForTwo: "₹350 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.6,
      parentId: "3506",
      avgRatingString: "4.6",
      totalRatingsString: "555",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-11 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹479",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "63",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/smoor-sakinaka-rest458770",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "673363",
      name: "Bombay Sweet Shop",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/18/a77d9911-fcfe-4f45-ae4f-eb136eb58b10_673363.jpg",
      locality: "Vidyanagari Marg",
      areaName: "Scruz Bandra East",
      costForTwo: "₹700 for two",
      cuisines: ["Sweets", "Desserts", "Snacks"],
      avgRating: 4.7,
      veg: true,
      parentId: "48883",
      avgRatingString: "4.7",
      totalRatingsString: "476",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-11 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹599",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/bombay-sweet-shop-vidyanagari-marg-scruz-bandra-east-rest673363",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "202836",
      name: "Hangout Cakes & More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/8/3eaf4487-d7f7-431b-a382-4c8882513ce8_202836.jpg",
      locality: "CST Road",
      areaName: "Santacruz East",
      costForTwo: "₹150 for two",
      cuisines: ["Cakes & Pastries", "Desserts", "Bakery"],
      avgRating: 4.4,
      veg: true,
      parentId: "4508",
      avgRatingString: "4.4",
      totalRatingsString: "3.1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-11 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/hangout-cakes-and-more-cst-road-santacruz-east-rest202836",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "576015",
      name: "Go Zero Ice Creams & Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/10/a9b5e416-80bb-4ef8-aa2c-21cb3bf4ef1a_576015.jpg",
      locality: "Goodwill Premises",
      areaName: "BKC",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.1,
      veg: true,
      parentId: "343689",
      avgRatingString: "4.1",
      totalRatingsString: "59",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-11 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/go-zero-ice-creams-and-desserts-goodwill-premises-bkc-rest576015",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "690204",
      name: "Edesia by Freshmenu",
      cloudinaryImageId: "9c9756c9c390f8b5810542429fd50276",
      locality: "CHANDU STUDIO COMPOUND",
      areaName: "Kalina",
      costForTwo: "₹150 for two",
      cuisines: ["Desserts", "Bakery", "Fast Food"],
      avgRating: 4.2,
      parentId: "11246",
      avgRatingString: "4.2",
      totalRatingsString: "110",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-11 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/edesia-by-freshmenu-chandu-studio-compound-kalina-rest690204",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "690203",
      name: "Green Cravings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/6b9786c0-0750-4916-b992-5505b2934fb0_690203.JPG",
      locality: "CHANDU STUDIO COMPOUND",
      areaName: "Kalina",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Grill"],
      avgRating: 3.8,
      parentId: "8660",
      avgRatingString: "3.8",
      totalRatingsString: "94",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-11 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/green-cravings-chandu-studio-compound-kalina-rest690203",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "11239",
      name: "Thambbi",
      cloudinaryImageId: "t6av3q7weumzdozcmowp",
      locality: "Kurla West",
      areaName: "Kurla West",
      costForTwo: "₹400 for two",
      cuisines: ["South Indian", "Punjabi", "Snacks", "Thalis"],
      avgRating: 4.6,
      parentId: "2527",
      avgRatingString: "4.6",
      totalRatingsString: "22K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-11 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹39",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "3.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/thambbi-kurla-west-rest11239",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "769712",
      name: "Pret A Manger",
      cloudinaryImageId: "2ad6ae997870b6e8dd2c9a42150df948",
      locality: "Bandra Kurla Complex",
      areaName: "Maker Maxity",
      costForTwo: "₹600 for two",
      cuisines: ["Cafe", "Snacks", "Beverages", "Salads", "Desserts"],
      avgRating: 4.6,
      parentId: "458911",
      avgRatingString: "4.6",
      totalRatingsString: "342",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-11 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "299",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/pret-a-manger-bandra-kurla-complex-maker-maxity-rest769712",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "342079",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_342079.JPG",
      locality: "Bandra Kurla Complex",
      areaName: "Scruz Bandra East",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      avgRating: 4.6,
      parentId: "281782",
      avgRatingString: "4.6",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-11 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹799",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "402",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/chaayos-chai-snacks-relax-bandra-kurla-complex-scruz-bandra-east-rest342079",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "5172",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/6/bfc7ef02-603c-4e4a-925f-b606830bd977_5172.jpg",
      locality: "Preston Prime Mall",
      areaName: "Bandra Kurla Complex",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-11 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "P",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "1.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/theobroma-preston-prime-mall-bandra-kurla-complex-rest5172",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "192406",
      name: "McCafe by McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/4f63fdda-59fc-4a8c-8e3f-1bc756cef629_192406.jpg",
      locality: "Sion",
      areaName: "Sion",
      costForTwo: "₹250 for two",
      cuisines: ["American", "Beverages", "Desserts"],
      avgRating: 4.6,
      parentId: "8263",
      avgRatingString: "4.6",
      totalRatingsString: "92",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-12 03:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "5.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/mccafe-by-mcdonalds-sion-rest192406",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "464296",
      name: "Atta Girl",
      cloudinaryImageId: "ej7wboon8tk0h8nqhqoq",
      locality: "Lower Depopada",
      areaName: "Ghatkopar Vikhroli",
      costForTwo: "₹500 for two",
      cuisines: ["South Indian", "Indian"],
      avgRating: 4.9,
      veg: true,
      parentId: "37659",
      avgRatingString: "4.9",
      totalRatingsString: "881",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-11 20:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/atta-girl-lower-depopada-ghatkopar-vikhroli-rest464296",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "558806",
      name: "HRX by EatFit",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/8a626b6d-d772-478e-9bcc-12738cf836a8_558806.jpg",
      locality: "Marol Naka",
      areaName: "Andheri East",
      costForTwo: "₹450 for two",
      cuisines: ["Healthy Food", "Salads", "Burgers"],
      avgRating: 4.6,
      parentId: "335529",
      avgRatingString: "4.6",
      totalRatingsString: "888",
      sla: {
        deliveryTime: 57,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-12 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/hrx-by-eatfit-marol-naka-andheri-east-rest558806",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "775521",
      name: "Suchali's Artisan Bakehouse",
      cloudinaryImageId: "f9f262d0c80a41de4c1a890eb36d1085",
      locality: "Andheri Kurla Road",
      areaName: "Marol Sakinaka",
      costForTwo: "₹600 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.5,
      parentId: "196351",
      avgRatingString: "4.5",
      totalRatingsString: "307",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-12 04:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/suchalis-artisan-bakehouse-andheri-kurla-road-marol-sakinaka-rest775521",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "54424",
      name: "Nothing But Chicken",
      cloudinaryImageId: "zqimpyyrxrfqqbm4yvqj",
      locality: "Chembur",
      areaName: "Chembur",
      costForTwo: "₹400 for two",
      cuisines: ["Salads", "Biryani", "Kebabs", "Fast Food", "Healthy Food"],
      avgRating: 4.5,
      parentId: "668",
      avgRatingString: "4.5",
      totalRatingsString: "18K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-12 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "409",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/nothing-but-chicken-chembur-rest54424",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "619308",
      name: "ITC Fabelle Chocolates",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/4647256a-de2f-44d3-8a6f-c82d09d8b251_619308.jpg",
      locality: "Shah Industrial Estate",
      areaName: "Deonar",
      costForTwo: "₹600 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "11024",
      avgRatingString: "4.7",
      totalRatingsString: "60",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-12 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/itc-fabelle-chocolates-shah-industrial-estate-deonar-rest619308",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "25633",
      name: "Barista Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/733e851a-c00e-433c-aec1-1369094bf909_25633.jpg",
      locality: "Garden Appts",
      areaName: "Chembur",
      costForTwo: "₹350 for two",
      cuisines: ["Beverages", "Snacks", "Desserts"],
      avgRating: 4.4,
      parentId: "416281",
      avgRatingString: "4.4",
      totalRatingsString: "2.4K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-12 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹95",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "1.4K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6e6611b1-11e3-4b38-b028-9c0adccbcf90",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/barista-coffee-garden-appts-chembur-rest25633",
      type: "WEBLINK",
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqO5pqbp44nlwC_VMjb0YqB2lTKzoH8hX13w&s"
          alt="Logo"
          className="logo"
        />
      </div>

      <div className="navbar">
        <ul className="navItems">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li className="cart-item">
            <span>Cart </span>
            {/* <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4QkMCkwj6Sw48YaAw4gFB0K0BY9Th5no8Q&s"
              className="cart"
            /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="card">
      <img
        className="resImage"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
        alt={name}
      />
      <h2>{name}</h2>
      <p>{cuisines?.join(", ")}</p>
      <p>{avgRating} stars</p>
      <p>{costForTwo}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resCardsContainer">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
