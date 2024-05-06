import EmptyPage from "./Empty";
import Template from "../templates";
import MainProfile from "../molecules/profile/public";
import {useAppContext} from "../../middleware/AppContext";

function ProfilePage() {
  const {isLoggedIn} = useAppContext();

  return <Template>{isLoggedIn ? <MainProfile /> : <EmptyPage />}</Template>;
}

export default ProfilePage;
