/* eslint-disable react/prop-types */
import {useEffect, useState} from "react";
import useAddress from "../../hooks/useAddress";
import useBanks from "../../hooks/useBanks";
import {Button, Container} from "../atoms";
import {Select} from "antd";
import {useDispatch} from "react-redux";
import {postShipping} from "../../store/actions/shipping.action";
import useToken from "../../hooks/useToken";
import {midtransPublicClient} from "../../contants";

function CheckoutPage(props) {
  const {dataCheckSelected, totalPrice, handleVisibleCheckout} = props;
  const banks = useBanks();
  const address = useAddress();
  const token = useToken();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    payment: null,
    color: dataCheckSelected.map((item) => item.color),
    size: dataCheckSelected.map((item) => item.size),
    product_dates: dataCheckSelected.map((item) => item.product_id.id),
    quantities: dataCheckSelected.map((item) => item.quantity),
  });

  const hanldeChange = (selectedBank) => {
    const name = banks.find((data) => data.code === selectedBank);
    setFormData((prev) => ({
      ...prev,
      payment: name?.name,
    }));
  };

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = midtransPublicClient;
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const hanldeSubmit = (e) => {
    e.preventDefault();
    dispatch(postShipping({id: address.id, token, formData}));
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-white overflow-auto pb-20 md:pb-0">
      <Container>
        <div className="mt-10">
          <span>Delivery and payment</span>
          <div className="flex justify-between flex-col-reverse md:flex-row">
            <div className="">
              {dataCheckSelected.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="mt-3 flex gap-2">
                      <div className="w-16 overflow-hidden flex items-center">
                        <img
                          src={item.product_id.img}
                          alt={item.product_id.product_name}
                        />
                      </div>
                      <div className="flex flex-col w-full md:w-72">
                        <label className="font-bold text-xs">
                          {item.product_id.product_name}
                        </label>
                        <span className="text-xs">Size: {item.size}</span>
                        <span className="text-xs">color: {item.color}</span>
                        <span className="text-xs">
                          Quanity: {item.quantity}
                        </span>
                        <span className="text-xs">
                          Price: IDR.{" "}
                          {(item.product_id.price * item.quantity).toFixed(3)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border border-black flex flex-col justify-center p-3">
              <div className="flex flex-col gap-3">
                <span className="font-bold">Subtotal</span>
                <div className="text-sm flex flex-col">
                  <span>Total ({dataCheckSelected.length} item)</span>
                  <span>
                    Total Shipping Cost (IDR. {totalPrice.toFixed(3)})
                  </span>
                  <span>Shipping Insurance (IDR. 0)</span>
                </div>
                <div className="text-sm mb-2">
                  <span className="block">Total bill</span>
                  <span className="font-bold">
                    IDR. {totalPrice.toFixed(3)}
                  </span>
                </div>
              </div>

              <div className="w-full">
                <Button
                  onClick={hanldeSubmit}
                  variant="primary"
                  className={`py-2 px-3 text-sm w-full ${
                    formData.payment === null ? "cursor-not-allowed" : ""
                  }`}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <span>Delivery and payment</span>
            <div className="mt-3 flex flex-col gap-3 py-2 px-4 border rounded-xl">
              <span className="text-sm">Main Address</span>
              <p className="text-gray-400 text-sm">
                {`${address.city},
                  ${address.address},
                  ${address.country},
                  ${address.postal_code}`}
              </p>
            </div>
            {/* <Button variant="gray" className="px-5 py-1 mt-2 text-sm">
              Change address
            </Button> */}
            <div className="flex justify-between gap-4 border-b pb-5">
              <div className="mt-3 flex flex-col gap-2 w-full">
                <span>Delivery</span>
                <Select className="w-full" defaultValue="x">
                  <Select.Option value="x">Regular</Select.Option>
                  <Select.Option value="x1">Kargo</Select.Option>
                  <Select.Option value="x2">Economy</Select.Option>
                </Select>
              </div>
              <div className="mt-3 flex flex-col gap-2 w-full">
                <span>Courier</span>
                <Select className="w-full" defaultValue="y">
                  <Select.Option value="y">Recommendation</Select.Option>
                  <Select.Option value="y1">Low Price</Select.Option>
                </Select>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-2 w-full">
              <span>Bank</span>
              <Select
                onChange={(selectedOption) => hanldeChange(selectedOption)}
                value={formData.payment}
                className="w-full"
                placeholder="Select your bank"
              >
                {banks.map((item) => (
                  <Select.Option key={item.code}>{item.name}</Select.Option>
                ))}
                <Select.Option value="y1">Low Price</Select.Option>
              </Select>
            </div>
          </div>
        </div>

        {/* <div className="mt-5 border border-black flex flex-col justify-center p-3">
          <div className="flex flex-col gap-3">
            <span>Subtotal</span>
            <div className="text-sm flex flex-col">
              <span>Total items (1 item)</span>
              <span>Total Shipping Cost (IDR. 76.000)</span>
              <span>Shipping Insurance (IDR. 0)</span>
            </div>
            <div className="text-sm mb-2">
              <span className="block">Total bill</span>
              <span className="font-bold">IDR. 120.000</span>
            </div>
          </div>

          <div className="w-full">
            <Button variant="primary" className="py-3 px-3 text-sm w-full">
              Checkout
            </Button>
          </div>
        </div> */}

        <div className="">
          <Button
            variant="gray"
            onClick={handleVisibleCheckout}
            className="mt-3 py-2 px-3 text-sm"
          >
            Cancel
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default CheckoutPage;
