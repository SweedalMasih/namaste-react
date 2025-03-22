import { useState, useEffect } from "react";
import { FETCH_MENU_URL, MENU_ITEM_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log({ resId });
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(FETCH_MENU_URL + resId);
    const data = await response.json();

    const menuItems =
      data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
        ?.card?.card?.itemCards;

    console.log(menuItems);

    setMenu(menuItems);
  };
  return (
    <div className="container">
      <div className="restaurant-menu">
        <h2>Menu</h2>
        {menu?.map((item) => (
          <div key={item?.card?.info?.id} className="menu-item">
            <div className="item-info">
              <h3>{item?.card?.info?.name}</h3>
              <p>
                Price:{" "}
                {(item?.card?.info?.price ?? item?.card?.info?.defaultPrice) /
                  100}
              </p>
              <p>{item?.card?.info?.description}</p>
            </div>
            <div className="item-img">
              <img
                src={MENU_ITEM_IMG + item?.card?.info?.imageId}
                alt="Image of the menu item"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
