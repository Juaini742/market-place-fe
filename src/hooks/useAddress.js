import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAddress} from "../store/actions/address.action";
import useAuth from "./useAuth";

function useAddress() {
  const dispatch = useDispatch();
  const {users, token} = useAuth();
  const address = useSelector((state) => state.address.data);
  const id = users?.id;

  useEffect(() => {
    dispatch(getAddress({token, id}));
  }, [dispatch, token, id]);

  return address;
}

export default useAddress;
