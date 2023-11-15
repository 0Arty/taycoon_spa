import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isScroll: false
}

export const headerSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {
        setIsOpen: (state) => {
            state.isOpen = !state.isOpen
        },
        scrollToTopOn: (state) => state.isScroll = true,
        scrollToTopOff: (state) => state.isScroll = false,
    }
})

export const { setIsOpen, scrollToTopOn,scrollToTopOff } = headerSlice.actions
export default headerSlice.reducer