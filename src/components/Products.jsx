import {
  faArrowRightLong,
  faBullseye,
  faShapes,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bottomBackground from "../assets/images/bottom_background.png";
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
    <div
      key={index}
      className="p-10 text-center bg-white rounded xl:text-start"
    >
      <FontAwesomeIcon
        icon={product.icon}
        className="p-6 mb-8 text-5xl text-white bg-indigo-600 rounded"
      />
      <h4 className="text-2xl font-work-sans xl:text-3xl">{product.title}</h4>
      <p className="my-4 text-justify">{product.description}</p>
      <button className="flex items-center justify-center gap-2 mx-auto text-indigo-600 hover:underline xl:mx-0">
        Learn More <FontAwesomeIcon icon={faArrowRightLong} />
      </button>
    </div>
  ));

  return (
    <section className="relative px-4 py-12 overflow-hidden bg-blue-50 xl:p-32">
      <img
        src={bottomBackground}
        alt="bottom background"
        className="absolute -bottom-4 -left-4"
      />
      <div className="container mx-auto">
        <h2 className="p-2 mb-24 text-4xl text-center border-b-4 border-indigo-600 xl:text-6xl font-work-sans rounded-2xl lg:border-none">
          One product, three solutions
        </h2>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
          {renderedProducts}
        </div>
      </div>
    </section>
  );
};

export default Products;
