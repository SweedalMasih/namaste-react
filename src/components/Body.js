import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([[]]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();

    const restaurantData =
      data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
  };

  const filterTopRestaurants = () => {
    const topRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4.3
    );
    setFilteredRestaurants(topRestaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e?.target?.value)}
          />
          <button
            className="searchBtn"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            {" "}
            Search
          </button>
        </div>
        <div>
          <button className="filterBtn" onClick={filterTopRestaurants}>
            Check Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="resCardsContainer">
        {filteredRestaurants?.length > 1
          ? filteredRestaurants?.map((restaurant) => (
              <Link
                to={`/restaurant/${restaurant?.info?.id}`}
                key={restaurant?.info?.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))
          : resList?.map((_, idx) => <Shimmer key={`shimmer-${idx}`} />)}
      </div>
    </div>
  );
};

export default Body;
