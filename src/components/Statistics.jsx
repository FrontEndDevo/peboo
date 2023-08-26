import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import statisticsImg from "../assets/images/statistics.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// This component should be a dynamic component (Handling props and calculate equations...etc) in SPA.
const Statistics = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row justify-between xl:gap-20 items-center py-12">
      <div className="basis-1/2">
        <img src={statisticsImg} alt="all statistics" className="w-full" />
      </div>
      <div className="basis-1/2 px-4 text-center lg:text-start">
        <h2 className="text-3xl xl:text-6xl font-work-sans leading-tight font-normal border-indigo-600 border-b-4 p-2 rounded-2xl lg:border-none">
          The overview you’ve always wanted
        </h2>
        <p className="text-xl xl:text-2xl my-8 text-justify xl:w-5/6">
          Stop guessing. Know what’s going on and see how everything is
          progressing. Take action when needed and coach your team to success.
        </p>
        <button className="text-indigo-600 flex items-center justify-center gap-2 text-xl hover:underline mx-auto xl:mx-0">
          Learn More <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </section>
  );
};

export default Statistics;
