import { createSelector, createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basketSlice",
    initialState: {
    },
    reducers: {
        addToBasket(state, { payload }) {
            const { dishId, name } = payload;
            if (state[dishId]) {
                state[dishId].quantity++;
                return;
            }

            state[dishId] = {
                id: dishId,
                name,
                quantity: 1
            };

        },
        removeFromBasket(state, { payload }) {
            const dishId = payload;
            if (!state[dishId]) {
                return;
            }

            if (state[dishId].quantity > 1) {
                state[dishId].quantity--;
                return;
            }

            delete state[dishId];
        }
    },
    selectors: {
        selectBasket: (state) => state,
        selectBasketAmountById: (state, id) => { return state[id]?.quantity || 0 }
    }
});

const selectBasketSlice = (state) => state[basketSlice.name];
export const selectBasketItems = createSelector([selectBasketSlice],
    (state) => Object.values(state));

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const { selectBasket, selectBasketAmountById } = basketSlice.selectors;
