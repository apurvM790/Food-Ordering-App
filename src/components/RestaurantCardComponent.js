import { CDN_URL } from "../utils/constants";

// in case of named export like that u import 
// props here are the simple properties send by the component.  as an object

export const RestaurantCardComponent = (props)=>{

    const {resData} = props;
    const {name, cuisines, avgRating, sla, costForTwo} = resData.info;
    return (
        <div className="mx-6 my-6 px-3 py-3 rounded-3xl bg-slate-300 w-[240px] transition-all hover:shadow-lg slate-500">
            <img className=" w-[230px] border-2 my-1 rounded-xl shadow-md to-slate-400 transform transition-all hover:scale-95" alt="res-logo" 
            src={
                CDN_URL+(resData.info.cloudinaryImageId)
                }/>
            <h3 className="font-bold text-xl mx-2">   {name}</h3>
            <h4 className="font-light text-sm ">  {cuisines.join(", ")}</h4>
            <h4 className="font-medium text-base">⭐ {avgRating} {"  🛵.____. "} {sla.deliveryTime+" Minutes"}</h4>
            <h4 className="mx-14 text-base"> {costForTwo}</h4>
        </div>
    )
}

export default RestaurantCardComponent;