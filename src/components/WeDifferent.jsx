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
    <div key={i} className="p-20 capitalize bg-blue-50">
      <h4 className="text-5xl font-work-sans">{item.title}</h4>
      <p className="my-4 text-xl">{item.description}</p>
      <button className="flex items-center justify-center gap-2 mx-auto text-xl text-indigo-600 hover:underline xl:mx-0">
        Learn More <FontAwesomeIcon icon={faArrowRightLong} />
      </button>
    </div>
  ));

  return (
    <section className="container py-12 mx-auto">
      <h2 className="p-2 text-4xl text-center border-b-4 border-indigo-600 xl:text-6xl font-work-sans mb-14 rounded-2xl lg:border-none">
        How we are different
      </h2>
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        {weAreDifferent}
      </div>
    </section>
  );
};

export default WeDifferent;
