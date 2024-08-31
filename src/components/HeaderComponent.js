import { useState, useEffect, useContext, useCallback, useRef } from "react";
import exampleImage  from "../img/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../UserContext";
import { useSelector } from "react-redux";
// import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import axios from 'axios';
import LocationContext from "../LocationContext";

const libraries = ["places"];

const HeaderComponent = ()=>{
    const [btnName, setBtnName] = useState("LogIn");
    const cartItems = useSelector((store)=> store.cart.items);
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const [query, setQuery] = useState('');
    const {lattitude, setLattitude, longitude, setLongitude} = useContext(LocationContext);


    const handleSearch = async () => {
        try {
            const response = await axios.get('https://nominatim.openstreetmap.org/search', {
                params: {
                    q: query,
                    format: 'json',
                },
            });
            if (response.data.length > 0) {
                const { lat, lon } = response.data[0];
                setLattitude(lat);
                setLongitude(lon);
                console.log(`Latitude: ${lat}, Longitude: ${lon}`);
            } else {
                console.log('Location not found');
            }
        } catch (error) {
            console.error('Error fetching location:', error);
        }
    };


   
    // console.log(loggedInUser);

    // if there is no dependency array => the use effect render on every component render
    // if there is empty dependency array => the use effect render only once at initial after that it will not be rendered
    // if there is an dependency array => the use effect render on avery change or update of dependency
    // useEffect(()=>{
    //     console.log("useEffect");
    // },[btnName]);

    

    // Now we are subscibing the store using useSelector Hook.
    
    // console.log(cartItems);
    

    return ( <div className=" flex justify-between bg-lime-200 shadow-xl rounded-lg shadow-slate-400">
                <div className="w-28  flex">
                    <img className="transform transition-all hover:scale-90 rounded-2xl shadow-lg bg-red-400" src={exampleImage} alt="Logo"/>
                    
                    <input type="text" placeholder="Enter the city Name...!" value={query} onChange={(e)=>setQuery(e.target.value)} className="mx-4 my-3 p-2 bg-white text-black"/>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className=" flex  items-center ">
                    <ul className="flex ">
                        <li className="px-3 font-semibold ">Online Status: {onlineStatus ? "🟢" : "🔴"  } </li>
                        <li className="px-3 font-semibold"><Link className="link" to="/">Home</Link></li>
                        <li className="px-3 font-semibold"><Link className="link" to="/cart">Cart[{cartItems.length}]</Link></li>
                        <li className="px-3 font-semibold"><Link to="/Grocery">Grocery</Link></li>
                        <li className="px-3 font-semibold transform transition-all hover:scale-125  "><button className="text-white border px-1 shadow-xlg bg-pink-300 rounded-lg hover:text-cyan-600 " onClick={()=>{
                                if(btnName==="LogIn"){
                                    
                                    setBtnName("LogOut");
                                }else{ 
                                    setBtnName("LogIn")
                                }
                            }
                        }><Link className="link" to="/login">{btnName}</Link></button></li>
                        <li>
                            <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-400 rounded-full transition-all hover:scale-90 cursor-pointer dark:bg-gray-400">
                                <span class="font-medium text-white dark:text-gray-100">{loggedInUser}</span>
                            </div>

                        </li>
                    </ul>

                </div>

        </div>
        )
}

export default HeaderComponent;