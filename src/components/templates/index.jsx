import {useAppContext} from "../../middleware/AppContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarNotToken from "./NavbarNotToken";

// eslint-disable-next-line react/prop-types
function Template({children}) {
  const {isLoggedIn} = useAppContext();

  return (
    <div className="flex flex-col min-h-screen">
      {isLoggedIn ? <Navbar /> : <NavbarNotToken />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Template;
