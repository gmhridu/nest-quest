import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <div>About</div>
      },
      {
        path: '/services',
        element: <div>Services</div>
      },
      {
        path: '/blog',
        element: <div>Blog</div>
      },
      {
        path: '/pricing',
        element: <div>Pricing</div>
      },
      {
         path: '/contact',
        element: <div>Contact</div>
      },
    ]
  }
]);

export default router;