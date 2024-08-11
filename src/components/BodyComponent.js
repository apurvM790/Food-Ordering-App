// import resObj from "../utils/mockData";
//  [no longer needed]

import RestaurantCardComponent from "./RestaurantCardComponent"
import { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const BodyComponent = ()=>{
    // local state variable - Super Powerful variable
    // we use hooks to make it super powerful
    // React Hook -> Normal js function but has some power 
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants,setFilteredListOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");
    // whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)
    // console.log("body rendered");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=> {
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData =await data.json();
        console.log(jsonData);
        
        //optional chaining
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    
    // Conditional Rendering
    return listOfRestaurants.length === 0 ? (<Shimmer />): (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" 
                    value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className="search-btn" onClick={()=>{
                        // filter the restaurants cards and update the UI.
                        // searchText 
                        const filteredList = listOfRestaurants.filter((res)=>{
                            return (res.info?.name).toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredListOfRestaurants(filteredList)
                        console.log(searchText);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((data)=>{
                        return data.info.avgRating  > 4;
                    })
                    setListOfRestaurants(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    // for loop is not valid 
                    filteredListOfRestaurants.map(restaurant => <Link className="link" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCardComponent  resData={restaurant}/> </Link>)
                }
            </div>

        </div>
    )

}

export default BodyComponent;