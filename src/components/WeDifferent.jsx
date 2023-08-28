import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const weDifferent = [
  {
    title: "Best resources & support",
    description:
      "We are widely known for offering the best resources and support.",
  },
  {
    title: "Easiest-to-use product",
    description:
      "We're the pioneers of simplifying goal we are proving it management.",
  },
];
const WeDifferent = () => {
  const weAreDifferent = weDifferent.map((item, i) => (
    <div key={i} className="bg-blue-50 p-20 capitalize">
      <h4 className="text-5xl font-work-sans">{item.title}</h4>
      <p className="my-4 text-xl">{item.description}</p>
      <button className="text-indigo-600 flex items-center justify-center gap-2 text-xl hover:underline mx-auto xl:mx-0">
        Learn More <FontAwesomeIcon icon={faArrowRightLong} />
      </button>
    </div>
  ));

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-4xl xl:text-6xl font-work-sans text-center mb-14 border-indigo-600 border-b-4 p-2 rounded-2xl lg:border-none">
        How we are different
      </h2>
      <div className="flex justify-center gap-8 flex-col md:flex-row">
        {weAreDifferent}
      </div>
    </section>
  );
};

export default WeDifferent;
