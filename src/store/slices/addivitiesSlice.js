import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addivities: {
        antiblock: {
            name: "antiblock",
            article : ['0600', '0601', '0602',]
        },
        antistatic: {
            name: "antistatic",
            article : ['0301','0317',]
        },
        uv: {
            name: "uv",
            article : ['0021', '0040', '0029', '0051',]
        },
        antioxidant: {
            name: "antioxidant",
            article : ['0802']
        },
        processing: {
            name: "processing",
            article : ['0421', '0422', '0424',]
        },
        optical: {
            name: "optical",
            article : ['0103',]
        },
        cleaning: {
            name: "cleaning",
            article : ['0101']
        },
        foaming: {
            name: "foaming",
            article : ['0706',]
        },

    }
}


export const addivitiesSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {
        setIsOpen: (state) => {
        },
    }
})

export const { setIsOpen, scrollToTopOn, scrollToTopOff } = addivitiesSlice.actions
export default addivitiesSlice.reducer