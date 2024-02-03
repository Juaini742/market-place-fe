import {Button} from "../atoms";
import {Link} from "react-router-dom";
import {CiFaceSmile} from "react-icons/ci";
import Template from "../templates";
import Footer from "../templates/Footer";
const EmptyPage = () => (
  <>
    <Template>
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
      <div className="absolute left-0 right-0 bottom-0">
        <Footer />
      </div>
    </Template>
  </>
);
export default EmptyPage;
