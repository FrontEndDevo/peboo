import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import statisticsImg from "../assets/images/statistics.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// This component should be a dynamic component (Handling props and calculate equations...etc) in SPA.
const Statistics = () => {
  return (
    <section className="container flex flex-col items-center justify-between py-12 mx-auto lg:flex-row xl:gap-20">
      <div className="basis-1/2">
        <img src={statisticsImg} alt="all statistics" className="w-full" />
      </div>
      <div className="px-4 text-center basis-1/2 lg:text-start">
        <h2 className="p-2 text-3xl font-normal leading-tight border-b-4 border-indigo-600 xl:text-6xl font-work-sans rounded-2xl lg:border-none">
          The overview you’ve always wanted
        </h2>
        <p className="my-8 text-xl text-justify xl:text-2xl xl:w-5/6">
          Stop guessing. Know what’s going on and see how everything is
          progressing. Take action when needed and coach your team to success.
        </p>
        <button className="flex items-center justify-center gap-2 mx-auto text-xl text-indigo-600 hover:underline xl:mx-0">
          Learn More <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </section>
  );
};

export default Statistics;
