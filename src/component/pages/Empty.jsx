import {Button} from "../atoms";
import {Link} from "react-router-dom";
import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";
import {CiFaceSmile} from "react-icons/ci";
const EmptyPage = () => (
  <>
    <Navbar />

    <div className="mt-36 flex flex-col justify-center items-center">
      <div className="text-9xl">
        <CiFaceSmile />
      </div>
      <span className="text-center mb-4">
        Please Click the button below to login
      </span>
      <Link to="/login">
        <Button variant="primary" className="py-2 px-5">
          Login Here
        </Button>
      </Link>
    </div>

    <Footer />
  </>
);
export default EmptyPage;
