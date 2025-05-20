import { useState } from "react";

export const useCount = () => {
    const [count, setCount] = useState(0);

    const onDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const onIncrement = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };

    return {
        count,
        onDecrement,
        onIncrement,
    };
}
