import {Button} from "../../../atoms";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {InboxOutlined} from "@ant-design/icons";
import {message, Upload} from "antd";
const {Dragger} = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const {status} = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
function AddProductProfile() {
  return (
    <form action="">
      <div className="">
        <label htmlFor="" className="block mb-1">
          Image
        </label>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Product Name
        </label>
        <input
          type="text"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Colors
        </label>
        <input
          type="text"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Sizes
        </label>
        <input
          type="text"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Stock
        </label>
        <input
          type="number"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Category
        </label>
        <input
          type="text"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Price
        </label>
        <input
          type="number"
          step="any"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Short Description / Slug
        </label>
        <input
          type="text"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Long Description
        </label>
        <ReactQuill theme="snow" className="h-72" />
      </div>
      <div className="mt-20 md:mt-16">
        <Button variant="primary" className="py-2 w-full">
          Save
        </Button>
      </div>
    </form>
  );
}

export default AddProductProfile;
