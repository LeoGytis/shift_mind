import ellipse from '@/app/vectors/ellipse.svg';
import ellipseSelected from '@/app/vectors/ellipseSelected.svg';
import Image from 'next/image';
import React from 'react';

interface PlanCardProps {
	title: string;
	billingCycle: string;
	originalPrice: string;
	discountedPrice: string;
	mainPrice: string;
	dailyPrice: string;
	selected: boolean;
	topChoice?: boolean;
	onClick: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
	title,
	billingCycle,
	originalPrice,
	discountedPrice,
	mainPrice,
	dailyPrice,
	selected,
	topChoice = false,
	onClick,
}) => {
	return (
		<div
			className={`relative w-full md:w-1/2 lg:w-1/3 flex flex-col bg-bgblue rounded-3xl border-2 border-transparent  ${
				selected && 'border-blue active-shadow'
			}`}
			onClick={onClick}
		>
			<span
				className={`flex justify-center uppercase text-center text-white font-bold py-3 ${
					!topChoice && 'hidden'
				}`}
			>
				Top choice for beginners
			</span>
			<div
				className={`flex justify-between bg-bgligth rounded-3xl cursor-pointer text-greendark py-4 px-6 ${
					selected && 'bg-white'
				}`}
			>
				<div className="flex gap-4">
					<div className="mt-1">
						{selected ? (
							<Image src={ellipseSelected} alt="section_top_vector" width={20} height={20} />
						) : (
							<Image src={ellipse} alt="section_top_vector" width={20} height={20} />
						)}
					</div>
					<div className="flex flex-col justify-between gap-2">
						<span className="text-xl font-bold">{title}</span>
						<span className="text-xs">{billingCycle}</span>
						<div className="text-xs space-x-1">
							<span className="text-pink line-through">USD {originalPrice}</span>
							<span className="font-bold">USD {discountedPrice}</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2 items-end">
					<div>
						<span className="align-top text-md text-sm font-semibold">USD</span>
						<span className="text-3xl font-bold">{mainPrice}</span>
					</div>
					<span className="text-pink text-xs line-through">USD {dailyPrice}</span>
				</div>
			</div>
		</div>
	);
};

export default PlanCard;
