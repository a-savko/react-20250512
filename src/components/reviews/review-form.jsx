import { Counter } from '../common/counter';
import { useReviewForm } from './use-review-form';

export const ReviewForm = ({ restaurantId }) => {
  const {
    reviewForm,
    onNameChange,
    onTextChange,
    onRatingIncrement,
    onRatingDecrement,
    clear,
  } = useReviewForm(restaurantId);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div>
        <label>
          Name:
          <input
            name='name'
            type='text'
            value={reviewForm.name}
            onChange={(event) => {
              onNameChange(event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Text:
          <textarea
            name='text'
            value={reviewForm.text}
            onChange={(event) => {
              onTextChange(event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Rating:
          <Counter
            count={reviewForm.rating}
            onDecrement={onRatingDecrement}
            onIncrement={onRatingIncrement}
          />
        </label>
      </div>
      <div>
        <button name='clear' onClick={clear}>
          Clear
        </button>
      </div>
    </form>
  );
};
