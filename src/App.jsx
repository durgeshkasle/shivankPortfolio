import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './App.css';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  // Replace this with real auth state from Redux
  const isUserAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      {isUserAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
}

export default App;
