import TopBar from "./components/layout/TopBar";
import SectionChooseYourPlan from "./components/sections/section-choose-your-plan/SectionChooseYourPlan";
import SectionFivePlan from "./components/sections/SectionFivePlan";
import SectionFourHero from "./components/sections/SectionFourHero";
import SectionSixPeople from "./components/sections/SectionSixPeople";
import SectionThreeCards from "./components/sections/SectionThreeCards";
import SectionYourPersonal from "./components/sections/SectionYourPersonal";

export default function Home() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <SectionYourPersonal />
      <SectionChooseYourPlan />
      <SectionThreeCards />
      <SectionFourHero />
      <SectionFivePlan />
      <SectionSixPeople />
      <SectionChooseYourPlan />
    </div>
  );
}
