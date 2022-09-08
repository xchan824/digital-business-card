import Info from "./components/Info";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card-container">
      <Info />
      <Buttons />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
