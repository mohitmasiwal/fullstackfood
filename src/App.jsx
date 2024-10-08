import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

 
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Home from './pages/Home';  
import Signup from './pages/Signup';
import Services from './pages/Servises';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />  
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/detail/:id",
      element: <Detail />
    },
    {
      path: "/services",
      element: <Services />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/contact",  
      element: <Contact />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
