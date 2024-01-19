import {useState} from "react";
import {Link} from "react-router-dom";
import {registerAction} from "../../store/actions/user.action";
import {useDispatch} from "react-redux";
function RegisterPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(formData));
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container min-h-screen flex  justify-between items-center gap-5">
        <div className="hidden md:flex w-96 overflow-hidden">
          <img src="../img/login.svg" alt="login" />
        </div>

        <div className="box-border w-full md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className="text-2xl font-semibold">Create New Account</h1>
              <p className="text-gray-400">please enter details</p>
            </div>
            <div className="mt-5 flex gap-3 flex-col">
              <label htmlFor="last_name" className="text-sm">
                Username
              </label>
              <input
                type="text"
                id="last_name"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Your last name..."
                className="h-10 border border-black pl-3 rounded-md text-sm"
              />
            </div>
            <div className="mt-5 flex gap-3 flex-col">
              <label htmlFor="emial" className="text-sm">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email..."
                className="h-10 border border-black pl-3 rounded-md text-sm"
              />
            </div>
            <div className="mt-5 flex gap-3 flex-col">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="xxxxxxxxxxxxx"
                className="h-10 border border-black pl-3 rounded-md text-sm"
              />
            </div>
            <div className="mt-5 flex gap-3">
              <input
                type="checkbox"
                id="terms"
                placeholder="xxxxxxxxxxxxx"
                className="border border-black pl-3 rounded-md text-sm"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the <strong>Terms & Conditions</strong>
              </label>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-400">
                Already have acount,{" "}
                <Link to="/login" className="text-black">
                  login here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <button className="py-3 w-full btn-primary">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
