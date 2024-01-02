import {Link} from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="container min-h-screen flex  justify-between items-center gap-5">
        <div className="hidden md:flex w-96 overflow-hidden">
          <img src="../img/login.svg" alt="login" className="" />
        </div>
        <div className="box-border md:w-1/2">
          <form>
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
              <Link to="/">
                <button className="py-3 w-full btn-primary">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
