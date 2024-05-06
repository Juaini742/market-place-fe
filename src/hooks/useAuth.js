import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserByTokenAction} from "../store/actions/user.action";

function useAuth() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUserByTokenAction());
    }
  }, [status, dispatch]);

  if (status === "loading" || !users) {
    console.log("Loading...");
    return null; // Kembalikan null jika masih loading
  }

  return users;
}

export default useAuth;
