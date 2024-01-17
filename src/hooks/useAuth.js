import {useDispatch, useSelector} from "react-redux";
import useToken from "./useToken";
import {useEffect} from "react";
import {getUserByTokenAction} from "../store/actions/user.action";

function useAuth() {
  const dispatch = useDispatch();
  const token = useToken();
  const users = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUserByTokenAction(token));
  }, [dispatch, token]);

  return {users, token};
}

export default useAuth;
