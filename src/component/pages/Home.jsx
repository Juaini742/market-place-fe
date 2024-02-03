import HomeHero from "../molecules/home/hero";
import HomeCategory from "../molecules/home/category";
import HomeSeller from "../molecules/home/seller";
import HomeSponsor from "../molecules/home/sponsor";
import Template from "../templates";
import Footer from "../templates/Footer";

function HomePage() {
  return (
    <Template>
      <HomeHero />
      <HomeCategory />
      <HomeSeller />
      <HomeSponsor />
      <div className="mt-10">
        <Footer />
      </div>
    </Template>
  );
}

export default HomePage;
