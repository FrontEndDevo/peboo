import {
  faArrowRightLong,
  faBullseye,
  faShapes,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ourProducts = [
  {
    icon: faShapes,
    title: "Roadmap to success",
    description:
      "Design your future. Share your strategy with the people responsible for delivering it. Create clarity and buy-in.",
  },
  {
    icon: faBullseye,
    title: "Goals that matter",
    description:
      "Design your future. Share your strategy with the people responsible for delivering it. Create clarity and buy-in.",
  },
  {
    icon: faTrophy,
    title: "Visible achievements",
    description:
      "Design your future. Share your strategy with the people responsible for delivering it. Create clarity and buy-in.",
  },
];

const Products = () => {
  const renderedProducts = ourProducts.map((product, index) => (
    <div key={index}>
      <FontAwesomeIcon icon={product.icon} />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <button>
        Learn More <FontAwesomeIcon icon={faArrowRightLong} />
      </button>
    </div>
  ));

  return (
    <section>
      <h2>One product, three solutions</h2>
      <div>{renderedProducts}</div>
    </section>
  );
};

export default Products;
