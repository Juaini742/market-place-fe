import { Collapse } from "antd";
import { Container } from "../../../atoms";
import {
  FaHistory,
  FaMapMarkerAlt,
  FaProductHunt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import BiodataCategory from "../biodata";
import AddressProfil from "../address";
import AddProductProfile from "../add product";
import MyProductProfile from "../my product";
import HistoryProfile from "../history";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";

function MainProfile() {
  const users = useAuth();
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

  return (
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
  );
}

export default MainProfile;
