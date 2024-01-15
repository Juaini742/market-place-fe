import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";
import {Container} from "../atoms";
import {useState} from "react";
import ShopFilterProduct from "../molecules/Shop/filter";
import ShopProductList from "../molecules/Shop/product list";

function ShopPage() {
  const [visible, setVisible] = useState(false);

  const hanldeVisibleFilter = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Navbar />
      <Container className="mt-10 flex gap-5 flex-col md:flex-row">
        <ShopFilterProduct
          visible={visible}
          hanldeVisibleFilter={hanldeVisibleFilter}
        />
        <div className="font-bold block md:hidden">
          <button onClick={hanldeVisibleFilter} className="border-b-2">
            Filter Products
          </button>
        </div>
        <ShopProductList />
      </Container>
      <Footer />
    </>
  );
}

export default ShopPage;
