import { NoData } from '../common/no-data';
import { MenuItem } from './menuItem';

export const Menu = ({ menuItems }) => {
  return (
    <div className='menu'>
      <h3>Menu</h3>
      {menuItems && menuItems.length > 0 ? (
        <div>
          <ul>
            {menuItems.map(({ id, name }) => (
              <MenuItem key={id} name={name} />
            ))}
          </ul>
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};
