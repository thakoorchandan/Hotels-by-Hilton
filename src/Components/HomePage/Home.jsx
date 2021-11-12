import Carous from "./Carousel";
import BlueLine from "./BlueLine";
import Header from "./Header";
import WhereTo from "./WhereTo";
import WhatsNew from "./WhatsNew";
import Extracheer from "./ExtraCheer";
import CreateMemories from "./CreateMemories";
// import Brands from "./Brands";
import Footer from "./../../images/Footer.png";

function Home() {
  return (
    <>
      <Header />
      <WhereTo />
      <BlueLine />
      <Carous />
      <WhatsNew />
      <Extracheer />
      <CreateMemories />

      <img src={Footer} alt="footer" style={{ marginTop: "80px" }} />
    </>
  );
}

export default Home;
