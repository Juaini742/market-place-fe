import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getShipping} from "../store/actions/shipping.action";
import useAuth from "./useAuth";

function useShipping() {
  const dispatch = useDispatch();
  const {users, token} = useAuth();
  const shipping = useSelector((state) => state.shipping.shipping);
  const checkout = useSelector((state) => state.shipping.checkout);

  useEffect(() => {
    dispatch(getShipping({token, id: users.id}));
  }, [dispatch, token, users]);

  return {shipping, checkout};
}

export default useShipping;
