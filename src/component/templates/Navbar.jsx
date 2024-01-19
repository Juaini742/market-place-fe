import {SlBasket} from "react-icons/sl";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../atoms";
import {useDispatch} from "react-redux";
import useToken from "../../hooks/useToken";
import {logoutAction} from "../../store/actions/user.action";
import useCart from "../../hooks/useCart";
import {getProductAction} from "../../store/actions/product.action";
import {useState} from "react";
import {CiSearch} from "react-icons/ci";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const cart = useCart();
  const token = useToken();

  const hanldeLogout = () => {
    dispatch(logoutAction({token, navigate}));
  };

  const hanldeSearch = (e) => {
    e.preventDefault();
    dispatch(getProductAction({keyword: search}));
  };

  // if (!cart) {
  //   return console.log(null);
  // }

  return (
    <nav className="bg-white border-b-2">
      <div className="w-[90%] mx-auto flex justify-between items-center h-16 gap-3">
        <div className="">
          <h1 className="md:text-2xl font-bold">Myfashion</h1>
        </div>
        <form
          onSubmit={hanldeSearch}
          className="w-full relative overflow-hidden"
        >
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="what are you looking for"
            className="text-sm w-full h-9 pl-3 bg-gray-300 rounded-md text-black"
          />
          <button
            className="absolute bg-black w-8 right-0 bottom-0 top-0 text-white text-xl flex justify-center items-center rounded-r-lg

            "
          >
            <CiSearch />
          </button>
        </form>
        <div className="fixed z-50 md:static bottom-0 left-0 right-0 h-10 md:h-full bg-white/30 backdrop-blur-lg  md:text-black md:bg-transparent flex justify-center items-center md:flex">
          <ul className="flex gap-10 md:gap-3 lg:gap-10 items-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              {!token ? (
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              ) : (
                <Button onClick={hanldeLogout}>Logout</Button>
              )}
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <button className="relative h-10 w-10 bg-gray-300 rounded-full flex justify-center items-center">
            <SlBasket />
            {!token ? null : (
              <span className="absolute bg-red-500 h-5 w-5 flex items-center justify-center text-xs text-white rounded-full -top-1 -right-2">
                {cart.length}
              </span>
            )}
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
