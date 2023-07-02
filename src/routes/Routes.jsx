
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';

import About from '../pages/About/About';
import Contact from '../pages/contact/contact';
import AllProject from '../pages/AllProject/AllProject';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
          path : "/about",
          element : <About></About>
        },
        {
          path : "/contact",
          element : <Contact></Contact>
        },
        {
          path : "/AllProject",
          element : <AllProject></AllProject>
        }
      ]
    },
  ]);

export default Routes;