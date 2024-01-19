import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";
import {Container} from "../atoms";
import {useState} from "react";
import ShopFilterProduct from "../molecules/Shop/filter";
import ShopProductList from "../molecules/Shop/product list";

function ShopPage() {
  const [visible, setVisible] = useState(false);
  const [sortOptions, setSortOptions] = useState({
    sortBySold: false,
    sortByPrice: false,
    sortByLowestPrice: false,
    sortOrder: "",
  });

  const hanldeVisibleFilter = () => {
    setVisible(!visible);
  };

  const handleSort = (type, order) => {
    setSortOptions((prevOptions) => ({
      sortBySold: type === "sortBySold" ? !prevOptions.sortBySold : false,
      sortByPrice: type === "sortByPrice" ? !prevOptions.sortByPrice : false,
      sortByLowestPrice:
        type === "sortByLowestPrice" ? !prevOptions.sortByLowestPrice : false,
      sortOrder: type === "sortOrder" ? order : "",
    }));
  };

  return (
    <>
      <Navbar />
      <Container className="mt-10 flex gap-5 flex-col md:flex-row">
        <ShopFilterProduct
          visible={visible}
          hanldeVisibleFilter={hanldeVisibleFilter}
          sortOptions={sortOptions}
          handleSort={handleSort}
        />
        <div className="font-bold block md:hidden">
          <button onClick={hanldeVisibleFilter} className="border-b-2">
            Filter Products
          </button>
        </div>
        <ShopProductList sortOptions={sortOptions} />
      </Container>
      <div className="absolute right-0 left-0">
        <Footer />
      </div>
    </>
  );
}

export default ShopPage;
