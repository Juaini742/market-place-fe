import {FaStar} from "react-icons/fa";

function RatingProduct() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-bold text-xl">Rating (30)</h3>
      <div className="flex flex-col gap-3 py-5 px-4 border rounded-xl">
        <span className="text-gray-400">Posted on August 14, 2024</span>
        <div className="flex gap-1 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h4>Samantha D</h4>
        <p className="text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure animi
          sit natus pariatur doloremque voluptatibus perferendis aliquid quia.
        </p>
      </div>
      <div className="flex flex-col gap-3 py-5 px-4 border rounded-xl">
        <span className="text-gray-400">Posted on August 14, 2024</span>
        <div className="flex gap-1 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h4>Samantha D</h4>
        <p className="text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure animi
          sit natus pariatur doloremque voluptatibus perferendis aliquid quia.
        </p>
      </div>
      <div className="flex flex-col gap-3 py-5 px-4 border rounded-xl">
        <span className="text-gray-400">Posted on August 14, 2024</span>
        <div className="flex gap-1 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h4>Samantha D</h4>
        <p className="text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure animi
          sit natus pariatur doloremque voluptatibus perferendis aliquid quia.
        </p>
      </div>
    </div>
  );
}

export default RatingProduct;
