import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent"
// import RestaurantCardComponent from "./components/RestaurantCardComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import {Cart} from "./components/Cart";
import { Error } from "./components/Error";
import { Login } from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import UserContext from "./UserContext";
// import Grocery from "./components/Grocery";

/**
//  * Header
//  * - Logo
//  * - Nav Items
//  * Body
//  * - Search 
//  * - restaurant container
//  *    - restaurant cards
//  *      - img
//  *      - Name of Res, Star Rating, cuisine, delivery time, price. 
//  * 
//  * Footer
//  * - copyright
//  * - links
//  * - social media
//  * 
//  */


// chunking
// dynamic bundling
// lazy loading
// on demand loading

// we get error because it takes time to fetch the file and then renders and react is very fast so something not there to show, then it will throw an error
// to overcome with it 
// Suspense is used and we can wrap our Grocery component into this Suspense
// and the fallback attribute takes a jsx which u want to show at that time of gap.

const Grocery = lazy(()=>import("./components/Grocery"));


// some thing related to authentication of users code written here.


const AppLayout = ()=>{

//     const [userInfo, setUserInfo] = useState(null);

// useEffect(()=>{
//     // after fetching api data we got something:
//     const data = {id:"AS",name:"Ayush Srivastava",};
//     setUserInfo(data.id);
// })

    return (
            <div className="app">
                    <HeaderComponent />
                <Outlet />
                {/* this Outlet component is used as a component according to the route it to be given. 
                    The Route should be given by the router as a children which being filled according to route.*/}
            </div>
        );
}


const appRouter = (
    <HashRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<BodyComponent />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="cart" element={<Cart />} />
                <Route path="grocery" element={
                    <Suspense fallback={<Shimmer />}>
                        <Grocery />
                    </Suspense>
                } />
                <Route path="restaurants/:resId" element={<RestaurantMenu />} />
                <Route path="*" element={<Error />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    </HashRouter>
);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(appRouter);
