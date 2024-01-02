import {Button} from "../../../atoms";

function HomeHero() {
  return (
    <div
      className="h-[700px] w-full bg-cover"
      style={{backgroundImage: "url(../img/hero.jpg)"}}
    >
      <div className="w-full h-full bg-black/35 flex justify-center items-center">
        <div className="w-[95%] md:w-[70%]">
          <h3 className="font-juro text-white text-center text-xl md:text-3xl">
            Combine elegant and clean outfits for a timeless look. Bohemian
            Touch: Opt for relaxed clothing with a bohemian flair for a stylish
            appearance
          </h3>
          <p className="font-juro text-xs  md:text-sm leading-5 text-white text-center">
            Focus on neutral colors and simple cuts for a chic and clean style.
            Trendy Streetwear: Draw inspiration from street fashion for a cool
            and casual look. Elegant in Bright Colors: Enhance your appearance
            with vibrant colors that reflect your personality
          </p>
          <div className="flex justify-center mt-4">
            <Button variant="white" className="py-2 px-14">
              View more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
