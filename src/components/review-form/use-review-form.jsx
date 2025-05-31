import { useEffect, useReducer } from 'react';

const MIN_RATING = 1;
const MAX_RATING = 5;

const INITIAL_FORM = {
  name: '',
  text: '',
  rating: MAX_RATING,
};

const NAME_ACTION = 'setName';
const TEXT_ACTION = 'setText';
const RATING_ACTION = 'setRating';
const CLEAR_ACTION = 'clear';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case NAME_ACTION:
      return {
        ...state,
        name: payload,
      };
    case TEXT_ACTION:
      return {
        ...state,
        text: payload,
      };
    case RATING_ACTION:
      return {
        ...state,
        rating: payload,
      };
    case CLEAR_ACTION:
      return INITIAL_FORM;
    default:
      return state;
  }
};

export const useReviewForm = (restaurantId) => {
  const [reviewForm, dispatch] = useReducer(reducer, INITIAL_FORM);

  const onNameChange = (name) => {
    dispatch({ type: NAME_ACTION, payload: name });
  };

  const onTextChange = (text) => {
    dispatch({ type: TEXT_ACTION, payload: text });
  };

  const onRatingChange = (rating) => {
    dispatch({ type: RATING_ACTION, payload: rating });
  };

  const onRatingIncrement = () => {
    if (reviewForm.rating < MAX_RATING) {
      dispatch({ type: RATING_ACTION, payload: reviewForm.rating + 1 });
    }
  };

  const onRatingDecrement = () => {
    if (reviewForm.rating > MIN_RATING) {
      dispatch({ type: RATING_ACTION, payload: reviewForm.rating - 1 });
    }
  };

  const clear = () => {
    dispatch({ type: CLEAR_ACTION });
  };

  useEffect(() => {
    clear(); // to clear the form when a tab is changed
  }, [restaurantId]);

  return {
    reviewForm,
    onNameChange,
    onTextChange,
    onRatingChange,
    onRatingIncrement,
    onRatingDecrement,
    clear,
  };
};
