import organization from "../assets/images/organization.png";
import top_right from "../assets/images/bottom_background.png";
import top_left from "../assets/images/bottom_two_background.png";
const Organization = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-4xl xl:text-6xl font-work-sans text-center mb-8 border-indigo-600 border-b-4 p-2 rounded-2xl lg:border-none">
          Join hundreds of successful organizations
        </h2>
        <p className="text-xl xl:text-2xl text-center mb-16">
          Companies of every size, and in 62 different countries, are using
          Perdoo to beat their competitors.
        </p>
        <div className="text-white bg-zinc-900 rounded-xl relative flex items-center gap-24 overflow-hidden">
          <img
            src={top_right}
            alt="organization top right background"
            className="absolute -top-4 -right-4 rotate-180"
          />
          <img
            src={top_left}
            alt="organization top left background"
            className="absolute -top-4 -left-4"
          />

          <img src={organization} alt="our managers" loading="lazy" />
          <div className="w-1/2">
            <q className="font-work-sans text-3xl">
              Peboo enabled everyone in our organization to focus on results
              that matter, and got everyone pointed in the same direction.
            </q>
            <p className="font-work-sans text-xl mb-2 mt-12">Shannon Lincoln</p>
            <p className="font-work-sans text-xl opacity-75">
              VP Finance, Shippo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
