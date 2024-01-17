import AddProductProfile from "../molecules/profile/add product";
import BiodataCategory from "../molecules/profile/biodata";
import HistoryProfile from "../molecules/profile/history";
import Footer from "../templates/Footer";
import Navbar from "../templates/Navbar";
import {Container} from "../atoms";
import {Collapse} from "antd";
import {useState} from "react";
import useAuth from "../../hooks/useAuth";

function ProfilePage() {
  const {users, token} = useAuth();
  const [previewImg, setPreviewImg] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    file: "",
    name: "",
    email: "",
    phone: "",
    store_name: "",
    sex: "1",
  });

  const items = [
    {
      key: "1",
      label: "Biodata",
      children: (
        <BiodataCategory
          users={users}
          token={token}
          formData={formData}
          setFormData={setFormData}
          setPreviewImg={setPreviewImg}
        />
      ),
    },
    {
      key: "2",
      label: "Add Product to being seller",
      children: <AddProductProfile />,
    },
    {
      key: "3",
      label: "My Products",
      children: <HistoryProfile />,
    },
    {
      key: "4",
      label: "History",
      children: <HistoryProfile />,
    },
  ];

  return (
    <>
      <Navbar />
      <Container className="mt-10">
        <span className="font-bold">My Profile</span>
        <div className="mt-3">
          <div className="h-[150px] md:h-[200px] lg:h-[330px] flex items-center justify-center flex-col rounded-xl overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500">
            {/* <div className="flex items-center overflow-hidden h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px] rounded-full shadow-lg"> */}
            <div className="flex items-start overflow-hidden h-20 w-20 md:h-32 md:w-32 rounded-full shadow-lg">
              <img src={previewImg || users.avatar} alt="Images" />
            </div>
            <span className="text-white mt-3 text-sm lg:text-base">
              {formData.username}
            </span>
          </div>
        </div>
        <div className="mt-10">
          <Collapse items={items} accordion defaultActiveKey={["1"]} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ProfilePage;
