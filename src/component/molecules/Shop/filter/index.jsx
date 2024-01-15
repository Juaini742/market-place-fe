/* eslint-disable react/prop-types */
import {IoMdCloseCircle} from "react-icons/io";

function ShopFilterProduct({visible, hanldeVisibleFilter}) {
  return (
    <div
      className={` md:flex fixed md:static z-30 bg-black/30 md:bg-transparent backdrop-blur-md left-0 right-0 top-0 bottom-0 px-10 md:px-0 flex-col ${
        visible ? "flex" : "hidden"
      }`}
    >
      <div className="mt-10 flex flex-col gap-3 border-b-2 pb-5">
        <h3 className="font-bold">Products Categories</h3>
        <div className="font-bold block md:hidden absolute top-5 right-5">
          <button onClick={hanldeVisibleFilter} className="text-xl">
            <IoMdCloseCircle />
          </button>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" id="men" className="w-4 h-4" />
          <label htmlFor="men" className="text-sm">
            Men
          </label>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" id="woman" className="w-4 h-4" />
          <label htmlFor="woman" className="text-sm">
            Woman
          </label>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" id="kids" className="w-4 h-4" />
          <label htmlFor="kids" className="text-sm">
            Kids
          </label>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" id="bags" className="w-4 h-4" />
          <label htmlFor="bags" className="text-sm">
            Bags
          </label>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" id="belts" className="w-4 h-4" />
          <label htmlFor="belts" className="text-sm">
            Belts
          </label>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" id="wallets" className="w-4 h-4" />
          <label htmlFor="wallets" className="text-sm">
            Wallets
          </label>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" id="watches" className="w-4 h-4" />
          <label htmlFor="watches" className="text-sm">
            Watches
          </label>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-b-2 pb-5">
        <h3 className="font-bold">Filter by Price</h3>
        <div className="flex flex-col gap-3">
          <label htmlFor="range" className="text-sm">
            Price
          </label>
          <input type="range" id="range" />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 pb-5">
        <h3 className="font-bold">Filter by Colot</h3>
        <div className="flex gap-3 items-center">
          <div className="w-4 h-4 bg-red-500 rounded-sm" />
          <label className="text-sm">Red</label>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-sm" />
          <label className="text-sm">Blue</label>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-4 h-4 bg-green-500 rounded-sm" />
          <label className="text-sm">Green</label>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-4 h-4 bg-orange-500 rounded-sm" />
          <label className="text-sm">Orange</label>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-4 h-4 bg-emerald-500 rounded-sm" />
          <label className="text-sm">Emerald</label>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-4 h-4 bg-violet-500 rounded-sm" />
          <label className="text-sm">Violet</label>
        </div>
      </div>
    </div>
  );
}

export default ShopFilterProduct;
