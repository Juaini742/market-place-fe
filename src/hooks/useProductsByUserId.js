import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductByUserIdAction} from "../store/actions/product.action";
import useAuth from "./useAuth";

function useProductsByUserId() {
  const dispatch = useDispatch();
  const {users, token} = useAuth();
  const products = useSelector((state) => state.products.dataByUserId);
  const id = users.id;

  useEffect(() => {
    dispatch(getProductByUserIdAction({token, id}));
  }, [dispatch, token, id]);

  return products;
}

export default useProductsByUserId;
