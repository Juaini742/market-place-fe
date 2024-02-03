import DetailsProduct from "../molecules/Details/product";
import Template from "../templates";
import Footer from "../templates/Footer";

function ProductDetailsPage() {
  return (
    <>
      <Template>
        <DetailsProduct />
        <div className="mt-10">
          <Footer />
        </div>
      </Template>
    </>
  );
}

export default ProductDetailsPage;
