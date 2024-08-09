import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent"
// import RestaurantCardComponent from "./components/RestaurantCardComponent";
import BodyComponent from "./components/BodyComponent";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search 
 * - restaurant container
 *    - restaurant cards
 *      - img
 *      - Name of Res, Star Rating, cuisine, delivery time, price. 
 * 
 * Footer
 * - copyright
 * - links
 * - social media
 * 
 */


const AppLayout = ()=>{
    return <div className="app">
                <HeaderComponent/>
                <BodyComponent/>

            </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)