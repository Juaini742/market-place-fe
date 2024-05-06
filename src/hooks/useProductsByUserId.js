import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductByUserIdAction} from "../store/actions/product.action";

function useProductsByUserId() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.dataByUserId);

  useEffect(() => {
    dispatch(getProductByUserIdAction());
  }, [dispatch]);

  return products;
}

export default useProductsByUserId;
