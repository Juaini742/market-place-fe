/* eslint-disable react/prop-types */
import BlankData from "../../../Empty";

function HistoryProducts({checkout}) {
  return (
    <>
      {checkout.length > 0 ? (
        checkout.map((item) => (
          <div key={item.id} className="flex flex-col">
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
                  <span className="text-xs">Quanity: {item.quantiy}</span>
                  <span className="text-xs">
                    Price: IDR. {item.product_id.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <BlankData />
      )}
    </>
  );
}

export default HistoryProducts;
