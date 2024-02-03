import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCommentByUserIdAction} from "../store/actions/comment.action";
import useToken from "./useToken";
import useAuth from "./useAuth";

function useComment() {
  const token = useToken();
  const {users} = useAuth();
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.userId);

  useEffect(() => {
    dispatch(getCommentByUserIdAction({id: users?.id, token}));
  }, [token, users, dispatch]);

  return comment;
}

export default useComment;
