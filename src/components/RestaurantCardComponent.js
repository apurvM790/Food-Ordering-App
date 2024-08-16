import { CDN_URL } from "../utils/constants";

// in case of named export like that u import 
// props here are the simple properties send by the component.  as an object

export const RestaurantCardComponent = (props)=>{

    const {resData} = props;
    const {name, cuisines, avgRating, sla, costForTwo} = resData.info;
    return (
        <div className="mx-6 h-[465px] my-6 px-3 py-3 rounded-3xl bg-slate-300 w-[240px] transition-all hover:shadow-lg slate-500">
            <div>
            <img className=" w-[230px] border-2 my-1 rounded-xl shadow-md to-slate-400 transition-all hover:scale-95" alt="res-logo" 
            src={
                CDN_URL+(resData.info.cloudinaryImageId)
                }/>
            </div>
            <h3 className="font-bold text-xl mx-2">   {name}</h3>
            <h4 className="font-light text-sm ">  {cuisines.join(", ")}</h4>
            <h4 className="font-medium text-base">⭐ {avgRating} {"  🛵.____. "} {sla.deliveryTime+" Minutes"}</h4>
            <h4 className="mx-14 text-base"> {costForTwo}</h4>
        </div>
    )
}
// higher order components:
// it takes an component as a input and returns the inhance version of that component.

export const withPromotedCard = (RestaurantCardComponent)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute m-2 p-2 mx-8 rounded-xl bg-black text-white text-base  transition-all hover:scale-110">Promoted</label>
                <RestaurantCardComponent {...props}/>
            </div>
        )
    }
}

export default RestaurantCardComponent;