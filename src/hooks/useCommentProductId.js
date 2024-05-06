import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCommentByProductIdAction} from "../store/actions/comment.action";

function useCommentProductId(id) {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.productId);

  useEffect(() => {
    dispatch(getCommentByProductIdAction(id));
  }, [id, dispatch]);

  return comment;
}

export default useCommentProductId;
