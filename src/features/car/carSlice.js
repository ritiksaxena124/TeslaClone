import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name:"car",
    initialState, 
    reducers:{}
})

export const selectCars = state => state.car.cars // car is the name of the slice in createSlice and cars is the array from initialstate

export default carSlice.reducer;