import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const filterTopRestaurants = () => {
    const topRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4.3
    );
    console.log({ topRestaurants });
    setListOfRestaurants(topRestaurants);
  };
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filterBtn" onClick={filterTopRestaurants}>
          Check Top Rated Restaurants
        </button>
      </div>
      <div className="resCardsContainer">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
