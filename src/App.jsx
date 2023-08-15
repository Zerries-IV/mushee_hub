import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import Businesses from './pages/Businesses';
import Home from './pages/Home';
import Presale from './pages/Presale';
import Faucet from './pages/Faucet';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Home />)
  },
  {
    path: 'businesses',
    element: (<Businesses />)
  },
  {
    path: 'presale',
    element: (<Presale />)
  },
  {
    path: 'faucet',
    element: (<Faucet />)
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
