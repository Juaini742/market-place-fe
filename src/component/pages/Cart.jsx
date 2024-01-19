import Footer from "../templates/Footer";
import Navbar from "../templates/Navbar";
import {Container} from "../atoms";
import CartProduct from "../molecules/Cart/product";
import CartForm from "../molecules/Cart/form";
import useToken from "../../hooks/useToken";
import EmptyPage from "./Empty";
import {useState} from "react";
import useCart from "../../hooks/useCart";

function CartPage() {
  const token = useToken();
  const cart = useCart();
  const [checkSelected, setCheckSelected] = useState([]);
  const dataCheckSelected = checkSelected.map((item) =>
    cart.find((data) => data.id === item)
  );

  if (!token) {
    return <EmptyPage />;
  }
  return (
    <>
      <Navbar />
      <Container className="mt-10">
        <h2 className="text-xl font-bold mb-5">Checkout</h2>
        <div className="flex flex-col">
          <CartProduct
            cart={cart}
            checkSelected={checkSelected}
            setCheckSelected={setCheckSelected}
          />
          <CartForm dataCheckSelected={dataCheckSelected} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default CartPage;
