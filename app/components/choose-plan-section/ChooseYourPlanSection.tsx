'use client';
import guarantee from '@/app/vectors/guarantee.svg';
import payment from '@/app/vectors/payment.svg';
import sectionframe from '@/app/vectors/sectionframe.svg';
import Image from 'next/image';
import {useState} from 'react';
import {dummyCardData} from './dummyCardData';
import CheckOutModal from '../checkout/CheckOutModal';
import PlanCard from './PlanCard';

const ChooseYourPlanSection = () => {
	const [selectedPlan, setSelectedPlan] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<section className="w-full py-1">
				<Image
					src={sectionframe}
					alt="section_top_vector"
					layout="intrinsic"
					className="object-contain w-full -mb-1"
				/>
				<div className="w-full bg-[#0C3F3D] text-white py-5 px-4">
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
						<article className="w-full lg:w-1/2 flex flex-col items-center text-center">
							<p className="text-sm mb-4">
								By selecting a payment method, you agree to the Terms & Conditions and Privacy Policy.
							</p>
							<button
								onClick={() => setIsModalOpen(true)}
								className="w-full lg:w-2/3 rounded-3xl background-gradient cursor-pointer py-6 mb-8"
							>
								GET MY PLAN
							</button>
							<p className="text-center text-xs mb-8">
								You are enrolling in 1 Month Plan subscription to
								<br />
								https://shiftmind.app/ service with the discount price $29.99. You agree that the plan
								you selected will automatically be extended at the full price for successive renewal
								periods and you will be charged $59.98 every 1 months until you cancel the subscription.
								Payments will be charged from the card you specified here. You can cancel your
								subscription by contacting our customer support team via email at hello@shiftmind.app.
								Terms of Service the charge will appear on your bill as “ShiftMind”.
							</p>
							<div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
								<div className="flex gap-4">
									<Image src={guarantee} alt="Logo" width={52} height={52} />
									<p className="max-w-[303px] text-start text-sm font-medium">
										<span className="text-xl font-extrabold uppercase whitespace-nowrap">
											RISK-FREE GUARANTEE
										</span>{' '}
										cancel at any time without being charged the full price
									</p>
								</div>
								<Image src={payment} alt="payment" layout="intrinsic" className="object-contain" />
							</div>
						</article>
					</div>
				</div>
				<div className="relative h-[180px]">
					<Image
						src={sectionframe}
						alt="section_bottom_vector"
						layout="intrinsic"
						className="object-cover w-full transform rotate-180 -mt-1"
					/>
				</div>
			</section>

			<CheckOutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</>
	);
};

export default ChooseYourPlanSection;
