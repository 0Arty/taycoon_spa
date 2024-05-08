import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addivities: {
        antiblock: {
            name: "antiblock",
            article: [
                {
                    name: 'PE 0600 F',
                    parameters: {
                        meltFlow: true,

                    },
                },
                {

                    name: 'PE 0601 F',
                    parameters: {
                        meltFlow: true,
                    },
                },
                {
                    name: 'PE 0602 F',
                    parameters: {
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
                    parameters: {
                        meltFlow: true,
                    },
                },
                {

                    name: 'PE 0317 F',
                    parameters: {
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
                    parameters: {
                        meltFlow: true,
                    },
                },
                {

                    name: 'PE 0040 F',
                    parameters: {
                        meltFlow: true,
                    },
                },
                {

                    name: 'PP 0029 F',
                    parameters: {
                        meltFlow: true,
                        liquidityIndex: true
                    },
                },
                {

                    name: 'PP 0051 F',
                    parameters: {
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
                    parameters: {
                        meltFlow: true,
                        destinity: true,
                        heatResistanse: true,
                        foodContact: true,
                        appearance: true,
                    },
                },


            ],
        },
        processing: {
            name: "processing",
            article: [
                {
                    name: 'PE 0421 F',
                    parameters: {
                        meltFlow: true,
                        destinity: true,
                        heatResistanse: true,
                        appearance: true,
                    },
                },
                {
                    name: 'PE 0422 F',
                    parameters: {
                        meltFlow: true,
                        destinity: true,
                        heatResistanse: true,
                        appearance: true,
                    },

                },
                {
                    name: 'PE 0424 F',
                    parameters: {
                        meltFlow: true,
                        destinity: true,
                        heatResistanse: true,
                        appearance: true,
                    },
                },


            ],
        },

        optical: {
            name: "optical",
            article: [
                {
                    name: 'PE 0103 F',
                    parameters: {
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
                    parameters: {
                        meltFlow: true,
                        appearance: true,
                    },
                },
            ],
        },



        foaming: {
            name: "foaming",
            article: [
                {
                    name: 'PE 0706 F',
                    parameters: {
                        meltFlow: true,
                        destinity: true,
                        heatResistance: true,
                        appearance: true,
                    },
                },
            ],
        },

    },
    popUp: {
        isOpen: false,
        name: 'asd',
        article: null,
        parameters: null,
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
            state.popUp.parameters = action.payload.parameters

        },
        closePopUp: (state) => {
            state.popUp.isOpen = false
            state.popUp.name = null
            state.popUp.article = null
            state.popUp.parameters = null
        },

    }
})

export const { openPopUp, closePopUp } = addivitiesSlice.actions
export default addivitiesSlice.reducer  