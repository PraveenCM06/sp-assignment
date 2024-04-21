import crclogo from "../assets/images/CRC Logo.png";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import earn_more_entries_button from "../assets/images/Frame 313.png";

function Footer() {
  const handleScroll = () => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  };
  return (
    <footer className="h-[33rem] md:h-[25rem] bg-gradient-to-r from-teal-900 to-teal-700">
      <div className="flex justify-between items-center mx-5 md:mx-32 pt-7 my-10">
        <div
          className="hover:cursor-pointer active:translate-y-1"
          onClick={handleScroll}
        >
          <img className="scale-75 md:scale-100" src={crclogo} alt="" />
        </div>
        <div className="flex gap-3 md:gap-6">
          <a href="https://www.linkedin.com" target="_blank">
            {" "}
            <FaLinkedin className="text-white scale-150 hover:cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram className="text-white scale-150 hover:cursor-pointer" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <RiTwitterXLine className="text-white scale-150 hover:cursor-pointer" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            {" "}
            <FaYoutube className="text-white scale-150 hover:cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook className="text-white scale-150 hover:cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="flex flex-row md:flex-col justify-between mx-4 md:mx-10 my-4">
        <div>
          <ul className="flex flex-col md:flex-row gap-3 md:gap-5 md:justify-center my-2 md:my-10">
            <Link className="font-[poppins] text-white font-light text-sm hover:bg-white hover:text-teal-900 rounded-xl p-2 md:p-3 hover:font-medium" to="#">
              <li>Membership</li>
            </Link>

            <Link className="font-[poppins] text-white font-light text-sm hover:bg-white hover:text-teal-900 rounded-xl p-2 md:p-3 hover:font-medium" to="#">
              <li>Giveaways</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              className="font-[poppins] text-white font-light text-sm hover:bg-white hover:text-teal-900 rounded-xl p-2 md:p-3 hover:font-medium"
              to="#"
            >
              <li>Discounts</li>
            </Link>

            <Link
              spy={true}
              smooth={true}
              className="font-[poppins] text-white font-light text-sm hover:bg-white hover:text-teal-900 rounded-xl p-2 md:p-3 hover:font-medium"
              to="#"
            >
              <li>Winners</li>
            </Link>

            <Link
              spy={true}
              smooth={true}
              className="font-[poppins] text-white font-light text-sm hover:bg-white hover:text-teal-900 rounded-xl p-2 md:p-3 hover:font-medium"
              to="#"
            >
              <li>Donations</li>
            </Link>
    
            <Link
              spy={true}
              smooth={true}
              className="font-[poppins] text-white font-light text-sm hover:bg-white hover:text-teal-900 rounded-xl p-2 md:p-3 hover:font-medium"
              to="#"
            >
              <li>My Entries</li>
            </Link>

            <Link
              spy={true}
              smooth={true}
              className="font-[poppins] text-white font-light text-sm hover:bg-white hover:text-teal-900 rounded-xl p-2 md:p-3 hover:font-medium"
              to="#"
            >
              <li>My Profile</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:justify-center">
          <img className="scale-75 md:scale-100 hover:cursor-pointer" src={earn_more_entries_button} alt="" />
          <ul className="flex flex-col md:flex-row items-center gap-5">
            <Link className="font-[poppins] text-white font-light text-sm hover:bg-white hover:text-teal-900 rounded-xl p-2 md:p-3 hover:font-medium" to="#">
              <li>Help & Support</li>
            </Link>
            <Link className="font-[poppins] text-white font-light text-sm hover:bg-white hover:text-teal-900 rounded-xl p-2 md:p-3 hover:font-medium" to="#">
              <li>Customer Care</li>
            </Link>
            <Link className="font-[poppins] text-white font-light text-sm hover:bg-white hover:text-teal-900 rounded-xl p-2 md:p-3 hover:font-medium" to="#">
              <li>About CRC</li>
            </Link>
            <Link className="font-[poppins] text-white font-light text-sm hover:bg-white hover:text-teal-900 rounded-xl p-2 md:p-3 hover:font-medium" to="#">
              <li>Central animal records</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 md:mt-14 text-white font-[poppins] text-xs font-light"><p>Privacy Policy, Term and Conditions</p></div>
    </footer>
  );
}

export default Footer;
