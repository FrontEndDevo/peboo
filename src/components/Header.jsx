import header from "../assets/images/header/header.png";
import headTop from "../assets/images/header/head_one.png";
import headDown from "../assets/images/header/head_two.png";
const Header = () => {
  return (
    <header>
      <div>
        <img src={header} alt="header-image" />
        <img src={headTop} alt="header-background-top" />
        <img src={headDown} alt="header-background-down" />
      </div>
      <div>
        <h2>Your strategy is only as good as you execute it</h2>
        <p>
          Our simple but powerful OKR+ platform turns great strategies into
          amazing results. And it&apos;s free.
        </p>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
          <button>Get Started</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
