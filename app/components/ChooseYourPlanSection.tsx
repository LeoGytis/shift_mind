'use client';
import guarantee from '@/public/vectors/guarantee.svg';
import payment from '@/public/vectors/payment.svg';
import sectionframe from '@/public/vectors/sectionframe.svg';
import Image from 'next/image';
import {useState} from 'react';
import PlanCard from './PlanCard';
import {dummyCardData} from './dummyCardData';
import CheckOutModal from './CheckOutModal';

const ChooseYourPlanSection = () => {
	const [selectedPlan, setSelectedPlan] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section className="w-full py-1">
			<div className="relative h-[180px]">
				<Image src={sectionframe} alt="section_top_vector" fill className="object-cover" />
			</div>
			<div className="w-full bg-[#0C3F3D] text-white py-5">
				<div className="container mx-auto flex flex-col items-center gap-13">
					<h1 className="text-center text-4xl font-bold">Choose Your Plan</h1>

					{/* ----- Plans Article ----- */}
					<article className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
						{dummyCardData.map((plan, index) => (
							<PlanCard
								key={index}
								{...plan}
								selected={selectedPlan === index}
								onClick={() => setSelectedPlan(index)}
							/>
						))}
					</article>

					{/* ----- Description Article ----- */}
					<article className="w-1/2 flex flex-col items-center text-center">
						<p className="text-sm mb-4">
							By selecting a payment method, you agree to the Terms & Conditions and Privacy Policy.
						</p>
						<button
							onClick={() => setIsModalOpen(true)}
							className="w-2/3 rounded-3xl background-gradient cursor-pointer py-6 mb-8"
						>
							GET MY PLAN
						</button>
						<p className="text-center text-xs mb-8">
							You are enrolling in 1 Month Plan subscription to
							<br />
							https://shiftmind.app/ service with the discount price $29.99. You agree that the plan you
							selected will automatically be extended at the full price for successive renewal periods and
							you will be charged $59.98 every 1 months until you cancel the subscription. Payments will
							be charged from the card you specified here. You can cancel your subscription by contacting
							our customer support team via email at hello@shiftmind.app. Terms of Service the charge will
							appear on your bill as “ShiftMind”.
						</p>
						<div className="flex justify-between gap-10">
							<div className="flex gap-4">
								<Image src={guarantee} alt="Logo" width={52} height={52} />
								<div className="text-justify">
									<span className="text-xl font-extrabold uppercase">RISK-FREE GUARANTEE</span>{' '}
									<span className="text-sm font-medium">
										cancel at any time without being charged the full price
									</span>
								</div>
							</div>
							<div className="relative w-2/3">
								<Image src={payment} alt="payment" fill className="object-contain" />
							</div>
						</div>
					</article>
				</div>
			</div>
			<div className="relative h-[180px]">
				<Image
					src={sectionframe}
					alt="section_bottom_vector"
					fill
					className="object-cover transform rotate-180"
				/>
			</div>

			{/* ----- Modal ----- */}
			<CheckOutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</section>
	);
};

export default ChooseYourPlanSection;
