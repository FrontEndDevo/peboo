import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bottomBackground from "../assets/images/top_background.png";
import topBackground from "../assets/images/top_two_background.png";
const footerHyperLinks = [
  { topic: "Resources", links: ["Features", "Pricing", "Login", "Signup"] },
  {
    topic: "Legal",
    links: ["Terms of Use", "Privace Policy", "Legal Notice"],
  },
  {
    topic: "Links",
    links: ["Feedback", "Privace Policy", "Legal Notice"],
  },
];

const socialMedia = [faFacebookF, faInstagram, faTwitter, faLinkedinIn];
const Footer = () => {
  const hyperLinks = footerHyperLinks.map((obj, index) => (
    <div key={index} className="text-center lg:text-start">
      <h3 className="p-2 mb-4 text-3xl border-b-4 border-indigo-600 font-work-sans lg:p-0 rounded-2xl lg:border-none">
        {obj.topic}
      </h3>
      <ul>
        {obj.links.map((link) => (
          <li key={link} className="my-5">
            <a
              href={`/${link.replace(" ", "-")}`}
              className="text-xl hover:underline"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ));

  const pebooSocialMedia = socialMedia.map((media, i) => (
    <FontAwesomeIcon
      key={i}
      icon={media}
      className={`border rounded-full p-2 cursor-pointer ${
        i == 0 && "bg-blue-700 border-none"
      }`}
    />
  ));

  return (
    <footer className="relative overflow-hidden text-white bg-zinc-900">
      <img
        src={bottomBackground}
        alt="footer bottom background"
        className="absolute w-32 h-20 -rotate-90 bottom-10 right-2 lg:bottom-12 lg:right-12"
      />
      <img
        src={topBackground}
        alt="footer top background"
        className="absolute left-0 -top-5"
      />
      <div className="container grid grid-cols-1 py-24 mx-auto xl:grid-cols-3 xl:justify-items-end">
        <div className="text-center xl:text-start">
          <h2 className="text-3xl font-work-sans">Peboo</h2>
          <p className="w-2/3 mx-auto my-8 text-lg xl:mx-0 xl:text-xl">
            Our simple but powerful OKR+ platform turns great strategies into
            amazing results. And it&apos;s free.
          </p>
          <div className="flex justify-center gap-6 mb-12 text-xl xl:mb-0 xl:justify-start">
            {pebooSocialMedia}
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col items-center justify-center gap-12 md:gap-40 md:flex-row md:items-start xl:justify-start">
            {hyperLinks}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
