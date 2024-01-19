/* eslint-disable react/prop-types */
import {BsPlus} from "react-icons/bs";
import {FaTrashCan} from "react-icons/fa6";
import {HiMinus} from "react-icons/hi";
import {useDispatch} from "react-redux";
import {
  deleteCartAction,
  updateCartAction,
} from "../../../../store/actions/cart.action";
import useToken from "../../../../hooks/useToken";
import {
  decreaseQuantiy,
  increaseQuantiy,
} from "../../../../store/reducers/cart.slice";

function CartProduct(props) {
  const {cart, checkSelected, setCheckSelected} = props;
  const dispatch = useDispatch();
  const token = useToken();

  const handleAddQuantity = (id, quantity) => {
    const newQ = quantity + 1;
    dispatch(increaseQuantiy({id}));
    dispatch(updateCartAction({id, token, quantity: newQ, dispatch}));
  };

  const handleMinQuantity = (id, quantity) => {
    const newQ = quantity - 1;
    dispatch(decreaseQuantiy({id}));
    dispatch(updateCartAction({id, token, quantity: newQ, dispatch}));
  };

  const hanldeDeleteCart = (id) => {
    dispatch(deleteCartAction({id, token, dispatch}));
  };

  const hanldeCheckboxChange = (id) => {
    setCheckSelected((prevItem) => {
      if (prevItem.includes(id)) {
        return prevItem.filter((dataId) => dataId !== id);
      } else {
        return [...prevItem, id];
      }
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between flex-col md:flex-row">
          <div>
            <span className="font-bold">Product</span>
            <div className="flex items-center gap-3">
              <div>
                <input
                  type="checkbox"
                  checked={checkSelected.includes(item.id)}
                  onChange={() => hanldeCheckboxChange(item.id)}
                  id={`product-${index}`}
                />
              </div>
              <div className="mt-3 flex gap-2">
                <div className="w-16 overflow-hidden flex items-center">
                  <img
                    src={item.product_id.img}
                    alt={item.product_id.product_name}
                  />
                </div>
                <div className="flex flex-col w-full md:w-72">
                  <label
                    htmlFor={`product-${index}`}
                    className="font-bold text-sm"
                  >
                    {item.product_id.product_name}
                  </label>
                  <span className="text-sm">Size: {item.size}</span>
                  <span className="text-sm">Color: {item.color}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <div className="flex flex-col justify-center md:justify-start  gap-3 lg:w-36 ">
              <span className="font-bold hidden md:block">Price</span>
              <span>IDR. {item.product_id.price}</span>
            </div>
            <div className="md:w-36">
              <span className="font-bold hidden md:block">Quantity</span>
              <div className="mt-3 flex items-center justify-center border-2 border-black rounded-xl">
                <button
                  onClick={() => handleAddQuantity(item.id, item.quantity)}
                  className="px-4"
                >
                  <BsPlus />
                </button>
                <span className="text-xl">{item.quantity}</span>
                <button
                  onClick={() => handleMinQuantity(item.id, item.quantity)}
                  className="px-4"
                >
                  <HiMinus />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center md:justify-start gap-3 lg:w-36 ">
              <span className="font-bold hidden md:block">Gross Amount</span>
              <span>
                IDR. {(item.product_id.price * item.quantity).toFixed(3)}
              </span>
            </div>

            <div className=" text-red-500 pt-9">
              <button onClick={() => hanldeDeleteCart(item.id)}>
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
