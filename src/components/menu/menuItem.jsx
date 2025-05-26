import { Counter } from './counter';

export const MenuItem = ({ name }) => {
  return (
    <li>
      {name} <Counter />
    </li>
  );
};
