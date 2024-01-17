/* eslint-disable react/prop-types */
import {BsPlus} from "react-icons/bs";
import {FaTrashCan} from "react-icons/fa6";
import {HiMinus} from "react-icons/hi";
import useCart from "../../../../hooks/useCart";

function CartProduct() {
  const cart = useCart();

  return (
    <div className="flex flex-col gap-4">
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between flex-col md:flex-row">
          <div>
            <span className="font-bold">Product</span>
            <div className="flex items-center gap-3">
              <div>
                <input type="checkbox" id={`product-${index}`} />
              </div>
              <div className="mt-3 flex gap-2">
                <div className="w-16 overflow-hidden flex items-center">
                  <img
                    src={item.product_id.img}
                    alt={item.product_id.product_name}
                  />
                </div>
                <div className="flex flex-col w-full md:w-72">
                  <label htmlFor={`product-${index}`} className="font-bold">
                    {item.product_id.product_name}
                  </label>
                  <span>Size: S</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-3 lg:w-36 ">
              <span className="font-bold">Price</span>
              <span>IDR. {item.product_id.price}</span>
            </div>
            <div className="md:w-36">
              <span className="font-bold">Quantity</span>
              <div className="mt-3 flex items-center justify-center border-2 border-black rounded-xl">
                <button className="px-4">
                  <BsPlus />
                </button>
                <span className="text-xl">1</span>
                <button className="px-4">
                  <HiMinus />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3  lg:w-36 ">
              <span className="font-bold">Gross Amount</span>
              <span>IDR. {item.product_id.price}</span>
            </div>

            <div className=" text-red-500 pt-9">
              <button>
                <FaTrashCan />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartProduct;
