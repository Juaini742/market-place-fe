import AddProductProfile from "../molecules/profile/add product";
import BiodataCategory from "../molecules/profile/biodata";
import HistoryProfile from "../molecules/profile/history";
import Footer from "../templates/Footer";
import Navbar from "../templates/Navbar";
import {Container} from "../atoms";
import {Collapse} from "antd";

const items = [
  {
    key: "1",
    label: "Biodata",
    children: <BiodataCategory />,
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
function ProfilePage() {
  return (
    <>
      <Navbar />
      <Container className="mt-10">
        <span className="font-bold">My Profile</span>
        <div className="mt-3">
          <div className="h-[150px] md:h-[200px] lg:h-[330px] flex items-center justify-center flex-col rounded-xl overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className="overflow-hidden h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px] rounded-full shadow-lg">
              <img src="../img/1.jpg" alt="" />
            </div>
            <span className="text-white mt-3 text-sm lg:text-base">
              Muhammad Joe
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
