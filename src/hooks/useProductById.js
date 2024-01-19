import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductByIdAction} from "../store/actions/product.action";

function useProductById({id}) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.dataOne);

  useEffect(() => {
    dispatch(getProductByIdAction(id));
  }, [dispatch, id]);

  return products;
}

export default useProductById;
