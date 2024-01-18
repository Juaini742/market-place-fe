import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductAction} from "../store/actions/product.action";

function useProducts({page = 1} = {}) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getProductAction({page}));
  }, [dispatch, page]);

  return products;
}

export default useProducts;
