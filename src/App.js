import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import Businesses from './pages/Businesses';
import Home from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (<Home />)
  },
  {
    path: 'businesses',
    element: (<Businesses />)
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
