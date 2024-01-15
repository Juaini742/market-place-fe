import {SlBasket} from "react-icons/sl";
import {Link} from "react-router-dom";
import {Button} from "../atoms";

function Navbar() {
  return (
    <nav className="bg-white border-b-2">
      <div className="w-[90%] mx-auto flex justify-between items-center h-16">
        <div className="">
          <h1 className="text-2xl font-bold">Myfashion</h1>
        </div>
        <div className="">
          <input
            type="search"
            placeholder="what are you looking for"
            className="text-sm w-full md:w-80 h-9 pl-3 bg-gray-300 rounded-md text-black"
          />
        </div>
        <div className="fixed z-50 md:static bottom-0 left-0 right-0 h-10 md:h-full bg-white/30 backdrop-blur-lg  md:text-black md:bg-transparent flex justify-center items-center md:flex">
          <ul className="flex gap-10 md:gap-3 lg:gap-16 items-center">
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
              <Button>Logout</Button>
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <button className="h-10 w-10 bg-gray-300 rounded-full font-bold flex justify-center items-center">
            <SlBasket />
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
