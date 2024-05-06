import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getShipping} from "../store/actions/shipping.action";

function useShipping() {
  const dispatch = useDispatch();
  const shipping = useSelector((state) => state.shipping.shipping);
  const checkout = useSelector((state) => state.shipping.checkout);

  useEffect(() => {
    dispatch(getShipping());
  }, [dispatch]);

  return {shipping, checkout};
}

export default useShipping;
