import {Link} from "react-router-dom";

function RegisterPage() {
  return (
    <>
      <div className="container min-h-screen flex  justify-between items-center gap-5">
        <div className="hidden md:flex w-96 overflow-hidden">
          <img src="../img/login.svg" alt="login" className="" />
        </div>
        <div className="box-border md:w-1/2">
          <form>
            <div className="">
              <h1 className="text-2xl font-semibold">Create New Account</h1>
              <p className="text-gray-400">please enter details</p>
            </div>
            <div className="mt-8 flex gap-3 flex-col">
              <label htmlFor="first_name" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Your first name..."
                className="h-10 border border-black pl-3 rounded-md text-sm"
              />
            </div>
            <div className="mt-5 flex gap-3 flex-col">
              <label htmlFor="last_name" className="text-sm">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
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
