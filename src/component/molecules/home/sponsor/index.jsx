import {Container} from "../../../atoms";
import {sponsors} from "../../db";

function HomeSponsor() {
  return (
    <Container className="mt-10">
      <div className="bg-white grid grid-cols-2 md:grid-cols-4 justify-between">
        {sponsors.map((item, i) => (
          <div key={i} className="">
            <img src={item.img} alt="sponsor" />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default HomeSponsor;
