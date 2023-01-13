import About from "../components/About";
import {
  default as Cart,
  default as Home,
  default as Shop,
} from "../components/Shop";
import Main from "../layout/Main";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("products.json"),
    children: [
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
