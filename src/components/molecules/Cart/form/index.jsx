/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../../../atoms";
import CheckoutPage from "../../../pages/Checkout";

function CartForm(props) {
  const { dataCheckSelected } = props;
  const [visibleCheckout, setVisibleCheckout] = useState(false);
  const totalPrice = dataCheckSelected.reduce(
    (total, item) => total + item.Product.price * item.quantity,
    0
  );

  console.log(dataCheckSelected);

  const handleVisibleCheckout = () => {
    if (dataCheckSelected.length > 0) {
      setVisibleCheckout(!visibleCheckout);
    }
  };

  return (
    <div className="mt-5 border border-black flex flex-col justify-center p-3">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>IDR. {totalPrice.toFixed(3)}</span>
      </div>
      <div className="mt-3">
        <span className="text-xs">Enter Discount Code</span>
        <div className="relative">
          <input
            type="text"
            className="h-8 w-full border border-black rounded-lg pl-4"
          />
          <Button
            variant="primary-no-rounded"
            className="absolute px-4 py-2 right-0 top-0 text-xs rounded-e-lg"
          >
            Apply
          </Button>
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <span className="text-sm">Delivery Charge</span>
        <span className="text-sm">IDR. 5.000</span>
      </div>
      <div className="my-5 flex justify-between">
        <span className="font-bold text-sm">Grand Total</span>
        <span className="font-bold text-sm">IDR. {totalPrice.toFixed(3)}</span>
      </div>
      <div className="w-full">
        <Button
          onClick={handleVisibleCheckout}
          variant="primary"
          className={`py-3 px-3 text-sm w-full ${
            dataCheckSelected.length > 0 ? "" : "cursor-not-allowed opacity-50"
          }`}
          disabled={dataCheckSelected.length === 0}
        >
          Proceed to Checkout
        </Button>
      </div>
      {visibleCheckout && (
        <CheckoutPage
          dataCheckSelected={dataCheckSelected}
          totalPrice={totalPrice}
          handleVisibleCheckout={handleVisibleCheckout}
        />
      )}
    </div>
  );
}

export default CartForm;
