import useProducts from "../../../../hooks/useProducts";
import {Container} from "../../../atoms";
import {Link} from "react-router-dom";

function HomeSeller() {
  const products = useProducts();

  return (
    <Container className="mt-10">
      <div className="">
        <span className="font-semibold">By Seller</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center mt-5 gap-5">
        {products.slice(0, 8).map((item, i) => (
          <div
            key={i}
            className="p-2 rounded-lg hover:bg-gray-200 trans-300 group relative"
          >
            <Link to={`/detail/${item.id}`}>
              <div className="h-60 overflow-hidden flex items-center">
                <img
                  src={item.img}
                  alt={item.product_name}
                  className="rounded-lg"
                />
              </div>
              <div className="hidden group-hover:block trans-300 absolute inset-0"></div>
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
    </Container>
  );
}

export default HomeSeller;
