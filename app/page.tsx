import TopBar from "./components/layout/TopBar";
import SectionChooseYourPlan from "./components/sections/section-choose-your-plan/SectionChooseYourPlan";
import SectionFive from "./components/sections/SectionFive";
import SectionFour from "./components/sections/SectionFour";
import SectionThree from "./components/sections/SectionThree";
import SectionYourPersonal from "./components/sections/SectionYourPersonal";

export default function Home() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <SectionFive />
      <SectionYourPersonal />
      <SectionChooseYourPlan />
      <SectionThree />
      <SectionFour />
      <SectionChooseYourPlan />
    </div>
  );
}
