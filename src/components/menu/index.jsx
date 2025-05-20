export const Menu = ({ menuItems }) => {
  return (
    <div className='menu'>
      <h3>Menu</h3>
      <ul>
        {menuItems.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
