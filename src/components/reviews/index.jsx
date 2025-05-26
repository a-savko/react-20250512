import { Review } from './review';

export const Reviews = ({ reviews }) => {
  return (
    <div className='reviews'>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ id, text }) => (
          <Review key={id} text={text} />
        ))}
      </ul>
    </div>
  );
};
