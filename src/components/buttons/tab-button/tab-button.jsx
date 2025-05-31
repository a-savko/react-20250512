export const TabButton = ({ title, isActive, onClick }) => {
  return (
    <button disabled={isActive} onClick={onClick}>
      {title}
    </button>
  );
};
