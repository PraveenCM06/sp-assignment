import hero from "../assets/images/hero-bg.jpg";
import earn from "../assets/images/earn.png";
import greencircle from "../assets/images/+4greencircle.png";
import golden3 from "../assets/images/+3goldcircle.png";
import golden2 from "../assets/images/+2goldcircle.png";
import golden1 from "../assets/images/+1goldcircle.png";
import milestone from "../assets/images/Milestone.png";
import lockcircle from "../assets/images/loclgoldcircle.png";
import bonus from "../assets/images/bonus.png";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";
import card6 from "../assets/images/card6.png";
import timeout from '../assets/images/timeout.png'
function HomePage() {
  const images =[card1, card2, card3, card4, card5, card6];
  return (
    <div>
      <main className="bg-gradient-to-b from-transparent via-transparent to-purple-300">
        <img
          src={hero}
          alt=""
          className="absolute top-0 left-0 -z-10 h-[45rem] w-full md:h-[33rem]"
        />
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center py-12 md:py-28 px-8 md:px-20">
          <div className="min-h-64 min-w-60 card backdrop-blur-sm bg-white/40 rounded-2xl border-2 border-slate-200 flex flex-col justify-center items-center py-4">
            <img
              src={earn}
              alt="earn-logo"
              className="-translate-y-16 -translate-x-28"
              fetchpriority="high"
            />
            <div className="h-32 w-48 bg-slate-200 rounded-lg flex flex-col items-center justify-center gap-2">
              <h1 className="font-[poppins] text-6xl font-semibold">6</h1>
              <h1 className="font-[poppins] text-xl font-light">
                Missions Available
              </h1>
            </div>
          </div>
          <div className="hero flex flex-col gap-3">
            <h1 className="text-3xl md:text-5xl font-semibold font-[poppins]">
              There are more free giveaway entries up for grabs!
            </h1>
            <p className="font-[poppins] text-sm md:text-xl">
              Complete the below missions and be rewarded with bonus entries for
              our free member giveaways! <br /> check back regularly for more
              tasks to complete!
            </p>
          </div>
        </div>
        <div className="hidden md:block md:-translate-y-28">
          <svg
            width="155"
            height="202"
            viewBox="0 0 175 242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="-15.54"
              cy="120.801"
              r="120.5"
              fill="#FEE7C7"
              fill-opacity="0.46"
            />
            <circle
              cx="72.3251"
              cy="103.671"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="104.96"
              cy="103.671"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="137.595"
              cy="103.671"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="170.228"
              cy="103.671"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="71.5488"
              cy="135.528"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="104.184"
              cy="135.528"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="136.818"
              cy="135.528"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="169.452"
              cy="135.528"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="70.7714"
              cy="167.386"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="103.406"
              cy="167.386"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="136.041"
              cy="167.386"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="168.675"
              cy="167.386"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="70.7714"
              cy="199.243"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="103.406"
              cy="199.243"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="136.041"
              cy="199.243"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
            <circle
              cx="168.675"
              cy="199.243"
              r="4.21379"
              fill="#8A8585"
              fill-opacity="0.26"
            />
          </svg>
        </div>
        <div className="-translate-y-7 md:-translate-y-56 h-52 md:h-80 flex items-end">
          <ul className="flex flex-row overflow-x-auto gap-6 md:gap-20 no-scrollbar h-full">
            <li className="min-h-full min-w-fit flex items-end ml-4">
              <img
                className="scale-50 md:scale-90"
                src={greencircle}
                alt="greencircle"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90"
                src={golden3}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90 -translate-y-4 md:-translate-y-4"
                src={golden2}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90 -translate-y-10 md:-translate-y-10"
                src={golden1}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90 -translate-y-16 md:-translate-y-16"
                src={golden1}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90 -translate-y-24 md:-translate-y-24"
                src={milestone}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90 -translate-y-16 md:-translate-y-16"
                src={lockcircle}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90 -translate-y-10 md:-translate-y-10"
                src={lockcircle}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90"
                src={lockcircle}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90"
                src={lockcircle}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90 -translate-y-10 md:-translate-y-10"
                src={lockcircle}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90 -translate-y-16 md:-translate-y-16"
                src={lockcircle}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90 -translate-y-24 md:-translate-y-24"
                src={lockcircle}
                alt="golden3"
              />
            </li>
            <li className="min-h-full min-w-fit flex items-end">
              <img
                className="scale-50 md:scale-90 -translate-y-16 md:-translate-y-16"
                src={lockcircle}
                alt="golden3"
              />
            </li>
          </ul>
        </div>
      </main>
      <section className="">
        <div className="flex justify-end mr-10 md:mr-24 -translate-y-1/2">
          <img
            className="animate-spin-slow relative h-24 md:h-40 lg:h-52"
            src={bonus}
            alt="bonus"
          />
        </div>
        <div className="flex overflow-x-scroll md:flex-wrap items-center md:justify-center no-scrollbar md:px-10 lg:px-32 -translate-y-14">
          {images.map((image)=>(
            <img className="scale-75 md:scale-90 -mx-6 md:mx-0" src={image} alt="card2" />
          ))}
        </div>
        <div className="bg-purple-200 flex flex-col md:flex-row justify-center items-center w-5/6 mx-auto rounded-xl my-3">
          <img className="" src={timeout} alt="timeout" />
          <h4 className="mx-10 w-[30rem]">Tasks related to social media posts and surveys can take up to 2 business days to appear as completed as these tasks need to be manually approved by the CRC team.</h4>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
