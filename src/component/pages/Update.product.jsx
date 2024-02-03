import UpdateProduct from "../molecules/updateProduct";
import Template from "../templates";
import Footer from "../templates/Footer";

function UpdateProductPage() {
  return (
    <>
      <Template>
        <UpdateProduct />
        <div className="mt-10">
          <Footer />
        </div>
      </Template>
    </>
  );
}

export default UpdateProductPage;
