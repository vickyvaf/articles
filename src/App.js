import "./App.scss";

import Banner from "./components/Banner";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Horizontal from "./components/Horizontal";
import Newsletter from "./components/Newsletters";

import banner from "./assets/banner.jpg";
import article1 from "./assets/article1.jpg";
import article2 from "./assets/article2.jpg";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";

const App = () => {
  const submit = () => {
    alert('Email telah terkirim 👏')
  }

  return (
    <div className="App">
      <Banner img={banner} />
      <Article1 img={article1} />
      <Article2 img={article2} />
      <Horizontal imgs={[image1, image2, image3, image4, image1]} />
      <Newsletter submitFn={submit} />
    </div>
  );
};

export default App;
