import { NoData } from '../common/no-data';
import { Review } from '../review-item/review-item';
import { ReviewForm } from '../review-form/review-form';

export const Reviews = ({ restaurantId, reviews }) => {
  return (
    <div className='reviews'>
      <h3>Reviews</h3>
      {reviews && reviews.length > 0 ? (
        <div>
          <ul>
            {reviews.map(({ id, text }) => (
              <Review key={id} text={text} />
            ))}
          </ul>
        </div>
      ) : (
        <NoData />
      )}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};
