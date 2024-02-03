import useProductsByUserId from "../../../../hooks/useProductsByUserId";
import {useDispatch} from "react-redux";
import {FaTrashAlt, FaEye, FaPencilAlt} from "react-icons/fa";
import {deleteProductByIdAction} from "../../../../store/actions/product.action";
import useToken from "../../../../hooks/useToken";
import Button from "../../../atoms/button";
import {Link} from "react-router-dom";
import BlankData from "../../Empty";

function MyProductProfile() {
  const dispatch = useDispatch();
  const token = useToken();
  const product = useProductsByUserId();

  const hanldeDelete = (id) => {
    dispatch(deleteProductByIdAction({id, token, dispatch}));
  };

  return (
    <>
      {product.length > 0 ? (
        product.map((item) => (
          <div key={product.id} className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="mt-3 flex gap-2">
                <div className="w-16 overflow-hidden flex items-center">
                  <img src={item.img} alt={item.product_name} />
                </div>
                <div className="flex flex-col w-full md:w-72">
                  <label className="font-bold text-xs">
                    {item.product_name}
                  </label>
                  <span className="text-xs">
                    Size: {item.sizes_item.join(", ")}
                  </span>
                  <span className="text-xs">
                    color: {item.colors_item.join(", ")}
                  </span>
                  <span className="text-xs">Stock: {item.stock}</span>
                  <span className="text-xs">Price: IDR. {item.price}</span>
                </div>
              </div>
              <div>
                <Link to={`/myProfile/${item.id}`}>
                  <Button variant="gray" className="px-2 py-1">
                    <FaEye />
                  </Button>
                </Link>
              </div>
              <div>
                <Button
                  variant="gray"
                  onClick={() => hanldeDelete(item.id)}
                  className="px-2 py-1"
                >
                  <FaTrashAlt />
                </Button>
              </div>
              <div>
                <Link to={`/updateProduct/${item.id}`}>
                  <Button variant="gray" className="px-2 py-1">
                    <FaPencilAlt />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <BlankData />
      )}
    </>
  );
}

export default MyProductProfile;
