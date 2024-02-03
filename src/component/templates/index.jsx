import useToken from "../../hooks/useToken";
import Navbar from "./Navbar";
import NavbarNotToken from "./NavbarNotToken";

// eslint-disable-next-line react/prop-types
function Template({children}) {
  const token = useToken();
  return (
    <>
      {!token ? <NavbarNotToken /> : <Navbar />}
      {children}
    </>
  );
}

export default Template;
