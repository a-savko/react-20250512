# API

## Scripts

### Development

- `npm run dev` - Start development server with nodemon (auto-restart on file changes)
- `npm start` - Start production server

### Vercel Deployment

- `npm run vercel:dev` - Start Vercel development server
- `npm run vercel:deploy` - Deploy to Vercel production

#### Vercel Setup Steps

1. Install Vercel CLI globally: `npm install -g vercel`
2. Login to Vercel: `vercel login`
3. Link your project: `vercel link`
4. Deploy: `npm run vercel:deploy`

#### GitHub Integration

1. Push your code to GitHub repository
2. Connect your GitHub repo to Vercel dashboard
3. Vercel will automatically deploy on every push to main branch
4. Preview deployments will be created for pull requests

## Environment Configuration

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

## API Endpoints

## Ресторан

1. GET /api/restaurants/ - все рестораны;
2. GET /api/restaurant/:restaurantId - ресторан по айдишки (/api/restaurant/d32n32d8huasj );

## Блюда

1. GET /api/dishes?restaurantId=:restaurantId - получить блюда по айди ресторана (/api/dishes?restaurantId=d32n32d8huasj)
2. GET /api/dish/:dishId - блюдо по айдишки (/api/dish/djshfusdhfi29 )

## Отзывы

1. GET /api/reviews?restaurantId=:restaurantId - получить отзывы по айди ресторана (/api/reviews?restaurantId=d32n32d8huasj)
2. POST /api/review/:restaurantId - создать отзыв по айди ресторана (/api/review/d32n32d8huasj, а в бади сам отзыв без айдишки)
3. PATCH /api/review/:reviewId - изменить отзыв по айди ресторана (/api/review/d32n32d8huasj, а в бади сам отзыв без айдишки)

## Пользователи

1. GET /api/users/ - все пользователи;
