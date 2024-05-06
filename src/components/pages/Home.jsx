import HomeHero from "../molecules/home/hero";
import HomeCategory from "../molecules/home/category";
import HomeSeller from "../molecules/home/seller";
import HomeSponsor from "../molecules/home/sponsor";
import Template from "../templates";

function HomePage() {
  return (
    <Template>
      <HomeHero />
      <HomeCategory />
      <HomeSeller />
      <HomeSponsor />
    </Template>
  );
}

export default HomePage;
