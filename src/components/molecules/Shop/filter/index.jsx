/* eslint-disable react/prop-types */
import { IoMdCloseCircle } from "react-icons/io";

function ShopFilterProduct(props) {
  const { visible, handleVisibleFilter, sortOptions, handleSort } = props;
  return (
    <div
      className={` md:flex fixed md:static z-30 bg-white left-0 right-0 top-0 bottom-0 px-10 md:px-0 flex-col ${
        visible ? "flex" : "hidden"
      }`}
    >
      <div className="mt-10 flex flex-col gap-3 border-b-2 pb-5">
        <h3 className="font-bold">Products Filters</h3>
        <div className="font-bold block md:hidden absolute top-5 right-5">
          <button onClick={handleVisibleFilter} className="text-xl">
            <IoMdCloseCircle />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm flex items-center gap-1">
            <input
              type="checkbox"
              checked={sortOptions.sortBySold}
              onChange={() => handleSort("sortBySold")}
              className="w-4 h-4"
            />
            Popular
          </label>
          <label className="text-sm flex items-center gap-1">
            <input
              type="checkbox"
              checked={sortOptions.sortByPrice}
              onChange={() => handleSort("sortByPrice")}
              className="w-4 h-4"
            />
            High Price
          </label>
          <label className="text-sm flex items-center gap-1">
            <input
              type="checkbox"
              checked={sortOptions.sortByLowestPrice}
              onChange={() => handleSort("sortByLowestPrice")}
              className="w-4 h-4"
            />
            Low Price
          </label>
        </div>
        <label className="text-sm flex items-center gap-1">
          <input
            type="checkbox"
            checked={sortOptions.sortOrder === "ascending"}
            onChange={() => handleSort("sortOrder", "ascending")}
            className="w-4 h-4"
          />
          Ascending A-Z
        </label>
        <label className="text-sm flex items-center gap-1">
          <input
            type="checkbox"
            checked={sortOptions.sortOrder === "descending"}
            onChange={() => handleSort("sortOrder", "descending")}
            className="w-4 h-4"
          />
          Descending Z-A
        </label>
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
