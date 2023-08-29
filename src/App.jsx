import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Organization from "./components/Organization";
import Products from "./components/Products";
import Statistics from "./components/Statistics";
import WeDifferent from "./components/WeDifferent";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Products />
      <Features />
      <Statistics />
      <Organization />
      <WeDifferent />
      <Footer />
    </>
  );
};

export default App;
