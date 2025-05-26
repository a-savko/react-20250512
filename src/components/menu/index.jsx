import { MenuItem } from './menuItem';

export const Menu = ({ menuItems }) => {
  return (
    <div className='menu'>
      <h3>Menu</h3>
      <ul>
        {menuItems.map(({ id, name }) => (
          <MenuItem key={id} name={name} />
        ))}
      </ul>
    </div>
  );
};
