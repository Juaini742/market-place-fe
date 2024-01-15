import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBankAction} from "../store/actions/bank.action";

function useBanks() {
  const dispatch = useDispatch();
  const banks = useSelector((state) => state.banks.data);

  useEffect(() => {
    dispatch(getBankAction());
  }, [dispatch]);

  return banks;
}

export default useBanks;
