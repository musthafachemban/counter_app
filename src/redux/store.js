import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
/* install reduxjs/toolkit == to create configurestore */
export const store= configureStore({
    /* reducer can only update value of state in store */
    /* reducer key is predefine(object which can hold more than one reducer) */
    /* to create Action file */
    /* to create reducer */ 
    reducer:{
        // reducer is coming counterSlice since we are export reducer as export default
        counter:counterSlice
    }
})