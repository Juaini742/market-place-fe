import {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button, Container} from "../../../atoms";
import {BsPlus} from "react-icons/bs";
import {HiMinus} from "react-icons/hi";
import DescriptionProduct from "./description";
import RatingProduct from "./rating";
import RecomendProduct from "./recomend";
import useProducts from "../../../../hooks/useProducts";
import {useDispatch} from "react-redux";
import "./style.css";
import {addCartAction} from "../../../../store/actions/cart.action";
import useToken from "../../../../hooks/useToken";

function DetailsProduct() {
  const {id} = useParams();
  const products = useProducts();
  const dispatch = useDispatch();
  const token = useToken();
  const selectedProduct = products && products.find((item) => item.id === id);
  const [selectedComonent, setSelectedComonent] = useState("description");
  const [isColorSelected, setIsColorSelected] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const [formData, setFormData] = useState({
    quantity: quantity,
    color: "",
    size: "",
  });

  const hanldeAddQuantity = () => {
    const result = quantity + 1;
    setQuantity(result);

    setFormData(() => ({
      ...formData,
      quantity: result,
    }));
  };

  const hanldeMinQuantity = () => {
    if (quantity > 1) {
      const result = quantity - 1;
      setQuantity(result);

      setFormData(() => ({
        ...formData,
        quantity: result,
      }));
    }
  };

  const handleColorChange = (color) => {
    setFormData(() => ({
      ...formData,
      color: color,
    }));
    setIsColorSelected(true);
  };

  const handleSizeChange = (size) => {
    setFormData(() => ({
      ...formData,
      size: size,
    }));
    setIsSizeSelected(true);
  };

  const hanldeToDesc = () => {
    setSelectedComonent("description");
  };

  const hanldeToRating = () => {
    setSelectedComonent("rating");
  };

  const hanldeCart = (id) => {
    dispatch(addCartAction({token, id, formData, dispatch}));
  };
  if (!selectedProduct) {
    return console.log(null);
  }

  const newPrice = selectedProduct.price * quantity;

  return (
    <Container className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <div className="h-full md:h-[540px] lg:h-[700px] flex items-center overflow-hidden">
          <img src={selectedProduct.img} alt={selectedProduct.product_name} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="border-b-2 pb-5">
            <h2 className="text-2xl font-bold mb-4">
              {selectedProduct.product_name}
            </h2>
            <span className="text-2xl font-bold">
              IDR. {newPrice.toFixed(3)}
            </span>
            <p className="text-gray-500 text-sm mt-5">
              {selectedProduct.short_description}
            </p>
          </div>
          <div className="border-b-2 pb-5">
            <span className="text-gray-400">Select Colors</span>
            <form className="flex gap-4 mt-3 flex-wrap">
              {selectedProduct.colors_item.map((color, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    className="opacity-0 absolute radio"
                    id={`lang-${index}`}
                    name="lang"
                    value={color}
                    onChange={() => handleColorChange(color)}
                  />
                  <label
                    htmlFor={`lang-${index}`}
                    className={`py-1 px-4 bg-gray-200 rounded-full text-sm cursor-pointer label-${index}`}
                  >
                    {color}
                  </label>
                </div>
              ))}
            </form>
          </div>
          <div className="border-b-2 pb-5">
            <span className="text-gray-400">Choose Size</span>
            <form className="flex gap-4 mt-3">
              {selectedProduct.sizes_item.map((size, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    className="opacity-0 absolute radio"
                    id={`size-${index}`}
                    name="lang"
                    value={size}
                    onChange={() => handleSizeChange(size)}
                  />
                  <label
                    htmlFor={`size-${index}`}
                    className={`py-1 px-4 bg-gray-200 rounded-full text-sm cursor-pointer label-size-${index}`}
                  >
                    {size}
                  </label>
                </div>
              ))}
            </form>
          </div>
          <span className="text-xs text-gray-400">
            You have to choose before you can add the item to your cart.
          </span>
          <div className="flex w-full gap-2">
            <div className="flex bg-gray-300 py-1 px-5 rounded-full">
              <button onClick={hanldeAddQuantity} className="px-4">
                <BsPlus />
              </button>
              <span className="text-xl">{quantity}</span>
              <button onClick={hanldeMinQuantity} className="px-4">
                <HiMinus />
              </button>
            </div>
            <div className="w-full">
              <Button
                onClick={() => hanldeCart(selectedProduct.id)}
                variant="primary-rounded"
                className={`py-2 w-full ${
                  isColorSelected && isSizeSelected
                    ? ""
                    : "cursor-not-allowed opacity-50"
                }`}
                disabled={!isColorSelected || !isSizeSelected}
              >
                Add to Cart
              </Button>
            </div>
          </div>
          <div>
            <Link to="/">
              <Button variant="gray" className="w-full py-2">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex w-full justify-center gap-5 pb-4 border-b-2">
          <button
            onClick={hanldeToDesc}
            className={
              selectedComonent === "description"
                ? "text-black"
                : "text-gray-400"
            }
          >
            Product Details
          </button>
          <button
            onClick={hanldeToRating}
            className={
              selectedComonent === "rating" ? "text-black" : "text-gray-400"
            }
          >
            Rating and Reviews
          </button>
        </div>
        <div className="mt-5">
          {selectedComonent === "description" && (
            <DescriptionProduct selectedProduct={selectedProduct} />
          )}
          {selectedComonent === "rating" && <RatingProduct />}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-bold text-xl">Related Product</h3>
        <RecomendProduct products={products} />
      </div>
    </Container>
  );
}

export default DetailsProduct;
