import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SingleEstateData from "../components/SingleEstateData/SingleEstateData";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Testiomonials from "../pages/Testiomonials/Testiomonials";

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
        element: <div>Contact</div>,
      },
    ],
  },
]);

export default router;