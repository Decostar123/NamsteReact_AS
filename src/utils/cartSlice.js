import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name :"cart" , 
    initialState :{
        items :[]
    } , 
    reducers :{
        add: (state , action)=>{
            state.items.push( action.payload ) ; 
        }, 
        remove : ( state , action )=>{
            state.items.pop() ; 
        }, 
        clear : ( state ) =>{
            state.items = [] ; 
            // state.items.length = 0 ;
        }
    }
}); 
console.log(" the action is " , cartSlice.actions ) ; 
export const {add , remove , clear } = cartSlice.actions ; 
export default cartSlice.reducer ; 