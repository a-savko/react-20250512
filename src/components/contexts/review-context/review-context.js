import { createContext } from "react";

export const ReviewContext = createContext({
    editReview: null,
    setEditReview: () => { },
});

