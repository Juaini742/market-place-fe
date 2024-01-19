import {useSelector} from "react-redux";

const useTotalPage = () => {
  const totalProducts = useSelector((state) => state.products.total);

  const totalPage = Math.ceil(totalProducts / 12);

  return totalPage;
};

export default useTotalPage;
