import { useCallback, useState } from "react";

export const useScroll = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    const scrollChange = useCallback(() => {
        const scrollHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );

        const scrollTop = window.scrollY;
        const clientWindowHeight = document.documentElement.clientHeight;
        const scrollPercent = scrollTop / (scrollHeight - clientWindowHeight);
        const scrollPercentRounded = Number((scrollPercent * 100).toFixed(2));

        setScrollPercent(scrollPercentRounded);
    }, []);

    return {
        scrollPercent,
        scrollChange
    }
}
