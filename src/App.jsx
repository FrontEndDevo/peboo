import Features from "./components/Features";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
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
      <WeDifferent />
    </>
  );
};

export default App;
