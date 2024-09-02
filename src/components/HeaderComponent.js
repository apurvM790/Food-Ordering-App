import { useState, useEffect, useContext, useCallback, useRef } from "react";
import { useState, useEffect, useContext } from "react";
import exampleImage  from "../img/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../UserContext";
import { useSelector } from "react-redux";
// import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import axios from 'axios';
import LocationContext from "../LocationContext";
import { FaSearchLocation } from "react-icons/fa";


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
    

    return ( <div className=" flex justify-between bg-white shadow-xl rounded-lg shadow-slate-400">
                <div className="w-28  flex items-center">
                    <img className="transform transition-all hover:scale-90 rounded-2xl shadow-lg bg-red-400 shadow-teal-100" src={exampleImage} alt="Logo"/>
                    
                    <input type="text" placeholder="Enter city Name...!" value={query} onChange={(e)=>setQuery(e.target.value)} className="mx-4 my-3 p-2 h-12 border-2 rounded-lg border-purple-300 italic shadow-xl shadow-purple-200 bg-white text-black"/>
                    <button onClick={handleSearch} className="text-black shadow-xl mx-1 transform transition-all hover:scale-110 shadow-teal-200 hover:bg-gradient-to-r  from-cyan-500 to-blue-500 hover:text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 flex gap-1 text-center me-2 mb-2 ">Search <FaSearchLocation className="py-1 text-2xl animate-spin"/></button>
                </div>
                <div className=" flex  items-center ">
                    <ul className="flex ">
                        <li className="text-black bg-gradient-to-r from-cyan-200 via-cyan-200 to-cyan-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-400 shadow-lg shadow-cyan-300/50 dark:shadow-lg dark:shadow-cyan-500/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Online Status: {onlineStatus ? "🟢" : "🔴"  } </li>
                        <li className=" text-black shadow-xl mx-1 transform transition-all hover:scale-110 shadow-teal-200 hover:bg-gradient-to-r  from-cyan-500 to-blue-500 hover:text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"><Link className="link" to="/">Home</Link></li>
                        <li className="text-black shadow-xl mx-1 transform transition-all hover:scale-110 shadow-teal-200 hover:bg-gradient-to-r  from-cyan-500 to-blue-500 hover:text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"><Link className="link" to="/cart">Cart[{cartItems.length}]</Link></li>
                        <li className="text-black shadow-xl mx-1 transform transition-all hover:scale-110 shadow-teal-200 hover:bg-gradient-to-r  from-cyan-500 to-blue-500 hover:text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"><Link to="/Grocery">Grocery</Link></li>
                        <li className="px-3 font-semibold mx-1 transform transition-all hover:scale-110  "><button className="text-white bg-gradient-to-r from-purple-400 via-purple-400 to-purple-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-400 shadow-lg shadow-purple-200/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2" onClick={()=>{
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
