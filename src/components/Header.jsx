import header from "../assets/images/header.png";
import headTop from "../assets/images/top_background.png";
import headDown from "../assets/images/bottom_background.png";
import { useState } from "react";
const Header = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const changeEmailInputHandler = (e) => {
    setEmail(e.target.value.trim());
  };

  const blurEmailInputHandler = () => {
    if (email.trim().length == 0) setEmailError(true);
  };

  // Form Submission:
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (email.length <= 0) setEmailError(true);
    else {
      // Do what shoud we do.
      console.log(email);

      setEmail("");
      setEmailError(false);
    }
  };

  return (
    <header className="py-[5rem] md:py-[8rem] container mx-auto flex flex-col lg:flex-row-reverse justify-evenly items-center">
      <div className="relative overflow-hidden basis-1/3">
        <img
          className="rounded-tl-[60px] w-full"
          src={header}
          alt="header-image"
        />
        <img
          className="absolute -top-8 -right-8"
          src={headTop}
          alt="header-background-top"
        />
        <img
          className="absolute -bottom-4 -left-4"
          src={headDown}
          alt="header-background-down"
        />
      </div>
      <div className="mx-4 mt-8 text-center basis-1/2 lg:text-start lg:mx-0">
        <h2 className="text-5xl font-work-sans lg:w-5/6 xl:text-7xl">
          Your strategy is only as good as you execute it
        </h2>

        <p className="my-8 text-base xl:text-xl lg:w-4/6">
          Our simple but powerful OKR+ platform turns great strategies into
          amazing results. And it&apos;s free.
        </p>

        <form onSubmit={submitFormHandler} className="relative xl:w-5/6">
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={changeEmailInputHandler}
            onBlur={blurEmailInputHandler}
            placeholder="Enter Your Email"
            className="w-full px-12 py-6 transition duration-1000 border border-r-0 border-solid rounded-sm outline-none border-slate-800 placeholder:text-black focus:border-indigo-700"
          />
          {emailError && (
            <p className="absolute left-0 text-sm italic text-red-600 -bottom-6">
              Your Email is incorrect
            </p>
          )}
          <button className="absolute top-0 right-0 px-12 py-6 text-lg font-bold text-white transition duration-500 bg-indigo-700 rounded-sm hover:bg-indigo-800">
            Get Started
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
