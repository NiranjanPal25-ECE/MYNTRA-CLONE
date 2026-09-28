import {createSlice} from '@reduxjs/toolkit'

const itemsSlice = createSlice({
    name : "items",
    initialState : [],
    reducers : {
        addInitialItems : (state, action) =>{
            return action.payload;
        }
    }
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice;