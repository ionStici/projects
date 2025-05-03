import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import { basePath } from "./data/constants";

const router = createBrowserRouter([{ path: basePath, element: <App /> }]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
