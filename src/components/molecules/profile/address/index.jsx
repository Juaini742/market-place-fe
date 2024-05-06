import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Button} from "../../../atoms";
import {updateAddress} from "../../../../store/actions/address.action";
import useAddress from "../../../../hooks/useAddress";

function AddressProfil() {
  const dispatch = useDispatch();
  const address = useAddress();
  const [formData, setFormData] = useState({
    city: "",
    postal_code: "",
    privince: "",
    country: "",
    address: "",
  });

  useEffect(() => {
    setFormData({
      city: address?.city || "",
      postal_code: address?.postal_code || "",
      privince: address?.privince || "",
      country: address?.country || "",
      address: address?.address || "",
    });
  }, [address]);

  const hanldeChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAddress({formData, id: address.id}));
  };

  return (
    <form onSubmit={hanldeSubmit}>
      <div className="mt-5">
        <label htmlFor="city" className="block">
          City
        </label>
        <input
          type="text"
          id="city"
          value={formData.city}
          onChange={hanldeChange}
          name="city"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="postal_code" className="block">
          Postal Code
        </label>
        <input
          type="number"
          id="postal_code"
          value={formData.postal_code}
          onChange={hanldeChange}
          name="postal_code"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="privince" className="block">
          Province
        </label>
        <input
          type="text"
          id="privince"
          value={formData.privince}
          onChange={hanldeChange}
          name="privince"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="country" className="block">
          Country
        </label>
        <input
          type="text"
          id="country"
          value={formData.country}
          onChange={hanldeChange}
          name="country"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="my-5">
        <label htmlFor="address" className="block">
          Address
        </label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={hanldeChange}
          name="address"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div>
        <Button variant="primary" className="w-full py-2">
          Save
        </Button>
      </div>
    </form>
  );
}

export default AddressProfil;
