// import resObj from "../utils/mockData";
//  [no longer needed]

import RestaurantCardComponent, { withPromotedCard } from "./RestaurantCardComponent"
import { useState, useEffect, useRef, useContext }  from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CDN_URL } from "../utils/constants";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import LocationContext from "../LocationContext";

const BodyComponent = ()=>{
    // local state variable - Super Powerful variable
    // we use hooks to make it super powerful
    // React Hook -> Normal js function but has some power 
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants,setFilteredListOfRestaurants] = useState([]);
    const [onMind, setOnMind] = useState([]);

    const [searchText, setSearchText] = useState("");
    const scrollRef = useRef(null);
    const {lattitude} = useContext(LocationContext);
    const {longitude} = useContext(LocationContext);
    console.log(lattitude);
    console.log(longitude);
    // whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)
    // console.log("body rendered");

    const RestaurantPromotedCard = withPromotedCard(RestaurantCardComponent);

    useEffect(()=>{
        fetchData();
    },[lattitude,longitude]);

    const fetchData = async ()=> {
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat="+lattitude+"&lng="+longitude+"&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData =await data.json();
        console.log(jsonData);
        setOnMind(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        
        
        //optional chaining
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    console.log(listOfRestaurants);
    console.log(onMind);

    if(!useOnlineStatus()){
        return <h1>Yupp It's Looks Like, Your Internet Is nOt Working....</h1>
    }

    const scrollLeft = ()=>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({left:-200, behavior:"smooth"})
        }
    }

    const scrollRight = ()=>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({left:200, behavior:"smooth"})
        }
    }
  
    
    

    return listOfRestaurants.length === 0 ? (<Shimmer />): (
        <div className="body px-8">
            <div className="my-6">
                <h1 className="text-2xl font-bold italic mx-14 mt-4">What's on your Mind?</h1>
                <div className="">
                    <div className="py-2 flex justify-end mx-14">
                    <button className="text-3xl mx-2 hover:bg-pink-200 hover:rounded-full transition-all hover:scale-110" onClick={scrollLeft}><MdOutlineArrowCircleLeft /></button>
                    <button className="text-3xl hover:bg-pink-200 hover:rounded-full transition-all hover:scale-110" onClick={scrollRight}><MdOutlineArrowCircleRight /></button>
                    </div>
                <div className="w-11/12  my-2 mb-10 mx-auto  flex overflow-x-auto scroll-smooth hide-scrollbar" ref={scrollRef}>
                    {onMind.map(value => (
                    <div key={value.id} className="flex-shrink-0 mx-4">
                        <img className="w-36 " src={CDN_URL+value.imageId}/>
                    </div>))}
                </div>
                </div>
            </div>
            <div className="flex my-7 w-8/12 mx-auto gap-10">
                <div className=" flex gap-10 mx-10">
                    <input type="text" placeholder="Search by Restaurant Name..!" className="border-2 w-[300px] p-2 rounded-lg fill-black mx-6 shadow-lg" 
                    value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>

                    <button className="search-btn px-6 border-4 bg-yellow-200 shadow-lg transform transition-all hover:scale-110 rounded-lg hover:bg-blue-300" onClick={()=>{
                        // filter the restaurants cards and update the UI.
                        // searchText 
                        const filteredList = listOfRestaurants.filter((res)=>{
                            return (res.info?.name).toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredListOfRestaurants(filteredList)
                    }}>Search</button>
                </div>
                <button className="filter-btn mx-10 px-3 border-4 border-grey-400 bg-yellow-200 shadow-lg transform transition-all hover:scale-110 rounded-lg hover:bg-blue-300" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((data)=>{
                        return data.info.avgRating  > 4;
                    })
                    setListOfRestaurants(filteredList)
                }}>Top Rated Restaurants</button>

            </div>
            <div className=" flex flex-wrap mx-1">
                {
                    // for loop is not valid 
                    filteredListOfRestaurants.map(restaurant => <Link className="link" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>{
                        (restaurant.info.avgRating >=4.4 ) ?( <RestaurantPromotedCard resData={restaurant}/>) :
                        (<RestaurantCardComponent  resData={restaurant}/>)
                        } </Link>)
                }
            </div>

        </div>
    )

}

export default BodyComponent;