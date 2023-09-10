import organization from "../assets/images/organization.png";
import top_right from "../assets/images/bottom_background.png";
import top_left from "../assets/images/bottom_two_background.png";
const Organization = () => {
  return (
    <section className="container py-24 mx-auto">
      <h2 className="p-2 mb-8 text-4xl text-center border-b-4 border-indigo-600 xl:text-6xl font-work-sans rounded-2xl lg:border-none">
        Join hundreds of successful organizations
      </h2>
      <p className="mb-16 text-xl text-center xl:text-2xl">
        Companies of every size, and in 62 different countries, are using Perdoo
        to beat their competitors.
      </p>
      <div className="relative flex flex-col items-center overflow-hidden text-white bg-zinc-900 rounded-xl lg:flex-row lg:gap-8 xl:gap-24">
        <img
          src={top_right}
          alt="organization top right background"
          className="absolute rotate-180 -top-6 -right-6 lg:-top-4 lg:-right-4"
        />
        <img
          src={top_left}
          alt="organization top left background"
          className="absolute -top-8 -left-8 lg:-top-4 lg:-left-4"
        />

        <img
          src={organization}
          alt="our managers"
          loading="lazy"
          className="w-full lg:w-1/3"
        />
        <div className="p-4 text-center lg:w-1/2 lg:p-0">
          <q className="text-xl font-work-sans lg:text-3xl">
            Peboo enabled everyone in our organization to focus on results that
            matter, and got everyone pointed in the same direction.
          </q>
          <p className="mt-6 text-xl font-work-sans lg:mb-2 lg:mt-12">
            Shannon Lincoln
          </p>
          <p className="text-xl opacity-75 font-work-sans">
            VP Finance, Shippo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Organization;
