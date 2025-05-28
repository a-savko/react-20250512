import { Review } from './review';
import { ReviewForm } from './review-form';

export const Reviews = ({ restaurantId, reviews }) => {
  return (
    <div className='reviews'>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ id, text }) => (
          <Review key={id} text={text} />
        ))}
      </ul>
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};
