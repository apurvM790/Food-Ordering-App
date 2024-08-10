import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{
    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const val = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId=699597&catalog_qa=undefined&submitAction=ENTER")

        const json =await val.json();
        console.log(json);
        setResMenu(json?.data);
    }

    // const name = resMenu.cards[2].card.card.info.name;

    return (resMenu === null) ? <Shimmer/> : (
        <div className="menu">
            {/* <h1>{name}</h1> */}
            {/* <p>{cuisines.join(", ")}{" "+costForTwoMessage}</p> */}
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>pizza</li>
                <li>Burger</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;