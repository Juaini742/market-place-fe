import { IoMdArrowRoundBack } from "react-icons/io";
import { Button, Container } from "../../../../atoms";
import { Rate, Input } from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCommentAction } from "../../../../../store/actions/comment.action";
import useSingleComment from "../../../../../hooks/useSingleComment";

function HistoryUpdateComments() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleComment = useSingleComment(id);
  const [formData, setFormData] = useState({
    rating: 0,
    message: "",
  });

  useEffect(() => {
    setFormData({
      rating: singleComment?.rating || 0,
      message: singleComment?.message || "",
    });
  }, [singleComment]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRateChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCommentAction({ formData, id }));
  };
  return (
    <>
      <div className="h-12 bg-black flex items-center">
        <a href="/profile">
          <span className="text-white pl-3 flex items-center gap-2">
            <IoMdArrowRoundBack /> Back to profile
          </span>
        </a>
      </div>
      <Container className="mt-5">
        <div className="flex flex-col gap-3 py-5 px-4 border rounded-xl mb-2">
          <div className="flex gap-1 text-yellow-500">
            <Rate
              name="rating"
              onChange={handleRateChange}
              value={formData.rating}
            />
          </div>
          <div className="">
            <label htmlFor="message">Comments</label>
            <Input
              type="text"
              id="message"
              name="message"
              onChange={handleInputChange}
              value={formData.message}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="mt-3 flex gap-2">
                <div className="w-16 overflow-hidden flex items-center">
                  <img
                    src={singleComment.Product?.img}
                    alt={singleComment.Product?.product_name}
                  />
                </div>
                <div className="flex flex-col w-full md:w-72">
                  <label className="font-bold text-xs">
                    {singleComment.Product?.product_name}
                  </label>
                  <span className="text-xs">
                    Price: IDR. {singleComment.Product?.price}
                  </span>
                </div>
              </div>
              <div className="w-full">
                <Button
                  onClick={handleSubmit}
                  variant="primary"
                  className="w-full py-2"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default HistoryUpdateComments;
