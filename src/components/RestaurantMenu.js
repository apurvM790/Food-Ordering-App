import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResstaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ()=>{
    const [resMenu, setResMenu] = useState(null);
    const [showIndex, setShowIndex] = useState(1);

    const {resId} = useParams();
    console.log(resId);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const val = await fetch(MENU_URL +resId)

        const json =await val.json();
        console.log(json.data);
        setResMenu(json?.data);
    }

    if(resMenu === null) return  <Shimmer/>

    const {name, cuisines, costForTwoMessage, avgRatingString, areaName, totalRatingsString} = resMenu?.cards[2]?.card?.card?.info;
    // console.log(resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    const  resCards = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => (c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    console.log(resCards);

    // resCards

    console.log(resCards);
    if(resCards === undefined) return <Shimmer/>

    

    return (
        <div className="mx-6 my-6">
            <h1 className="font-bold text-3xl mx-[400px]">{name}</h1>
            <div className="w-8/12 mx-auto flex flex-col items-center  my-2 shadow-xl rounded-xl  bg-slate-300 py-10">
                <div className="font-medium  py-2 ">
                    <h3>⭐{avgRatingString} ({totalRatingsString}) ~~~~ {costForTwoMessage}</h3>
                </div>
                <div className="font-light  py-1">
                    <h3>{cuisines.join(", ")}</h3>
                </div>
                <div className="font-light  py-1">
                    <h3>Outlet: {areaName}</h3>
                </div>
                <div className="delivery-time  py-1">
                    <h3>🛵________ 20{resMenu?.cards[2]?.card?.card?.info.sla.minDeliveryTime}-{resMenu?.cards[2]?.card?.card?.info.sla.maxDeliveryTime} Minutes</h3>
                </div>
            </div>

            <div className="">
                {resCards.map((category,index) => <ResstaurantCategory 
                key={category?.card?.card?.title}  
                data={category?.card?.card}
                // showItems={showIndex === index ? true : false}
                // setShowIndex={() => setShowIndex(index)}
                />)}
            </div>
            {/* <p>{cuisines.join(", ")}{" ~ "+costForTwoMessage}</p> */}
            {/* <h2 className="font-bold text-xl my-8">Recommended ({resCards.length}) </h2> */}
        </div>
    )
}

export default RestaurantMenu;