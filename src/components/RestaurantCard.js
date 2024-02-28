import { CDN_URL } from "../utils/constant";
const RestrauntCard =(props)=>{
    const{resData}=props;
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,

    }= resData?.data;
    return(
        <div className="res-card">
            <img  
            className="res-logo"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars </h4>
            <h4>rs {costForTwo / 100} FOR TWO </h4>
            <h4>{deliveryTime} minutes </h4>
        </div>
    );
}


/*
const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return (
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };
  
*/
export default RestrauntCard;
