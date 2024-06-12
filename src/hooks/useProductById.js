import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProductByIdAction} from "../store/actions/product.action";

function useProductById({id}) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const products = useSelector((state) => state.products.dataOne);

  useEffect(() => {
    dispatch(getProductByIdAction(id)).then(() => setIsLoading(false));
  }, [dispatch, id]);

  return {products, isLoading };
}

export default useProductById;
