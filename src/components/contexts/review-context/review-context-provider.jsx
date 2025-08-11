'use client';

import { useState } from 'react';
import { ReviewContext } from './review-context';

export const ReviewContextProvider = ({ children }) => {
  const [editReview, setEditReview] = useState(null);

  return (
    <ReviewContext value={{ editReview, setEditReview }}>
      {children}
    </ReviewContext>
  );
};
