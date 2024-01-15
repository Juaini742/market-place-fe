import Footer from "../templates/Footer";
import Navbar from "../templates/Navbar";
import {Container} from "../atoms";
import useProducts from "../../hooks/useProducts";
import CartProduct from "../molecules/Cart/product";
import CartForm from "../molecules/Cart/form";

function CartPage() {
  const products = useProducts();
  return (
    <>
      <Navbar />
      <Container className="mt-10">
        <h2 className="text-xl font-bold mb-5">Checkout</h2>
        <div className="flex flex-col">
          <CartProduct products={products} />
          <CartForm />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default CartPage;
