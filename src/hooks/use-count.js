import { useState } from "react";

const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const useCount = () => {
    const [count, setCount] = useState(0);

    const onDecrement = () => {
        if (count > MIN_COUNT) {
            setCount(count - 1);
        }
    };
    const onIncrement = () => {
        if (count < MAX_COUNT) {
            setCount(count + 1);
        }
    };

    return {
        count,
        onDecrement,
        onIncrement,
    };
}
