import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Error from "./components/Error";

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          children: [
            {
              path: "shop",
              element: <Shop />,
            },
            {
              path: "cart",
              element: <Cart />,
            }
          ],
          errorElement: <Error />
        }
      ]);

    return <RouterProvider router={router} />;
};

export default Router;