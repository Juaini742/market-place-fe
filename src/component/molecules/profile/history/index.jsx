import {useState} from "react";
import useShipping from "../../../../hooks/useShipping";
import HistoryComments from "./comments";
import HistoryProducts from "./produtcs";

function HistoryProfile() {
  const {checkout} = useShipping();
  const [selectTab, setSelectTab] = useState("Products");

  const hanldeTab = (e) => {
    setSelectTab(e);
  };

  return (
    <>
      <div className="flex gap-2 justify-center mb-5">
        <button
          onClick={() => hanldeTab("Products")}
          className={selectTab === "Products" ? "font-bold" : ""}
        >
          Products
        </button>
        {/* <button
          onClick={() => hanldeTab("Ratings")}
          className={selectTab === "Ratings" ? "font-bold" : ""}
        >
          Ratings
        </button> */}
        <button
          onClick={() => hanldeTab("Comments")}
          className={selectTab === "Comments" ? "font-bold" : ""}
        >
          Comments
        </button>
      </div>
      {selectTab === "Products" && <HistoryProducts checkout={checkout} />}
      {selectTab === "Comments" && <HistoryComments checkout={checkout} />}
    </>
  );
}

export default HistoryProfile;
