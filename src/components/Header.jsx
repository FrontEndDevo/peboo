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
    <header className="py-[8rem] container mx-auto flex flex-col lg:flex-row-reverse justify-evenly items-center">
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
      <div className="basis-1/2 text-center lg:text-start mt-8 mx-4 lg:mx-0">
        <h2 className=" font-work-sans lg:w-5/6 text-5xl xl:text-7xl">
          Your strategy is only as good as you execute it
        </h2>

        <p className="my-8 text-base xl:text-xl lg:w-4/6">
          Our simple but powerful OKR+ platform turns great strategies into
          amazing results. And it&apos;s free.
        </p>

        <form onSubmit={submitFormHandler} className="xl:w-5/6 relative">
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={changeEmailInputHandler}
            onBlur={blurEmailInputHandler}
            placeholder="Enter Your Email"
            className="border-solid border-slate-800 border py-6 w-full px-12 border-r-0 rounded-sm placeholder:text-black transition duration-1000 outline-none focus:border-indigo-700"
          />
          {emailError && (
            <p className="absolute left-0 -bottom-6 text-sm text-red-600 italic">
              Your Email is incorrect
            </p>
          )}
          <button className="py-6 px-12 absolute right-0 top-0 text-lg font-bold text-white bg-indigo-700 rounded-sm transition duration-500 hover:bg-indigo-800">
            Get Started
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
