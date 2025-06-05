import { useEffect, useState } from "react";

export const useScroll = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    const scrollChange = () => {
        const scrollHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );

        const scrollTop = Math.ceil(window.scrollY);
        const clientWindowHeight = document.documentElement.clientHeight;
        const scrollPercent = scrollTop / (scrollHeight - clientWindowHeight);
        const scrollPercentRounded = Number((scrollPercent * 100).toFixed(2));

        setScrollPercent(scrollPercentRounded);
    };

    useEffect(() => {
        // mount
        window.addEventListener('scroll', scrollChange);

        return () => {
            // unmount
            window.removeEventListener('scroll', scrollChange);
        };
    }, []);

    return {
        scrollPercent
    }
}
