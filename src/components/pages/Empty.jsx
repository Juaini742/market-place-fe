import {Button, Container} from "../atoms";
import {Link} from "react-router-dom";
import {CiFaceSmile} from "react-icons/ci";
const EmptyPage = () => (
  <>
    <Container>
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
    </Container>
  </>
);
export default EmptyPage;
