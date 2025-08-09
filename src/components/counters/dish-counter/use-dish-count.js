import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketAmountById } from "@/redux/entities/basket/slice";
import { useCallback } from "react";

export const useDishCount = (dishId, dishName, minCount = 0, maxCount = 5) => {
    const dispatch = useDispatch();
    const count = useSelector((state) => selectBasketAmountById(state, dishId));

    const onDecrement = useCallback(() => {
        if (count > minCount) {
            dispatch(removeFromBasket(dishId));
        }
    }, [count, dishId, dispatch, minCount]);

    const onIncrement = useCallback(() => {
        if (count < maxCount) {
            dispatch(addToBasket({ dishId, name: dishName }));
        }
    }, [count, dishId, dishName, dispatch, maxCount]);

    return {
        count,
        onDecrement,
        onIncrement,
    };
}
