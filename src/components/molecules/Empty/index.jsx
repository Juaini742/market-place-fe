import {BsEmojiSmile} from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";

function BlankData() {
  const users = useAuth();
  return (
    <div className="flex justify-center items-center flex-col my-10">
      <span className="">Hello {users.name}, Your Data is Empty</span>
      <div className="text-5xl mt-3">
        <BsEmojiSmile />
      </div>
    </div>
  );
}

export default BlankData;
