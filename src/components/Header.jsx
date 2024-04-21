import { Link } from "react-router-dom";
import crclogo from "../assets/images/CRC Logo.png";
import earn_more_entries_button from "../assets/images/Frame 313.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
function Header() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  const content = (
    <>
      <div className="z-10 font-[poppins] absolute top-0 left-0 w-full h-dvh px-8 mx-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-300 via-teal-50 to-teal-50">
        <div className="mt-5">
          <img fetchpriority="high" src={crclogo} alt="logo" />
        </div>

        <div className="flex flex-col items-center mt-16 gap-6">
          <div className="">
            <ul className="flex flex-col items-center gap-4 mx-2 ">
              <Link
                className="rounded-xl font-semibold hover:bg-teal-700 hover:text-white p-3 transition duration-150 hover:duration-150 active:opacity-70"
                to="#"
              >
                <li>Membership</li>
              </Link>

              <Link
                className="rounded-xl font-semibold hover:bg-teal-700 hover:text-white p-3 transition duration-150 hover:duration-150 active:opacity-70"
                to="#"
              >
                <li>Giveaways</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                className="rounded-xl font-semibold hover:bg-teal-700 hover:text-white p-3 transition duration-150 hover:duration-150 active:opacity-70"
                to="#"
              >
                <li>Discounts</li>
              </Link>

              <Link
                spy={true}
                smooth={true}
                className="rounded-xl font-semibold hover:bg-teal-700 hover:text-white p-3 transition duration-150 hover:duration-150 active:opacity-70"
                to="#"
              >
                <li>Winners</li>
              </Link>

              <Link
                spy={true}
                smooth={true}
                className="rounded-xl font-semibold hover:bg-teal-700 hover:text-white p-3 transition duration-150 hover:duration-150 active:opacity-70"
                to="#"
              >
                <li>Donations</li>
              </Link>

              <Link
                spy={true}
                smooth={true}
                className="rounded-xl font-semibold hover:bg-teal-700 hover:text-white p-3 transition duration-150 hover:duration-150 active:opacity-70"
                to="#"
              >
                <li>My Entries</li>
              </Link>

              <Link
                spy={true}
                smooth={true}
                className="rounded-xl font-semibold hover:bg-teal-700 hover:text-white p-3 transition duration-150 hover:duration-150 active:opacity-70"
                to="#"
              >
                <li>My Profile</li>
              </Link>
            </ul>
          </div>
          <div>
            <img src={earn_more_entries_button} alt="btn" />
          </div>
          <div >
            <Link className="rounded-xl font-semibold hover:bg-red-700 hover:text-white p-3 transition duration-150 hover:duration-150 active:opacity-70" to="#">Logout</Link>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <header className="bg-white h-20 flex  items-center shadow-lg">
      <nav className="flex items-center w-full justify-around px-2 md:px-8 lg:px-14 mx-auto">
        <div>
          <img fetchpriority="high" src={crclogo} alt="logo" />
        </div>
        <div className="">
          <ul className="flex items-center gap-8 mx-2">
            <li>
              <Link
                className="hidden lg:inline font-semibold hover:text-slate-600"
                to="#"
              >
                Membership
              </Link>
            </li>
            <li>
              <Link
                className="hidden lg:inline font-semibold hover:text-slate-600"
                to="#"
              >
                Giveaways
              </Link>
            </li>
            <li>
              <Link
                className="hidden lg:inline font-semibold hover:text-slate-600"
                to="#"
              >
                Discounts
              </Link>
            </li>
            <li>
              <Link
                className="hidden lg:inline font-semibold hover:text-slate-600"
                to="#"
              >
                Winners
              </Link>
            </li>
            <li>
              <Link
                className="hidden lg:inline font-semibold hover:text-slate-600"
                to="#"
              >
                Donations
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <img className="hidden lg:inline" src={earn_more_entries_button} alt="btn" />
        
        <div>{open && content}</div>
        <button className="block transition z-20 duration-300" onClick={handleClick}>
          {open ? (
            <IoCloseSharp className="scale-150" />
          ) : (
            <GiHamburgerMenu className="scale-150" />
          )}
        </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
