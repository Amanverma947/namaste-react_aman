import RestrauntCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = ()=>{

    const [listOfRestaurants,setlistOfRestaurants]=useState([]);
    const [searchText, setSearchText]= useState("");
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

       setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfRestaurants.length == 0){
        return <Shimmer />;
    }

    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="search-box" 
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredRestaurant=listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );             
                        setFilteredRestaurant(filteredRestaurant);
                        console.log(searchText);
                    }}>Search</button>
                </div>
            <button 
                className="filter-btn" 
                onClick={()=>{
                const filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating > 4
                );
                setFilteredRestaurant(filteredList);
                console.log(listOfRestaurants);
                }}>
                Top Rated Restraunts
            </button>
            </div>
            
            <div className="res-container">
                {filteredRestaurant.map((restaurant)=>(
                <RestrauntCard key={restaurant.info.id} resData={restaurant}/>
                ))}

            </div>
        </div>
    );
}

export default Body;