import { CDN_URL } from "../utils/constants";
import { GiScooter } from "react-icons/gi";

// in case of named export like that u import 
// props here are the simple properties send by the component.  as an object

export const RestaurantCardComponent = (props)=>{

    const {resData} = props;
    const {name, cuisines, avgRating, sla, costForTwo} = resData.info;
    return (
        <div className="mx-6 h-[350px] my-6 px-3 py-3 rounded-3xl bg-slate-100 w-[310px] transition-all hover:shadow-lg hover:scale-110 hover:bg-slate-200 ">
            <div>
            <img className=" w-[290px] h-[200px] border-2 my-1 rounded-xl shadow-md to-slate-400 transition-all hover:scale-95" alt="res-logo" 
            src={
                CDN_URL+(resData.info.cloudinaryImageId)
                }/>
            </div>
            <div className="flex justify-between">
            <h3 className="font-bold text-xl mx-2 truncate">   {name}</h3>
            <h4 className="font-medium text-base">⭐ {avgRating}</h4>
            </div>
            <h4 className="mx-2 font-light text-sm truncate">  {cuisines.join(", ")}</h4>
            <div className="flex gap-3 my-1">
            
            <h4 className="mx-2 font-medium  text-2xl"> <GiScooter /></h4>
            <h4 className="mx-2 font-medium  text-base">{sla.deliveryTime+" Minutes"}</h4>
            </div>
            <h4 className="mx-2 text-slate-500"> {costForTwo}</h4>
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