export const metadata = {
  title: 'Food Delivery Service',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/svg+xml' href='/public/react.svg' />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
