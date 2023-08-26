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
      className="bg-white p-10 rounded text-center xl:text-start"
    >
      <FontAwesomeIcon
        icon={product.icon}
        className="bg-indigo-600 text-white p-6 text-5xl rounded mb-8"
      />
      <h4 className="font-work-sans text-2xl xl:text-3xl">{product.title}</h4>
      <p className="my-4 text-justify">{product.description}</p>
      <button className="text-indigo-600 flex items-center justify-center gap-2 hover:underline mx-auto xl:mx-auto">
        Learn More <FontAwesomeIcon icon={faArrowRightLong} />
      </button>
    </div>
  ));

  return (
    <section className="bg-blue-50 px-4 py-12 xl:p-32 relative overflow-hidden">
      <img
        src={bottomBackground}
        alt="bottom background"
        className="absolute -bottom-4 -left-4"
      />
      <div className="container mx-auto">
        <h2 className="text-4xl xl:text-6xl font-work-sans text-center mb-24">
          One product, three solutions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {renderedProducts}
        </div>
      </div>
    </section>
  );
};

export default Products;
