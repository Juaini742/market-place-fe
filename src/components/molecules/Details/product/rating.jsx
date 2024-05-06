/* eslint-disable react/prop-types */
import useCommentProductId from "../../../../hooks/useCommentProductId";
import { Rate } from "antd";

function RatingProduct({ id }) {
  const comments = useCommentProductId(id);

  return (
    <>
      {comments.length > 0 ? (
        comments.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 py-5 px-4 border rounded-xl mb-2"
          >
            <>
              <span className="text-gray-400">
                Posted on{" "}
                {new Date(item.createdAt).toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <div className="flex gap-1 text-yellow-500">
                <Rate disabled defaultValue={item.rating} />
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={item.User.avatar}
                  alt={item.User.name}
                  className="w-9 rounded-full"
                />
                <h4 className="font-bold">{item.User.name}</h4>
              </div>
              <p className="text-gray-400">{item.message}</p>
            </>
          </div>
        ))
      ) : (
        <p className="text-center text-slate-400 my-10">Noting Comments</p>
      )}
    </>
  );
}

export default RatingProduct;
