import Image from "next/image";
import Navbar from "./components/nav/Navbar";
import FindingRightFit from "./components/FindingRightFit";
import MarketPlace from "./components/MarketPlace";
import ExploreMore from "./components/ExploreMore";
import HowItWorked from "./components/HowItWorked";
import GoodHands from "./components/GoodHands";
import YourJourney from "./components/YourJourney";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main className="max-w-[1440px] w-full min-h-screen px-4 lg:px-0 pt-[65px] bg-white flex flex-col relative">
      <Navbar />
      <FindingRightFit />
      <MarketPlace />
      <ExploreMore />
      <HowItWorked />
      <GoodHands />
      <YourJourney />
      <Slider />
    </main>
  );
}
