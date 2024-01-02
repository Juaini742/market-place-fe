import HomePage from "../component/pages/Home";
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
];
