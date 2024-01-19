/* eslint-disable react/prop-types */
import "./desc.css";
function DescriptionProduct({productById}) {
  return (
    <div>
      <h1 className="font-bold text-xl mb-5">{productById.product_name}</h1>
      <div
        dangerouslySetInnerHTML={{__html: productById.long_description}}
        className="text-justify leading-8"
      />
    </div>
  );
}

export default DescriptionProduct;
