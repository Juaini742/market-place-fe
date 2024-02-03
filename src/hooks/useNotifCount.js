import {useEffect, useState} from "react";
import useCart from "./useCart";

function useNotifCount() {
  const [notifCount, setNotifCount] = useState(0);
  const cart = useCart();

  useEffect(() => {
    setNotifCount(cart.length);
  }, [cart]);

  return {notifCount, setNotifCount};
}

export default useNotifCount;
