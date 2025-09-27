import './App.css';
import { useSelector } from 'react-redux';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  // get user auth state from store/context instead of hardcoding
  // const isUserAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isUserAuthenticated = true;

  return <>{isUserAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}</>;
}

export default App;
