import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "./layout";
import Home from "./Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
];

const rootRouter = createBrowserRouter(routes);

export default rootRouter;
