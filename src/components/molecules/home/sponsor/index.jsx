import { Container } from "../../../atoms";
import { sponsors } from "../../db";
import { motion } from "framer-motion";

function HomeSponsor() {
  const scrollX = (direction) => ({
    x: direction === "left" ? ["100%", "-100%"] : ["-100%", "100%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 10,
      ease: "linear",
    },
  });

  return (
    <Container className="mt-10 overflow-hidden">
      <motion.div
        className="flex items-center justify-center lg:gap-20 bg-white"
        animate={scrollX("left")}
      >
        {sponsors.slice(0, 4).map((item, i) => (
          <div key={i} className="mx-2">
            <img
              src={item.img}
              alt="sponsor"
              className="min-w-40 p-1 border-"
            />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex items-center justify-center lg:gap-20 bg-white mt-4"
        animate={scrollX("right")}
      >
        {sponsors.slice(4, 8).map((item, i) => (
          <div key={i} className="mx-2">
            <img src={item.img} alt="sponsor" className="min-w-40" />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex items-center justify-center lg:gap-20 bg-white mt-4"
        animate={scrollX("left")}
      >
        {sponsors.slice(8, 12).map((item, i) => (
          <div key={i} className="mx-2">
            <img src={item.img} alt="sponsor" className="min-w-40" />
          </div>
        ))}
      </motion.div>
    </Container>
  );
}

export default HomeSponsor;
