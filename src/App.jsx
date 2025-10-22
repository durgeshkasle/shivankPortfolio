import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  // get user auth state from store/context instead of hardcoding
  // const isUserAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const navigate = useNavigate();
  const isUserAuthenticated = false;

  useEffect((isUserAuthenticated) => {
    if(isUserAuthenticated) navigate('/dashboard');
    if(!isUserAuthenticated) navigate('https://shivank-singh-portfolio.netlify.app/home');
  }, [isUserAuthenticated]);

  return (
    <>
      <ToastContainer
        position="top-right" // Position of toast
        autoClose={3000} // Auto close in ms
        hideProgressBar={false} // Show/hide progress bar
        newestOnTop={true} // Newest toast on top
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" // "light" | "dark" | "colored"
      />
      {isUserAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
}

export default App;
