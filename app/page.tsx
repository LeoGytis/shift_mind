import CardsSection from "./components/CardsSection";
import ChooseYourPlanSection from "./components/choose-plan-section/ChooseYourPlanSection";
import TopBar from "./components/TopBar";
import YourPersonalSection from "./components/YourPersonalSection";
export default function Home() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <YourPersonalSection />
      <ChooseYourPlanSection />
      <CardsSection />
    </div>
  );
}
