import Navbar from "../templates/Navbar";
import HomeHero from "../molecules/home/hero";
import HomeCategory from "../molecules/home/category";
import HomeSeller from "../molecules/home/seller";
import HomeSponsor from "../molecules/home/sponsor";
import Footer from "../templates/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeCategory />
      <HomeSeller />
      <HomeSponsor />
      <Footer />
    </>
  );
}

export default HomePage;
