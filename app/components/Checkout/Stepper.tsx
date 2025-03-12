interface StepperProps {
	steps: {label: string; step: number}[];
	activeStep: number;
}

const Stepper: React.FC<StepperProps> = ({steps, activeStep}) => {
	const totalSteps = steps.length;
	const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

	return (
		<div className="before:transform-y-1/2 relative flex justify-between before:absolute before:left-0 before:top-[6px] before:h-[3px] before:w-full before:bg-grey-light mt-6 pb-8">
			{steps.map(({step, label}) => (
				<div className="relative z-10" key={step}>
					<div
						className={`size-[14px] flex items-center justify-center rounded-full border-2 text-electric bg-white transition-all delay-200 ease-in ${
							activeStep >= step ? 'border-electric' : 'border-grey-light'
						}`}
					>
						{activeStep > step ? (
							<span className="size-[14px] rounded-full bg-electric"></span>
						) : (
							<span className="size-[14px] rounded-full"></span>
						)}
					</div>
					<div className="absolute left-1/2 top-5 -translate-x-2/4">
						<span className="text-xs font-semibold text-greendark text-nowrap">{label}</span>
					</div>
				</div>
			))}
			<div
				className="absolute left-0 top-[6px] h-[3px] w-full bg-electric transition-all delay-200 ease-in"
				style={{width: width}}
			></div>
		</div>
	);
};

export default Stepper;
