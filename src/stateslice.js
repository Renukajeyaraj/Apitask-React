import { createSlice } from "@reduxjs/toolkit";
// import Productdetails from "./productdetails";
//import { initialState } from "../Task/stateReducer";


const stateSlice=createSlice({
    name:"sample",
    initialState: {
        isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn"))||false,
        forms:[],
        fav:[],
        adds:[],
        count:[],
        arr:false
    },
    reducers:{
        login: (state,action) => {
            state.isLoggedIn =action.payload;
        },
        forms: (state,action) => {
            state.forms=action.payload;
        },
        fav: (state,action) => {
            state.forms.filter((value)=>
            value.id === action.payload.id ? (value.isNum = !action.payload.isNum):false,
                            )
        },
        adds:(state,action) =>{
            state.forms.filter((car)=>
            car.id===action.payload.id?(car.isCart= !action.payload.isCart):false
            ) }
        },
        ProductDetails:(state,action) =>{
            state.adds=action.payload;
        }

    }
)

export const  {login,forms,adds,fav,ProductDetails} = stateSlice.actions;
export default stateSlice.reducer;