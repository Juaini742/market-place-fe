import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCommentByUserIdAction} from "../store/actions/comment.action";

function useComment() {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.userId);

  useEffect(() => {
    dispatch(getCommentByUserIdAction());
  }, [dispatch]);

  return comment;
}

export default useComment;
