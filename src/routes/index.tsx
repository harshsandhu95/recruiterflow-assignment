import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "./layout";
import Home from "./Home";
import Business from "./Business";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/business/:slug",
        element: <Business />,
      },
    ],
  },
];

const rootRouter = createBrowserRouter(routes);

export default rootRouter;
