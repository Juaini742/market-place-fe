import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCartAction} from "../store/actions/cart.action";

function useCart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);

  return {cart, dispatch};
}

export default useCart;
