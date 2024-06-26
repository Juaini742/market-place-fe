import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {InboxOutlined} from "@ant-design/icons";
import {message, Upload} from "antd";
const {Dragger} = Upload;
import {Select, Space} from "antd";
import {Button, Container} from "../../atoms";
import {colors, sizes} from "../db";
import {useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import useProductById from "../../../hooks/useProductById";
import {useEffect, useState} from "react";
import {updateproductAction} from "../../../store/actions/product.action";

function UpdateProduct() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useProductById({id});
  const [previewImg, setPreviewImg] = useState(null);
  const [formData, setFormData] = useState({
    file: "",
    product_name: "",
    color_names: [],
    size_names: [],
    stock: "",
    category: "",
    price: "",
    short_description: "",
    long_description: "",
  });

  useEffect(() => {
    setFormData({
      product_name: product?.product_name || "",
      color_names: product?.colors_item || [],
      size_names: product?.sizes_item || [],
      stock: product?.stock || "",
      category: product?.category || "",
      price: product?.price || "",
      short_description: product?.short_description || "",
      long_description: product?.long_description || "",
    });
  }, [setFormData, product]);

  const props = {
    name: "file",
    multiple: false,
    action: previewImg,
    onChange: (info) => {
      const {status, fileList} = info;

      if (status === "removed" && fileList && fileList.length > 0) {
        setFormData((prev) => ({
          ...prev,
          file: null,
        }));
      } else if (fileList && fileList.length > 0) {
        setFormData((prev) => ({
          ...prev,
          file: fileList[0].originFileObj,
        }));
        const uploadPrev = fileList[0].originFileObj;
        setPreviewImg(URL.createObjectURL(uploadPrev));
      }

      if (status === "done") {
        message.success(`${fileList[0]?.name} file uploaded successfully`);
      } else if (status === "error") {
        message.error(`${fileList[0]?.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedValues) => {
    setFormData((prev) => ({
      ...prev,
      color_names: selectedValues,
    }));
  };
  const handleSelectSizeChange = (selectedValues) => {
    setFormData((prev) => ({
      ...prev,
      size_names: selectedValues,
    }));
  };

  const handleQuillChange = (value) => {
    setFormData((prev) => ({...prev, long_description: value}));
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    dispatch(updateproductAction({formData, id}));
  };

  return (
    <Container>
      <div className="flex justify-center my-10">
        <img
          src={previewImg?.length > 0 ? previewImg : product.img}
          alt={product.product_name}
        />
      </div>
      <form onSubmit={hanldeSubmit} encType="multipart/form-data">
        <div className="">
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
          <label htmlFor="product_name" className="block">
            Product Name
          </label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            className="border h-10 border-black rounded-md w-full pl-3"
            placeholder="Your product name"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="color_names" className="block">
            Colors
          </label>
          <Select
            mode="multiple"
            style={{
              width: "100%",
            }}
            placeholder="select your colors"
            value={formData.color_names}
            onChange={handleSelectChange}
            optionLabelProp="label"
            options={colors}
            optionRender={(colors) => <Space>{colors.data.desc}</Space>}
            className="border h-10 border-black rounded-md w-full"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="size_names" className="block">
            Sizes
          </label>
          <Select
            mode="multiple"
            style={{
              width: "100%",
            }}
            placeholder="select your size products"
            value={formData.size_names}
            onChange={handleSelectSizeChange}
            optionLabelProp="label"
            options={sizes}
            optionRender={(sizes) => <Space>{sizes.data.desc}</Space>}
            className="border h-10 border-black rounded-md w-full"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="stock" className="block">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="border h-10 border-black rounded-md w-full pl-3"
            placeholder="Your stock product"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="category" className="block">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border h-10 border-black rounded-md w-full pl-3"
            placeholder="Your category product"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="price" className="block">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border h-10 border-black rounded-md w-full pl-3"
            placeholder="Your price product"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="short_description" className="block">
            Short Description / Slug
          </label>
          <input
            type="text"
            id="short_description"
            name="short_description"
            value={formData.short_description}
            onChange={handleChange}
            className="border h-10 border-black rounded-md w-full pl-3"
            placeholder="Slug of your product"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="long_description" className="block">
            Long Description
          </label>
          <ReactQuill
            theme="snow"
            value={formData.long_description}
            onChange={handleQuillChange}
            className="h-72"
          />
        </div>
        <div className="mt-20 md:mt-16">
          <Button variant="primary" className="py-2 w-full">
            Save
          </Button>
          <Link to="/profile">
            <Button variant="gray" className="py-2 w-full mt-3">
              Back
            </Button>
          </Link>
        </div>
      </form>
    </Container>
  );
}

export default UpdateProduct;
