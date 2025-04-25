import arrows from '@/app/vectors/arrows.svg';
import Image from 'next/image';
import {FC} from 'react';

interface CardProps {
	image: {
		src: string;
		alt: string;
	};
	colorCode: string;
	title: string;
	list: string[];
}

const Card: FC<CardProps> = ({image, colorCode, title, list}) => {
	return (
		<div className="mb-12 lg:p-0 hover:bg-white rounded-3xl card-shadow hover-card-shadow group transition-all duration-300 w-full md:w-[410px]">
			<div className="flex flex-col gap-6 w-full">
				<div className="h-full overflow-hidden rounded-t-3xl">
					<Image
						src={image.src}
						alt={image.alt}
						width={400}
						height={293}
						className="w-full h-[293px] object-cover hover:scale-110 ease-out duration-700 transform"
					/>
				</div>
				<div className="flex flex-col p-6">
					<h2
						style={{color: colorCode}}
						className="text-2xl font-bold mb-8"
					>
						{title}
					</h2>
					<ul className="space-y-5">
						{list.map((item, index) => (
							<li
								key={index}
								className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300"
							>
								<span
									style={{backgroundColor: colorCode}}
									className="w-2.5 h-2.5 rounded-full"
								></span>
								<span className="text-gray-700 text-lg">
									{item}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

const CardOne: CardProps = {
	image: {
		src: '/images/procrastination.jpg',
		alt: 'Procrastination Symptoms',
	},
	colorCode: '#ff4d8f',
	title: 'PROCRASTINATION SYMPTOMS:',
	list: [
		'Time management difficulties',
		'Poor organizational skills',
		'Difficulty focusing',
		'Acting without thinking',
		'Restlessness',
	],
};

const CardTwo: CardProps = {
	image: {
		src: '/images/your_goals.jpg',
		alt: 'Your Goals',
	},
	colorCode: '#5a91ff',
	title: 'YOUR GOAL:',
	list: [
		'Able to focus, minimal distraction',
		'Effective planning, punctuality',
		'Tidy spaces, structured routines',
		'Considerate actions, patience',
		'Calmness',
	],
};

const CardsSection: FC = () => {
	return (
		<section className="w-full py-16 px-4 md:px-8 bg-[#f8fafc]">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-16">
				<Card {...CardOne} />

				{/* Arrow Section */}
				<div className="flex md:flex-col items-center justify-center gap-3">
					<Image
						src={arrows}
						alt="arrows"
						width={50}
						height={50}
						className="w-full h-[293px] object-cover hover:scale-110 ease-out duration-700 transform"
					/>
				</div>

				<Card {...CardTwo} />
			</div>
		</section>
	);
};

export default CardsSection;
