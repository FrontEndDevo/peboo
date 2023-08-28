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
      <h3 className="font-work-sans text-3xl mb-4 border-indigo-600 border-b-4 p-2 lg:p-0 rounded-2xl lg:border-none">
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
    <footer className="text-white bg-zinc-900 relative overflow-hidden">
      <img
        src={bottomBackground}
        alt="footer bottom background"
        className="w-32 h-20 absolute bottom-10 right-2 lg:bottom-12 lg:right-12 -rotate-90"
      />
      <img
        src={topBackground}
        alt="footer top background"
        className="absolute -top-5 left-0"
      />
      <div className="container mx-auto py-24 grid grid-cols-1 xl:grid-cols-3 xl:justify-items-end">
        <div className="text-center xl:text-start">
          <h2 className="font-work-sans text-3xl">Peboo</h2>
          <p className="mx-auto xl:mx-0 my-8 text-lg xl:text-xl w-2/3">
            Our simple but powerful OKR+ platform turns great strategies into
            amazing results. And it&apos;s free.
          </p>
          <div className="mb-12 xl:mb-0 flex justify-center xl:justify-start gap-6 text-xl">
            {pebooSocialMedia}
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex gap-12 md:gap-40 flex-col md:flex-row items-center md:items-start justify-center xl:justify-start">
            {hyperLinks}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
