import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import allFeatures from "../assets/images/features.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Features = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row-reverse justify-between xl:gap-44 items-center  py-24">
      <div className="basis-1/2">
        <img src={allFeatures} alt="all features" className="w-full" />
      </div>
      <div className="basis-1/2 px-4 text-center lg:text-start">
        <h2 className="text-3xl xl:text-6xl font-work-sans leading-tight font-normal border-indigo-600 border-b-4 p-2 rounded-2xl lg:border-none">
          Finally a place where it all comes together
        </h2>
        <p className="text-xl xl:text-2xl my-8 text-justify xl:w-2/3">
          Bring together your strategy with the goals that need to deliver your
          strategy, and the people that need to deliver those goals.
        </p>
        <button className="text-indigo-600 flex items-center justify-center gap-2 text-xl hover:underline mx-auto xl:mx-0">
          Learn More <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </section>
  );
};

export default Features;
