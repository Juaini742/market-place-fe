import useProducts from "../../../../hooks/useProducts";

function HistoryProfile() {
  const product = useProducts();
  return (
    <>
      {product.slice(4, 6).map((item) => (
        <div key={product.id} className="flex flex-col">
          <div className="flex items-center gap-3">
            <div className="mt-3 flex gap-2">
              <div className="w-16 overflow-hidden flex items-center">
                <img src={item.img} alt={item.product_name} />
              </div>
              <div className="flex flex-col w-full md:w-72">
                <label className="font-bold text-xs">{item.product_name}</label>
                <span className="text-xs">Size: S</span>
                <span className="text-xs">color: red</span>
                <span className="text-xs">Quanity: 1</span>
                <span className="text-xs">Price: IDR. {item.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HistoryProfile;
