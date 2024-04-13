import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SingleEstateData from "../components/SingleEstateData/SingleEstateData";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";

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
        path: "/blog",
        element: <div>Blog</div>,
      },
      {
        path: "/pricing",
        element: <div>Pricing</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);

export default router;