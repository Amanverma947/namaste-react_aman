import RestrauntCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = ()=>{

    const [listOfRestaurants,setlistOfRestaurants]=useState(resList);
    
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
            <button 
                className="filter-btn" 
                onClick={()=>{
                const filteredList=listOfRestaurants.filter(
                    (res)=>res.data.avgRating > 4
                );
                setlistOfRestaurants(filteredList);
                console.log(listOfRestaurants);
                }}>
                Top Rated Restraunts
            </button>
            </div>
            
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>(
                <RestrauntCard key={restaurant.data.id} resData={restaurant}/>
                ))}

            </div>
        </div>
    );
}

export default Body;