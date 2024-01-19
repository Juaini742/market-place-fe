import {useDispatch, useSelector} from "react-redux";
import useAuth from "./useAuth";
import {useEffect} from "react";
import {getCartAction} from "../store/actions/cart.action";

function useCart() {
  const dispatch = useDispatch();
  const {users, token} = useAuth();
  const cart = useSelector((state) => state.cart.data);

  const id = users?.id;

  useEffect(() => {
    if (token && id) {
      dispatch(getCartAction({id, token}));
    }
  }, [dispatch, id, token]);

  if (!token || !users) {
    return null;
  }

  return cart;
}

export default useCart;
