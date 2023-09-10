import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import allFeatures from "../assets/images/features.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Features = () => {
  return (
    <section className="container flex flex-col items-center justify-between py-24 mx-auto lg:flex-row-reverse xl:gap-44">
      <div className="basis-1/2">
        <img src={allFeatures} alt="all features" className="w-full" />
      </div>
      <div className="px-4 text-center basis-1/2 lg:text-start">
        <h2 className="p-2 text-3xl font-normal leading-tight border-b-4 border-indigo-600 xl:text-6xl font-work-sans rounded-2xl lg:border-none">
          Finally a place where it all comes together
        </h2>
        <p className="my-8 text-xl text-justify xl:text-2xl xl:w-2/3">
          Bring together your strategy with the goals that need to deliver your
          strategy, and the people that need to deliver those goals.
        </p>
        <button className="flex items-center justify-center gap-2 mx-auto text-xl text-indigo-600 hover:underline xl:mx-0">
          Learn More <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </section>
  );
};

export default Features;
