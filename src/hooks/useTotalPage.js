import {useSelector} from "react-redux";

const useTotalPage = (itemsPerPage) => {
  const totalProducts = useSelector((state) => state.products.total);

  const totalPage = Math.ceil(totalProducts / itemsPerPage);

  return totalPage;
};

export default useTotalPage;
