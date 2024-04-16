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
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <SingleEstateData />
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/testimonials",
        element: <Testiomonials />,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoutes>
            <Contact />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;