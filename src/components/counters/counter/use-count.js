'use client';

import { useState } from "react";

export const useCount = (minCount = 0, maxCount = 5) => {
    const [count, setCount] = useState(minCount);

    const onDecrement = () => {
        if (count > minCount) {
            setCount(count - 1);
        }
    };
    const onIncrement = () => {
        if (count < maxCount) {
            setCount(count + 1);
        }
    };

    return {
        count,
        onDecrement,
        onIncrement,
    };
}
