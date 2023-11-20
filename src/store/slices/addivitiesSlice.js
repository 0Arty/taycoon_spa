import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addivities: {
        antiblock: {
            name: "antiblock",
            article: [
                {
                    name: 'PE 0600 F',
                    table: {
                        meltFlow: true,
                    },
                },
                {

                    name: 'PE 0601 F',
                    table: {
                        meltFlow: true,
                    },
                },
                {

                    name: 'PE 0602 F',
                    table: {
                        meltFlow: true,
                    },
                }
            ],
        },
        antistatic: {
            name: "antistatic",
            article: [
                {
                    name: 'PE 0301 F',
                    table: {
                        meltFlow: true,
                    },
                },
                {

                    name: 'PE 0317 F',
                    table: {
                        meltFlow: true,
                    },
                },

            ],
        },
        uv: {
            name: "uv",
            article: [
                {
                    name: 'PE 0021 F',
                    table: {
                        meltFlow: true,
                    },
                },
                {

                    name: 'PE 0040 F',
                    table: {
                        meltFlow: true,
                    },
                },
                {

                    name: 'PE 0029 F',
                    table: {
                        meltFlow: true,
                        liquidityIndex: true
                    },
                },
                {

                    name: 'PE 0051 F',
                    table: {
                        meltFlow: true,
                        liquidityIndex: true
                    },
                },

            ],
        },
        antioxidant: {
            name: "antioxidant",
            article: [
                {
                    name: 'PE 0802 F',
                    table: {
                        meltFlow: true,
                        destinity: true, 
                        heatResistanse: true,
                        foodContact: true,
                    },
                },


            ],
        },
        processing: {
            name: "processing",
            article: [
                {
                    name: 'PE 0421 F',
                    table: {
                        meltFlow: true,
                        destinity: true, 
                        heatResistanse: true,
                    },
                },
                {
                    name: 'PE 0422 F',
                    table: {
                        meltFlow: true,
                        destinity: true, 
                        heatResistanse: true,
                    },
                },
                {
                    name: 'PE 0424 F',
                    table: {
                        meltFlow: true,
                        destinity: true, 
                        heatResistanse: true,
                    },
                },


            ],
        },

        optical: {
            name: "optical",
            article: [
                {
                    name: 'PE 0103 F',
                    table: {
                        meltFlow: true,
                    },
                },
            ],
        },
        cleaning: {
            name: "cleaning",
            article: [
                {
                    name: 'PE 0101 F',
                    table: {
                        meltFlow: true,
                    },
                },
            ],
        },



        foaming: {
            name: "foaming",
            article: [
                {
                    name: 'PE 0706 F',
                    table: {
                        meltFlow: true,
                        destinity: true,
                        heatResistance: true,
                    },
                },
            ],
        },

    },
    popUp: {
        isOpen: false,
        name: 'asd',
        article: null,
        table: null,
    }
}


export const addivitiesSlice = createSlice({
    name: 'addivities',
    initialState,
    reducers: {
        openPopUp: (state, action) => {
            state.popUp.isOpen = true;
            state.popUp.name = action.payload.name
            state.popUp.article = action.payload.article
            state.popUp.table = action.payload.table

        },
        closePopUp: (state) => { 
            state.popUp.isOpen = false
            state.popUp.name = null
            state.popUp.article = null
            state.popUp.table= null
         },

    }
})

export const { openPopUp, closePopUp } = addivitiesSlice.actions
export default addivitiesSlice.reducer