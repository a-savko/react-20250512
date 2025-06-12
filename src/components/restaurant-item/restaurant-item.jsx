import { Menu } from '../menu-list/menu-list';
import { Reviews } from '../review-list/review-list';
import { AccountContext } from '../contexts/account-context/account-context';
import { useContext } from 'react';

export const Restaurant = ({ menu, reviews }) => {
  const { isAuthorized } = useContext(AccountContext);

  return (
    <>
      <Menu dishIds={menu} />
      <Reviews reviewIds={reviews} showReviewForm={isAuthorized} />
    </>
  );
};
