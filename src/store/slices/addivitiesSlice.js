import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addivities: {
        antiblock: {
            name: "antiblock",
            article: ['PE 0600 F', 'PE 0601 F', 'PE 0602 F',]
        },
        antistatic: {
            name: "antistatic",
            article: ['PE 0301 F', 'PE 0317 F',]
        },
        uv: {
            name: "uv",
            article: ['PE 0021 F', 'PE 0040 F', 'PE 0029 F', 'PE 0051 F',]
        },
        antioxidant: {
            name: "antioxidant",
            article: ['PE 0802 F']
        },
        processing: {
            name: "processing",
            article: ['PE 0421 F', 'PE 0422 F', 'PE 0424 F',]
        },
        optical: {
            name: "optical",
            article: ['PE 0103 F',]
        },
        cleaning: {
            name: "cleaning",
            article: ['PE 0101 F']
        },
        foaming: {
            name: "foaming",
            article: ['PE 0706 F',]
        },

    },
    popUp: {
        isOpen: true
    }
}


export const addivitiesSlice = createSlice({
    name: 'addivities',
    initialState,
    reducers: {
        openPopUp: (state) => state.popUp.isOpen = true,
        closePopUp: (state) => state.popUp.isOpen = false,
    }
})

export const { openPopUp, closePopUp } = addivitiesSlice.actions
export default addivitiesSlice.reducer