import {useDispatch, useSelector} from "react-redux";
import useAuth from "./useAuth";
import {useEffect} from "react";
import {getCartAction} from "../store/actions/cart.action";

function useCart() {
  const dispatch = useDispatch();
  const {users, token} = useAuth();
  const cart = useSelector((state) => state.cart.data);
  const userId = users?.id;

  useEffect(() => {
    if (token && userId) {
      dispatch(getCartAction({id: userId, token}));
    }
  }, [dispatch, userId, token]);

  if (!token || !users) {
    return null;
  }

  return token ? {cart, userId, dispatch} : dispatch;
}

export default useCart;
