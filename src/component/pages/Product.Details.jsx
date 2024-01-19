import DetailsProduct from "../molecules/Details/product";
import Footer from "../templates/Footer";
import Navbar from "../templates/Navbar";

function ProductDetailsPage() {
  return (
    <>
      <Navbar />
      <DetailsProduct />
      {/* <div className="absolute bottom-0 right-0 left-0"> */}
      <Footer />
      {/* </div> */}
    </>
  );
}

export default ProductDetailsPage;
