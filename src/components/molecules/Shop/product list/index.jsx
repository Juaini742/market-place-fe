/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button } from "../../../atoms";
import useProducts from "../../../../hooks/useProducts";
import { useState } from "react";
import useTotalPage from "../../../../hooks/useTotalPage";

function ShopProductList(props) {
  const { sortOptions } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const total = useTotalPage();
  const { products, isLoading } = useProducts({
    page: currentPage,
    ...sortOptions,
  });

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < total ? prevPage + 1 : prevPage));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-5">
        {isLoading
          ? [...Array(8)].map((_, i) => (
              <div
                key={i}
                className="p-2 w-44 md:w-36 lg:w-52 flex flex-col gap-2 animate-pulse"
              >
                <div className="min-h-60 w-full max-h-60 bg-gray-200 rounded" />
                <div className="bg-gray-200 h-8 w-full rounded" />
                <div className="bg-gray-200 h-8 w-full rounded" />
                <div className="bg-gray-200 h-8 w-full rounded" />
                <div className="bg-gray-200 h-8 w-full rounded" />
              </div>
            ))
          : products.map((item, i) => (
              <div
                key={i}
                className="p-2 rounded-lg hover:bg-gray-200 trans-300 group relative"
              >
                <Link to={`/detail/${item.id}`}>
                  <div className="min-h-60 overflow-hidden flex items-center">
                    <img
                      src={item.img === "" ? "../img/empty.jpg" : item.img}
                      alt={item.product_name}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-1 mt-5 md:h-40">
                    <h2 className="font-bold text-sm">{item.product_name}</h2>
                    <span>{item.category}</span>
                    <span className="text-xs">Sold {item.sold}</span>
                    <span className="font-bold">{item.price}</span>
                  </div>
                </Link>
              </div>
            ))}
      </div>

      <div className="">
        <div className="flex justify-between mt-4">
          <Button
            variant="primary"
            onClick={handlePrevPage}
            className="py-2 px-5"
          >
            Previous
          </Button>
          {/* <span className="mx-2">{currentPage}</span> */}

          <div className="flex items-center">
            {Array.from({ length: total }, (_, index) => {
              const pageNumber = index + 1;
              const isCurrentPage = pageNumber === currentPage;

              return (
                <span
                  key={pageNumber}
                  className={`mx-2 ${
                    isCurrentPage ? "font-bold" : ""
                  } cursor-pointer`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </span>
              );
            })}
          </div>

          <Button
            variant="primary"
            onClick={handleNextPage}
            className="py-2 px-5"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShopProductList;
