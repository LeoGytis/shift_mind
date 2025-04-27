import SectionChooseYourPlan from "./components/sections/section-choose-your-plan/SectionChooseYourPlan";
import SectionFour from "./components/sections/SectionFour";
import SectionThree from "./components/sections/SectionThree";
import SectionYourPersonal from "./components/sections/SectionYourPersonal";
import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <SectionYourPersonal />
      <SectionChooseYourPlan />
      <SectionThree />
      <SectionFour />
      <SectionChooseYourPlan />
    </div>
  );
}
