import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCommentByIdAction} from "../store/actions/comment.action";
import useToken from "./useToken";

function useSingleComment(id) {
  const token = useToken();
  const dispatch = useDispatch();
  const singleComment = useSelector((state) => state.comment.single);

  useEffect(() => {
    dispatch(getCommentByIdAction({id, token}));
  }, [token, dispatch, id]);

  return singleComment;
}

export default useSingleComment;
