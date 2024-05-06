import HistoryUpdateComments from "../components/molecules/profile/history/comments/update";
import CartPage from "../components/pages/Cart";
import HomePage from "../components/pages/Home";
import MyproductDetailPage from "../components/pages/Myproduct.Detail";
import ProductDetailsPage from "../components/pages/Product.Details";
import ProfilePage from "../components/pages/Profile";
import ShopPage from "../components/pages/Shop";
import UpdateProductPage from "../components/pages/Update.product";
import LoginPage from "../components/pages/login";
import RegisterPage from "../components/pages/register";

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
  {
    path: "/myProfile/:id",
    element: <MyproductDetailPage />,
    isPrivate: true,
  },
  {
    path: "/updateProduct/:id",
    element: <UpdateProductPage />,
    isPrivate: true,
  },
  {
    path: "/updateComment/:id",
    element: <HistoryUpdateComments />,
    isPrivate: true,
  },
];
