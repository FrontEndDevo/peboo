import {
  faArrowRightLong,
  faBullseye,
  faShapes,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = () => {
  return (
    <section>
      <h2>One product, three solutions</h2>
      <div>
        <div>
          <FontAwesomeIcon icon={faShapes} />
          <p>
            Design your future. Share your strategy with the people responsible
            for delivering it. Create clarity and buy-in.
          </p>
          <button>
            Learn More <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
        <div>
          <FontAwesomeIcon icon={faBullseye} />
          <h4>Goals that matter</h4>
          <p>
            Design your future. Share your strategy with the people responsible
            for delivering it. Create clarity and buy-in.
          </p>
          <button>
            Learn More <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
        <div>
          <FontAwesomeIcon icon={faTrophy} />
          <h4>Visible achievements</h4>
          <p>
            Design your future. Share your strategy with the people responsible
            for delivering it. Create clarity and buy-in.
          </p>
          <button>
            Learn More <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
