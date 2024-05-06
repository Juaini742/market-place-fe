import {Container} from "../atoms";
import CartProduct from "../molecules/Cart/product";
import CartForm from "../molecules/Cart/form";
import EmptyPage from "./Empty";
import {useState} from "react";
import useCart from "../../hooks/useCart";
import Template from "../templates";
import {useAppContext} from "../../middleware/AppContext";

function CartPage() {
  const {cart} = useCart();
  const {isLoggedIn} = useAppContext();
  const [checkSelected, setCheckSelected] = useState([]);
  const dataCheckSelected = checkSelected.map((item) =>
    cart.find((data) => data.id === item)
  );

  if (!isLoggedIn) {
    return <EmptyPage />;
  }
  return (
    <>
      <Template>
        <Container className="mt-10">
          <h2 className="text-xl font-bold mb-5">Checkout</h2>
          <div className="flex flex-col">
            <CartProduct
              checkSelected={checkSelected}
              setCheckSelected={setCheckSelected}
            />
            <CartForm dataCheckSelected={dataCheckSelected} />
          </div>
        </Container>
      </Template>
    </>
  );
}

export default CartPage;
