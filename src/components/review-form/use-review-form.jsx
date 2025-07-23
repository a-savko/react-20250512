import { useReducer } from 'react';

const MIN_RATING = 1;
const MAX_RATING = 5;

const INITIAL_FORM = {
  id: null,
  userId: '',
  text: '',
  rating: 0,
};

const USER_ID_ACTION = 'setUserId';
const TEXT_ACTION = 'setText';
const RATING_ACTION = 'setRating';
const CLEAR_ACTION = 'clear';
const SET_FORM_ACTION = 'setForm';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case USER_ID_ACTION:
      return {
        ...state,
        userId: payload,
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
    case SET_FORM_ACTION:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export const useReviewForm = () => {
  const [reviewForm, dispatch] = useReducer(reducer, INITIAL_FORM);

  const onUserIdChange = (userId) => {
    dispatch({ type: USER_ID_ACTION, payload: userId });
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

  const setForm = (formData) => {
    dispatch({ type: SET_FORM_ACTION, payload: formData });
  };

  return {
    MAX_RATING,
    MIN_RATING,
    reviewForm,
    onUserIdChange,
    onTextChange,
    onRatingChange,
    onRatingIncrement,
    onRatingDecrement,
    clear,
    setForm,
  };
};
