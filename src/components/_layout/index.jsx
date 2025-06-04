import { ProgressBar } from '../progress-bar/progress-bar';

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <header style={{ textAlign: 'center' }}>Header</header>
      {children}
      <footer style={{ textAlign: 'center' }}>Footer</footer>
    </>
  );
};
