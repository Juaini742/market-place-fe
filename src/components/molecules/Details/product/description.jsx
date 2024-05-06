/* eslint-disable react/prop-types */
import "./desc.css";
function DescriptionProduct({ products }) {
  return (
    <div>
      <h1 className="font-bold text-xl mb-5">
        {products?.product?.product_name}
      </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: products?.product?.long_description,
        }}
        className="text-justify leading-8"
      />
    </div>
  );
}

export default DescriptionProduct;
