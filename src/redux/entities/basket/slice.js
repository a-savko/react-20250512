import { createSelector, createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basketSlice",
    initialState: {
    },
    reducers: {
        addToBasket(state, { payload }) {
            state[payload] = (state[payload] || 0) + 1; // increment or add new one
        },
        removeFromBasket(state, { payload }) {
            if (!state[payload]) {
                return;
            }

            if (state[payload] > 1) {
                state[payload]--;
                return;
            }

            delete state[payload];
        }
    },
    selectors: {
        selectBasket: (state) => state,
        selectBasketAmountById: (state, id) => { return state[id] || 0 }
    }
});

const selectBasketSlice = (state) => state[basketSlice.name];
export const selectBasketItems = createSelector([selectBasketSlice],
    (state) => {
        return Object.keys(state).map((dishId) => {
            return { id: dishId, quantity: state[dishId] }
        })
    });

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const { selectBasket, selectBasketAmountById } = basketSlice.selectors;
