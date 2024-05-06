import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAddress} from "../store/actions/address.action";

function useAddress() {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address.data);

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  return address;
}

export default useAddress;
