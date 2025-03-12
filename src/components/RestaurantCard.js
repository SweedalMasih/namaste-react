import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="card">
      <img className="resImage" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <p>{cuisines?.join(", ")}</p>
      <p>{avgRating} stars</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
