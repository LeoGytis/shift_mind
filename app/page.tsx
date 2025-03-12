import ChooseYourPlanSection from './components/choose-plan-section/ChooseYourPlanSection';
import TopBar from './components/TopBar';

export default function Home() {
	return (
		<div className="flex flex-col">
			<TopBar />
			<ChooseYourPlanSection />
		</div>
	);
}
