import {Button} from "../../../atoms";

function BiodataCategory() {
  return (
    <form action="">
      <div className="">
        <label htmlFor="" className="block">
          Username
        </label>
        <input
          type="text"
          value="Ahmad76"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Name
        </label>
        <input
          type="text"
          value="Ahmad"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Email
        </label>
        <input
          type="email"
          value="ahmad@gmail.com"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Phone
        </label>
        <input
          type="number"
          value="08123787823"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="" className="block">
          Store Name
        </label>
        <input
          type="text"
          value="Ahmad"
          className="border h-10 border-black rounded-md w-full pl-3"
        />
      </div>
      <form className="mt-5">
        <span>Gander</span>
        <div className="">
          <input type="radio" id="male" name="gander" />
          <label htmlFor="male" className="ml-2">
            Male
          </label>
        </div>
        <div className="">
          <input type="radio" id="female" name="gander" />
          <label htmlFor="female" className="ml-2">
            Female
          </label>
        </div>
      </form>
      <div className="mt-5">
        <Button variant="primary" className="py-2 w-full">
          Save
        </Button>
      </div>
    </form>
  );
}

export default BiodataCategory;
