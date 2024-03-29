import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import Businesses from './pages/Businesses';
import Home from './pages/Home';
import Presale from './pages/Presale';

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
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
