import useBanks from "../../hooks/useBanks";
import useProducts from "../../hooks/useProducts";
import {Button, Container} from "../atoms";
import {Select} from "antd";

function CheckoutPage({handleVisibleCheckout}) {
  const product = useProducts();
  const banks = useBanks();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-white overflow-auto pb-20 md:pb-0">
      <Container>
        <div className="mt-10">
          <span>Delivery and payment</span>
          <div className="flex justify-between flex-col-reverse md:flex-row">
            <div className="">
              {product.slice(4, 6).map((item) => (
                <div key={product.id} className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="mt-3 flex gap-2">
                      <div className="w-16 overflow-hidden flex items-center">
                        <img src={item.img} alt={item.product_name} />
                      </div>
                      <div className="flex flex-col w-full md:w-72">
                        <label className="font-bold text-xs">
                          {item.product_name}
                        </label>
                        <span className="text-xs">Size: S</span>
                        <span className="text-xs">color: red</span>
                        <span className="text-xs">Quanity: 1</span>
                        <span className="text-xs">
                          Price: IDR. {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border border-black flex flex-col justify-center p-3">
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
                <Button variant="primary" className="py-2 px-3 text-sm w-full">
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                animi sit natus pariatur doloremque voluptatibus perferendis
                aliquid quia.
              </p>
            </div>
            <Button variant="gray" className="px-5 py-1 mt-2 text-sm">
              Change address
            </Button>
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
              <Select className="w-full" defaultValue="y">
                {banks.map((item, index) => (
                  <Select.Option key={index}>{item.name}</Select.Option>
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
