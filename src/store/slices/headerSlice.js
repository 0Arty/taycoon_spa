import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    isOpen : false
}

export const headerSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {
        setIsOpen : (state)=>{
            state.isOpen = !state.isOpen
        },

    }
})

export const { setIsOpen } = headerSlice.actions
export default headerSlice.reducer