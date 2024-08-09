import { CDN_URL } from "../utils/constants";

// in case of named export like that u import 
// props here are the simple properties send by the component.  as an object

export const RestaurantCardComponent = (props)=>{

    const {resData} = props;
    const {name, cuisines, avgRating, sla, costForTwo} = resData.info;
    return (
        <div className="res-card">
            <img className="res-img" alt="res-logo" 
            src={
                CDN_URL+(resData.info.cloudinaryImageId)
                }/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime+" Minutes"}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCardComponent;