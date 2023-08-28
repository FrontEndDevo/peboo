import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footerHyperLinks = [
  { topic: "Resources", links: ["Features", "Pricing", "Login", "Signup"] },
  {
    topic: "Legal",
    links: ["Terms of Use", "Privace Policy", "Legal Notice", "Feedback"],
  },
];

const socialMedia = [faFacebook, faInstagram, faTwitter, faLinkedin];
const Footer = () => {
  const hyperLinks = footerHyperLinks.map((obj, index) => (
    <div key={index}>
      <h3>{obj.topic}</h3>
      <ul>
        {obj.links.map((link) => (
          <li key={link}>
            <a href={`/${link.replace(" ", "-")}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  ));

  const pebooSocialMedia = socialMedia.map((media) => (
    <FontAwesomeIcon key={media} icon={media} />
  ));

  return (
    <footer>
      <div>
        <h2>Peboo</h2>
        <p>
          Our simple but powerful OKR+ platform turns great strategies into
          amazing results. And it&apos;s free.
        </p>
        <div>{pebooSocialMedia}</div>
      </div>
      <div>{hyperLinks}</div>
    </footer>
  );
};

export default Footer;
