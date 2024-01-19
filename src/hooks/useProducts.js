import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductAction} from "../store/actions/product.action";

function useProducts({
  page = 1,
  sortBySold,
  sortByPrice,
  sortByLowestPrice,
  sortOrder,
} = {}) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(
      getProductAction({
        page,
        filters: {sortBySold, sortByPrice, sortByLowestPrice, sortOrder},
      })
    );
  }, [dispatch, page, sortBySold, sortByPrice, sortByLowestPrice, sortOrder]);

  return products;
}

export default useProducts;
