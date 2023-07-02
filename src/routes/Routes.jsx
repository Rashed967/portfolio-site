
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';

import About from '../pages/About/About';
import Contact from '../pages/contact/contact';
import AllProject from '../pages/AllProject/AllProject';
import SingleProject from '../pages/SingleProject/SingleProject';

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
        },
        {
          path : "/singleProject/:id",
          element : <SingleProject></SingleProject>,
          // loader : async ({params}) => fetch(`http://localhost:3000/projects/${params.id}`)
          
        }
      ]
    },
  ]);

export default Routes;