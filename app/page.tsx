import TopBar from "./components/layout/TopBar";
import SectionChooseYourPlan from "./components/sections/section-choose-your-plan/SectionChooseYourPlan";
import SectionFivePlan from "./components/sections/SectionFivePlan";
import SectionFour from "./components/sections/SectionFour";
import SectionSixPeople from "./components/sections/SectionSixPeople";
import SectionThree from "./components/sections/SectionThree";
import SectionYourPersonal from "./components/sections/SectionYourPersonal";

export default function Home() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <SectionYourPersonal />
      <SectionChooseYourPlan />
      <SectionThree />
      <SectionFour />
      <SectionFivePlan />
      <SectionSixPeople />
      <SectionChooseYourPlan />
    </div>
  );
}
