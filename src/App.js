import Genre from "./Components/Genre/Genre";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Opinion from "./Components/Opinion/Opinion";
import Footer from "./Components/Footer/Footer";
import Taazakhabre from "./Components/TaazaKhabre/Taazakhabre";
import MainSection from "./Components/MainSection/MainSection";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Genre />
      <MainSection />
      <Opinion />
      <Taazakhabre />
      <Footer />
    </>
  );
}

export default App;
