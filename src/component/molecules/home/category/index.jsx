import {Container} from "../../../atoms";
import {categories} from "../../db";

function HomeCategory() {
  return (
    <Container className="mt-10">
      <div className="mb-10">
        <span className="font-semibold">Browser By Category</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-5">
        {categories.map((item, i) => (
          <div
            key={i}
            className="p-3 border border-gray-500 rounded-lg hover:shadow-lg hover:bg-gray-100 hover:transition duration-300"
          >
            <div className="overflow-hidden flex justify-center">
              <img src={item.img} alt="" className="w-40 rounded-md" />
            </div>
            <div className="text-center mt-2 text-sm ">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default HomeCategory;
