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
    const  resCards = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

    console.log(resCards);
    if(resCards === undefined) return <Shimmer/>

    const menuImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";

    return (
        <div className="menu">
            <h1>{name}</h1>
            <div className="menu-header">
                <div className="rating-price">
                    <h3>*{avgRatingString} ({totalRatingsString}) . {costForTwoMessage}</h3>
                </div>
                <div className="menu-cuisines">
                    <h3>{cuisines.join(", ")}</h3>
                </div>
                <div className="outlet-place">
                    <h3>{areaName}</h3>
                </div>
                <div className="delivery-time">
                    <h3>{resMenu?.cards[2]?.card?.card?.info.sla.minDeliveryTime}-{resMenu?.cards[2]?.card?.card?.info.sla.maxDeliveryTime} Minutes</h3>
                </div>
            </div>
            {/* <p>{cuisines.join(", ")}{" ~ "+costForTwoMessage}</p> */}
            <h2 className="recommended">Recommended ({resCards.length}) </h2>
            {resCards.map((e)=>(
                    <div key={e.card.info.id} className="recommended-list">
                        <div className="details">
                        <div className="dish-name">
                            <h2>{e.card.info.name}</h2>
                        </div>
                        <div className="dish-cost">
                            <h2>Rs.{e.card.info.price/100 || e.card.info.defaultPrice/100}</h2>
                        </div>
                        <div className="dish-rating">
                            <h4>{e.card.info.ratings.aggregatedRating.rating} ({e.card.info.ratings.aggregatedRating.ratingCount})</h4>
                        </div>
                        <div className="dish-description">
                            <p>{e.card.info.description}</p>
                        </div>
                        </div>
                        <div className="p-dish-manu-img">
                            <img className="dish-menu-img" src={menuImg + e.card.info.imageId}/>
                        </div>
                    </div>
            ))}
            
        </div>
    )
}

export default RestaurantMenu;