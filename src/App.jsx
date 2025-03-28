import { RouterProvider } from 'react-router-dom';
import router from './routes';
import'./styles/custom.css';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
