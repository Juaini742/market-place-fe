import {Link, useParams} from "react-router-dom";
import {Button, Container} from "../../atoms";
import useProductById from "../../../hooks/useProductById";

function DetailMyProduct() {
  const {id} = useParams();
  const product = useProductById({id});

  return (
    <Container className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <div className="h-full md:h-[540px] lg:h-[700px] flex items-center overflow-hidden">
          <img src={product.img} alt={product.product_name} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="border-b-2 pb-5">
            <h2 className="text-2xl font-bold mb-4">{product.product_name}</h2>
            <span className="text-2xl font-bold">IDR. {product.price}</span>
            <p className="text-gray-500 text-sm mt-5">
              {product.short_description}
            </p>
          </div>
          <div className="border-b-2 pb-5">
            <span className="text-gray-400 block">List of Colors</span>
            {product.colors_item?.join(", ")}
          </div>
          <div className="border-b-2 pb-5">
            <span className="text-gray-400 block">List of Size</span>
            {product.sizes_item?.join(", ")}
          </div>
          <div className="flex w-full gap-2">
            <div className="">
              <span>Stock: {product.stock}</span>
            </div>
          </div>
          <div>
            <Link to="/profile">
              <Button variant="gray" className="w-full py-2">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl mb-5">{product.product_name}</h1>
        <div
          dangerouslySetInnerHTML={{__html: product.long_description}}
          className="text-justify leading-8"
        />
      </div>
    </Container>
  );
}

export default DetailMyProduct;
