// import resObj from "../utils/mockData";
//  [no longer needed]

import RestaurantCardComponent from "./RestaurantCardComponent"
import { useState, useEffect }  from "react";
import Shimmer from "./Shimmer";

const BodyComponent = ()=>{
    // local state variable - Super Powerful variable
    // we use hooks to make it super powerful
    // React Hook -> Normal js function but has some power 
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=> {
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData =await data.json();
        console.log(jsonData);
        
        //optional chaining
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfRestaurants.length === 0){
        return <Shimmer />
    }
    

  
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filer">
                <button className="filer-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((data)=>{
                        return data.info.avgRating  > 4;
                    })
                    setListOfRestaurants(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    // for loop is not valid 
                    listOfRestaurants.map(restaurant => <RestaurantCardComponent key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>

        </div>
    )

}

export default BodyComponent;