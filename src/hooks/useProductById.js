import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductByIdAction} from "../store/actions/product.action";

function useProductById({id}) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.dataOne);
  const status = useSelector((state) => state.products.status === "pending");

  useEffect(() => {
    dispatch(getProductByIdAction(id));
  }, [dispatch, id]);

  return {products, status};
}

export default useProductById;
