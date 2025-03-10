import React from 'react';

interface StepperProps {
	currentStep: number;
	steps: string[];
}

const Stepper: React.FC<StepperProps> = ({currentStep, steps}) => {
	return (
		<ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
			{steps.map((step, index) => {
				const isActive = index + 1 <= currentStep;
				const isCompleted = index + 1 < currentStep;
				const isLastStep = index === steps.length - 1;

				const stepClasses = isActive
					? 'bg-indigo-600 border-2 border-transparent text-white'
					: 'bg-gray-50 border-2 border-gray-200 text-indigo-600';

				return (
					<li
						key={index}
						className={`flex w-full relative ${isCompleted ? 'text-indigo-600' : 'text-gray-900'} 
                        ${
							!isLastStep
								? 'after:content-[""] after:w-full after:h-0.5 after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4'
								: ''
						}`}
					>
						<div className="block whitespace-nowrap z-10">
							<span
								className={`w-6 h-6 ${stepClasses} rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10`}
							>
								{index + 1}
							</span>
							{step}
						</div>
					</li>
				);
			})}
		</ol>
	);
};

export default Stepper;
