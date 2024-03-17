import Contact from "../Contact";
import Footer from "../Footer";
import Herosection from "../Herosection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonials from "../Testimonials";

export default function Home() {
  return (
    <>
      <Herosection />
      <MySkills />
      <MyPortfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
