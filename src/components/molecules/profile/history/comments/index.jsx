/* eslint-disable react/prop-types */
import { Rate } from "antd";
import { Button } from "../../../../atoms";
import { Link } from "react-router-dom";
import useComment from "../../../../../hooks/useComment";

// eslint-disable-next-line no-unused-vars
function HistoryComments() {
  const comment = useComment();

  return (
    <>
      {comment.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-3 py-5 px-4 border rounded-xl mb-2"
        >
          {comment.length <= 0 ? (
            <span className="text-slate-400 my-5">
              Please add your comment for this product
            </span>
          ) : (
            <>
              <span className="text-gray-400">
                Updated on{" "}
                {new Date(item.createdAt).toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <div className="flex gap-1 text-yellow-500">
                <Rate disabled defaultValue={item.rating} />
              </div>
              <h4 className="font-bold">{item.User.name}</h4>
              <p className="text-gray-400">{item.message}</p>
            </>
          )}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="mt-3 flex gap-2">
                <div className="w-16 overflow-hidden flex items-center">
                  <img src={item.Product.img} alt={item.Product.product_name} />
                </div>
                <div className="flex flex-col w-full md:w-72">
                  <label className="font-bold text-xs">
                    {item.Product.product_name}
                  </label>
                  <span className="text-xs">
                    Price: IDR. {item.Product.price}
                  </span>
                </div>
              </div>
              <div className="w-full">
                <Link to={`/updateComment/${item.id}`}>
                  <Button variant="gray" className="w-full py-2">
                    Update
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HistoryComments;
