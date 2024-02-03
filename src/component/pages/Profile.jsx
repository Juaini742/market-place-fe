import AddProductProfile from "../molecules/profile/add product";
import BiodataCategory from "../molecules/profile/biodata";
import HistoryProfile from "../molecules/profile/history";
import {Container} from "../atoms";
import {Collapse} from "antd";
import {useState} from "react";
import useAuth from "../../hooks/useAuth";
import EmptyPage from "./Empty";
import MyProductProfile from "../molecules/profile/my product";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaUser, FaStore, FaHistory, FaProductHunt} from "react-icons/fa";
import AddressProfil from "../molecules/profile/address";
import Template from "../templates";
import Footer from "../templates/Footer";

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
      label: (
        <span className="flex items-center gap-1">
          <FaUser /> Biodata
        </span>
      ),
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
      label: (
        <span className="flex items-center gap-1">
          <FaMapMarkerAlt /> Address
        </span>
      ),
      children: <AddressProfil />,
    },
    {
      key: "3",
      label: (
        <span className="flex items-center gap-1">
          <FaStore /> Add Product to being seller
        </span>
      ),
      children: <AddProductProfile />,
    },
    {
      key: "4",
      label: (
        <span className="flex items-center gap-1">
          <FaProductHunt /> My Products
        </span>
      ),
      children: <MyProductProfile />,
    },
    {
      key: "5",
      label: (
        <span className="flex items-center gap-1">
          <FaHistory /> History
        </span>
      ),
      children: <HistoryProfile />,
    },
  ];

  if (!token) {
    return <EmptyPage />;
  }

  return (
    <Template>
      <Container className="mt-10">
        <span className="font-bold">My Profile</span>
        <div className="mt-3">
          <div className="h-[150px] md:h-[200px] lg:h-[330px] flex items-center justify-center flex-col rounded-xl overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className="flex items-start overflow-hidden h-20 w-20 md:h-32 md:w-32 rounded-full shadow-lg">
              <img src={previewImg || users?.avatar} alt="Images" />
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
      <div className="mt-10">
        <Footer />
      </div>
    </Template>
  );
}

export default ProfilePage;
