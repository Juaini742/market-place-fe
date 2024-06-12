import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProductAction} from "../store/actions/product.action";

function useProducts({
  page = 1,
  sortBySold,
  sortByPrice,
  sortByLowestPrice,
  sortOrder,
} = {}) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(
      getProductAction({
        page,
        filters: {sortBySold, sortByPrice, sortByLowestPrice, sortOrder},
      })
      
    ).then(() => setIsLoading(false) );
  }, [dispatch, page, sortBySold, sortByPrice, sortByLowestPrice, sortOrder]);

  return {products, isLoading};
}

export default useProducts;
