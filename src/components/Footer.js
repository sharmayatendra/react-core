import Logo from "../assets/img/logo.webp";
import Facebook from "../assets/img/facebook.webp";
import Instagram from "../assets/img/instagram.webp";
import Twitter from "../assets/img/twitter.webp";
import Pinterest from "../assets/img/pinterest.webp";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="bg-current p-4 flex flex-col flex-wrap mt-auto">
      <div className="bg-current p-4 flex flex-col flex-wrap justify-between sm:flex-row">
        <div className="text-white">
          Company
          <ul className="flex flex-col mt-4 gap-2">
            <li>team</li>
            <li>careers</li>
            <li>swiggy one</li>
          </ul>
        </div>
        <div className="text-white">
          Contact
          <ul className="flex flex-col mt-4 gap-2">
            <li>help & support</li>
            <li>partner with us</li>
            <li>ride with us </li>
          </ul>
        </div>
        <div className="text-white">
          Legal
          <ul className="flex flex-col mt-4 gap-2">
            <li>Terms & conditions</li>
            <li>Refund & cancellations</li>
            <li>privacy policy</li>
            <li>cookie policy </li>
          </ul>
        </div>
      </div>

      <div className="border border-gray-light"></div>

      <div className="flex flex-col flex-wrap justify-between items-center gap-2 mt-4 sm:flex-row text-white">
        <div className="w-20">
          <a href="/">
            <img
              src={Logo}
              alt="logo"
              className="w-full"
              data-testid="footer-logo"
            />
          </a>
        </div>

        {/* footer borderline */}
        <div>&copy; {currentYear}</div>

        <div className="flex gap-4 p-2">
          <div className="w-8 cursor-pointer hover:scale-110">
            <img src={Facebook} alt="fb-img" />
          </div>

          <div className="w-8 cursor-pointer hover:scale-110">
            <img src={Pinterest} alt="pinterest-img" />
          </div>

          <div className="w-8 cursor-pointer hover:scale-110">
            <img src={Instagram} alt="instagram-img" />
          </div>

          <div className="w-8 cursor-pointer hover:scale-110">
            <img src={Twitter} alt="twitter-img" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
