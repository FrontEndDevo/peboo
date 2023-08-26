import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import allFeatures from "../assets/images/features.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Features = () => {
  return (
    <section>
      <div>
        <img src={allFeatures} alt="all features" />
      </div>
      <div>
        <h2>Finally a place where it all comes together</h2>
        <p>
          Bring together your strategy with the goals that need to deliver your
          strategy, and the people that need to deliver those goals.
        </p>
        <button className="text-indigo-600 flex items-center justify-center gap-2 hover:underline mx-auto xl:mx-auto">
          Learn More <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </section>
  );
};

export default Features;
