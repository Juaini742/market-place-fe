import CartPage from "../component/pages/Cart";
import HomePage from "../component/pages/Home";
import ProductDetailsPage from "../component/pages/Product.Details";
import ProfilePage from "../component/pages/Profile";
import ShopPage from "../component/pages/Shop";
import LoginPage from "../component/pages/login";
import RegisterPage from "../component/pages/register";

export const rootItem = [
  {
    path: "/register",
    element: <RegisterPage />,
    isPrivate: false,
  },
  {
    path: "/login",
    element: <LoginPage />,
    isPrivate: false,
  },
  {
    path: "/",
    element: <HomePage />,
    isPrivate: true,
  },
  {
    path: "/detail/:id",
    element: <ProductDetailsPage />,
    isPrivate: true,
  },
  {
    path: "/shop",
    element: <ShopPage />,
    isPrivate: true,
  },
  {
    path: "/cart",
    element: <CartPage />,
    isPrivate: true,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    isPrivate: true,
  },
];
