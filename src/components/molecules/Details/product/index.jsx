/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container } from "../../../atoms";
import { BsPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import DescriptionProduct from "./description";
import RatingProduct from "./rating";
import RecomendProduct from "./recomend";
import "./style.css";
import { notification } from "antd";
import useProductById from "../../../../hooks/useProductById";
import { useAppContext } from "../../../../middleware/AppContext";
import { useDispatch } from "react-redux";
import {
  addCartAction,
  getCartAction,
} from "../../../../store/actions/cart.action";

function DetailsProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useProductById({ id });
  const { isLoggedIn } = useAppContext();
  const [selectedComment, setSelectedComment] = useState("description");
  const [isColorSelected, setIsColorSelected] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    quantity: quantity,
    color: "",
    size: "",
  });

  const handleAddQuantity = () => {
    const result = quantity + 1;
    setQuantity(result);

    setFormData(() => ({
      ...formData,
      quantity: result,
    }));
  };

  const handleMinQuantity = () => {
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

  const handleToDesc = () => {
    setSelectedComment("description");
  };

  const handleToRating = () => {
    setSelectedComment("rating");
  };

  const handleCart = (id) => {
    if (isColorSelected && isSizeSelected) {
      if (!isLoggedIn) {
        return notification.error({
          message: "Error",
          description: "Please Login before save product to your cart",
        });
      }

      const data = {
        quantity: formData.quantity,
        color: formData.color.name,
        size: formData.size.name,
      };

      dispatch(addCartAction({ id, data, dispatch })).then(() => {
        dispatch(getCartAction());
      });
    }
  };

  const newPrice = products?.product?.price * quantity;

  if (!products) {
    return console.log("Loading..");
  }

  return (
    <Container className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <div className="h-full md:h-[540px] lg:h-[700px] flex justify-center items-center overflow-hidden">
          <img
            src={
              products?.product?.img === ""
                ? "../img/empty.jpg"
                : products?.product?.img
            }
            alt={products?.product?.product_name}
            className="lg:w-[500px]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="border-b-2 pb-5">
            <h2 className="text-2xl font-bold mb-4">
              {products?.product?.product_name}
            </h2>
            <span className="text-2xl font-bold">
              IDR. {newPrice.toFixed(3)}
            </span>
            <p className="text-gray-500 text-sm mt-5">
              {products?.product?.short_description}
            </p>
          </div>
          <div className="border-b-2 pb-5">
            <span className="text-gray-400">Select Colors</span>
            <form className="flex gap-4 mt-3 flex-wrap">
              {products?.colorData?.map((color, index) => (
                <div key={index + 1}>
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
                    {color.name}
                  </label>
                </div>
              ))}
            </form>
          </div>
          <div className="border-b-2 pb-5">
            <span className="text-gray-400">Choose Size</span>
            <form className="flex gap-4 mt-3">
              {products?.sizeData?.map((size, index) => (
                <div key={index + 1}>
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
                    {size.name}
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
              <button onClick={handleAddQuantity} className="px-4">
                <BsPlus />
              </button>
              <span className="text-xl">{quantity}</span>
              <button onClick={handleMinQuantity} className="px-4">
                <HiMinus />
              </button>
            </div>
            <div className="w-full">
              <Button
                onClick={() => handleCart(products?.product?.id)}
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
            onClick={handleToDesc}
            className={
              selectedComment === "description" ? "text-black" : "text-gray-400"
            }
          >
            Product Details
          </button>
          <button
            onClick={handleToRating}
            className={
              selectedComment === "rating" ? "text-black" : "text-gray-400"
            }
          >
            Rating and Reviews
          </button>
        </div>
        <div className="mt-5">
          {selectedComment === "description" && (
            <DescriptionProduct products={products} />
          )}
          {selectedComment === "rating" && <RatingProduct id={id} />}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-bold text-xl">Related Product</h3>
        <RecomendProduct />
      </div>
    </Container>
  );
}

export default DetailsProduct;
