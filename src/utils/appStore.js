const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        // user: userReducer, [if we have any other slice in our app store.]
    },
});

export default appStore;