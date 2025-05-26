export const Layout = ({ children }) => {
  return (
    <>
      <header style={{ textAlign: 'center' }}>Header</header>
      {children}
      <footer style={{ textAlign: 'center' }}>Footer</footer>
    </>
  );
};
