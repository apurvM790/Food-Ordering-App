import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{
    const [resMenu, setResMenu] = useState(null);

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
    const  resCards = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;

    console.log(resCards);
    if(resCards === undefined) return <Shimmer/>

    const menuImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";

    return (
        <div className="mx-6 my-6">
            <h1 className="font-bold text-3xl mx-[400px]">{name}</h1>
            <div className="w-[800px] mx-[400px]  my-2 shadow-xl rounded-xl items-center bg-slate-300 py-10">
                <div className="font-medium mx-56 py-2">
                    <h3>⭐{avgRatingString} ({totalRatingsString}) ~~~~ {costForTwoMessage}</h3>
                </div>
                <div className="font-light mx-80 py-1">
                    <h3>{cuisines.join(", ")}</h3>
                </div>
                <div className="font-light mx-80 py-1">
                    <h3>Outlet: {areaName}</h3>
                </div>
                <div className="delivery-time mx-72 py-1">
                    <h3>🛵________ 20{resMenu?.cards[2]?.card?.card?.info.sla.minDeliveryTime}-{resMenu?.cards[2]?.card?.card?.info.sla.maxDeliveryTime} Minutes</h3>
                </div>
            </div>
            {/* <p>{cuisines.join(", ")}{" ~ "+costForTwoMessage}</p> */}
            <h2 className="font-bold text-xl my-8">Recommended ({resCards.length}) </h2>
            {resCards.map((e)=>(
                    <div key={e.card.info.id} className="flex flex-wrap border-b-4 py-4 justify-between mx-32">
                        <div className="details">
                        <div className="font-semibold text-lg my-1 ">
                            <h2>{e.card.info.name}</h2>
                        </div>
                        <div className="dish-cost my-1">
                            <h2>💸{e.card.info.price/100 || e.card.info.defaultPrice/100}</h2>
                        </div>
                        <div className="dish-rating my-1">
                            <h4>⭐{e.card.info.ratings.aggregatedRating.rating} ({e.card.info.ratings.aggregatedRating.ratingCount })</h4>
                        </div>
                        <div className="dish-description my-1 font-light">
                            <p>{e.card.info.description}</p>
                        </div>
                        </div>
                        <div className="p-dish-manu-img">
                            <img className="w-[150px] h-[150px] rounded-2xl transform transition-all hover:scale-95" src={menuImg + e.card.info.imageId}/>
                        </div>
                    </div>
            ))}
            
        </div>
    )
}

export default RestaurantMenu;