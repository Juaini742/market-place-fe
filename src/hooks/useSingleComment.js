import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCommentByIdAction} from "../store/actions/comment.action";

function useSingleComment(id) {
  const dispatch = useDispatch();
  const singleComment = useSelector((state) => state.comment.single);

  useEffect(() => {
    dispatch(getCommentByIdAction(id));
  }, [dispatch, id]);

  return singleComment;
}

export default useSingleComment;
