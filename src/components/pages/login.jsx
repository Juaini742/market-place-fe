import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";
import { loginAction } from "../../store/actions/user.action";

function LoginPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const actLogin = await dispatch(loginAction(formData)).then(() => {
        setIsLoading(false);
      });

      return unwrapResult(actLogin);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container min-h-screen flex  justify-between items-center gap-5">
        <div className="hidden md:flex w-96 overflow-hidden">
          <img src="../img/login.svg" alt="login" className="" />
        </div>
        <div className="box-border w-full md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="">
              <h1 className="text-2xl font-semibold">Welcome to Myfashion</h1>
              <p className="text-gray-400">please login here</p>
            </div>

            <div className="mt-8 flex gap-3 flex-col">
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
            <div className="mt-5 flex justify-between">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  placeholder="xxxxxxxxxxxxx"
                  className="border border-black pl-3 rounded-md text-sm"
                />
                <label htmlFor="terms" className="text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <Link to="#" className="text-sm">
                  Forgot Password
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-400">
                don not have acount,{" "}
                <Link to="/register" className="text-black">
                  register here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              <button disabled={isLoading} className="py-3 w-full btn-primary">
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
