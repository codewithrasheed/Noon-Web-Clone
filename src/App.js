import "./App.css";
import Navigation from "./Components/Navigation";
import Menu from "./Components/menu";
import img4 from "./images/banner.png";
import Slider from "./Components/slider";
import CategorySlider from "./Components/CategorySlider";
import Block5 from "./Components/Block5";
import ProductCard from "./Components/ProductCard";
import Block6 from "./Components/Block6";
import Block7 from "./Components/Block7";
import Block8 from "./Components/Block8";
import Block9 from "./Components/Block9";
import Block10 from "./Components/Block10";
import Block11 from "./Components/Block11";
import Block12 from "./Components/Block12";
import Block13 from "./Components/Block13";
import Block14 from "./Components/Block14";
import Block15 from "./Components/Block15";
import Block16 from "./Components/Block16";
import Block17 from "./Components/Block17";
import Block18 from "./Components/Block18";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Menu />
      <img src={img4} width="100%" />
      <Slider />
      <CategorySlider />
      <Block5 />
      <ProductCard />
      <Block6 />
      <Block7 />
      <Block8 />
      <Block9 />
      <Block10 />
      <Block11 />
      <Block12 />
      <Block13 />
      <Block14 />
      <Block15 />
      <Block16 />
      <Block17 />
      <Block18 />
      <Footer />
    </div>
  );
}
export default App;
