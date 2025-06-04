import { Counter } from '../counters/counter';
import { useReviewForm } from './use-review-form';
import { ClearButton } from '../buttons/clear-button/clear-button';

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
    <div>
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
          <ClearButton onClick={clear}>Clear</ClearButton>
        </div>
      </form>
    </div>
  );
};
