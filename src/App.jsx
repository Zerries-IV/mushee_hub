import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import Businesses from './pages/Businesses.jsx';
import Home from './pages/Home.jsx';
import Presale from './pages/Presale.jsx';
import React, { useRef } from 'react';

export const MusheeContext = React.createContext()

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Presale />)
  },
  {
    path: 'businesses',
    element: (<Businesses />)
  },
  {
    path: 'presale',
    element: (<Home />)
  }
])


function App() {
  let globalAccountsRef = useRef('')
  return (
    <MusheeContext.Provider value={
      [globalAccountsRef ]
    }>
          <RouterProvider router={router} />
    </MusheeContext.Provider>
  );
}

export default App;
