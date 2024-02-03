/* eslint-disable react/prop-types */
import {useEffect} from "react";
import {Button} from "../../../atoms";
import {useDispatch} from "react-redux";
import {Radio} from "antd";
import {updateUserAction} from "../../../../store/actions/user.action";

function BiodataCategory(props) {
  const {users, token, formData, setFormData, setPreviewImg} = props;
  const dispatch = useDispatch();

  const id = users.id;

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      file: users?.avatar || "",
      username: users?.username || "",
      name: users?.name || "",
      email: users?.email || "",
      phone: users?.phone || "",
      store_name: users?.store_name || "",
      sex: users?.sex || "",
    }));
  }, [setFormData, users]);

  const hanldeChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value === "" ? "" : value}));
  };

  const hanldeRadioChange = (e) => {
    setFormData({...formData, sex: e.target.value});
  };

  const hanldeFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
    const uploadPrev = e.target.files[0];
    setPreviewImg(URL.createObjectURL(uploadPrev));
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction({token, formData, id}));
  };

  return (
    <form encType="multipart/form-data" onSubmit={hanldeSubmit}>
      <div className="">
        <label htmlFor="" className="block">
          Avatar
        </label>
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={hanldeFileChange}
          className="border h-10 py-1 border-black rounded-md w-full pl-2"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="username" className="block">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={hanldeChange}
          className="border h-10 border-black rounded-md w-full pl-3"
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={hanldeChange}
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={hanldeChange}
          className="border h-10 border-black rounded-md w-full pl-3"
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="phone" className="block">
          Phone
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={hanldeChange}
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="my-5">
        <label htmlFor="store_name" className="block">
          Store Name
        </label>
        <input
          type="text"
          id="store_name"
          name="store_name"
          value={formData.store_name}
          onChange={hanldeChange}
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <span>Gander</span>
      <div className="mt-2">
        <Radio.Group onChange={hanldeRadioChange} value={formData.sex}>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </Radio.Group>
      </div>
      <div className="mt-5">
        <Button variant="primary" className="py-2 w-full">
          Save
        </Button>
      </div>
    </form>
  );
}

export default BiodataCategory;
