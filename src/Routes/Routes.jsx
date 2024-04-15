import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SingleEstateData from "../components/SingleEstateData/SingleEstateData";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Testiomonials from "../pages/Testiomonials/Testiomonials";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const fetchData = await fetch("/public/data.json");
          const data = await fetchData.json();
          return data;
        },
      },
      {
        path: "/details/:id",
        element: <SingleEstateData />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/testimonials",
        element: <Testiomonials/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ],
  },
  {
    path: "*",
    element: <Error/>,
  }
]);

export default router;