export const Reviews = ({ reviews }) => {
  return (
    <div className='reviews'>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
  );
};
