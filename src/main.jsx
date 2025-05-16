import { createRoot } from 'react-dom/client';
import { restaurants } from '/data/mock';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(renderRestaurants(restaurants));

// renders

function renderRestaurants(restaurants) {
  return restaurants.map(createRestaurantElement);
}

// restaurant

function createRestaurantElement(restaurant) {
  return (
    <div key={restaurant.id}>
      <h2>{restaurant.name}</h2>
      {createMenuElement(restaurant.menu)}
      {createReviewsElement(restaurant.reviews)}
    </div>
  );
}

// Menu

function createMenuElement(menuItems) {
  const menuElements = createMenuListElement(menuItems);

  return (
    <div>
      <h3>Menu</h3>
      {menuElements}
    </div>
  );
}

function createMenuListElement(menuItems) {
  const menuItemElements = menuItems.map((m) => <li key={m.id}>{m.name}</li>);

  return <ul>{menuItemElements}</ul>;
}

// Reviews

function createReviewsElement(reviews) {
  return (
    <div>
      <h3>Reviews</h3>
      {createReviewListElement(reviews)}
    </div>
  );
}

function createReviewListElement(reviews) {
  const reviewElements = reviews.map((r) => <li key={r.id}>{r.text}</li>);

  return <ul>{reviewElements}</ul>;
}
