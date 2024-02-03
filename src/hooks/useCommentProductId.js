import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCommentByProductIdAction} from "../store/actions/comment.action";
import useToken from "./useToken";

function useCommentProductId(id) {
  const token = useToken();
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.productId);

  useEffect(() => {
    dispatch(getCommentByProductIdAction({id, token}));
  }, [token, id, dispatch]);

  return comment;
}

export default useCommentProductId;
