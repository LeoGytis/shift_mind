interface StepperNewProps {
	steps: {label: string; step: number}[];
	activeStep: number;
}

const StepperNew: React.FC<StepperNewProps> = ({steps, activeStep = 2}) => {
	const totalSteps = steps.length;

	const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

	return (
		<div className="mx-auto w-full max-w-2xl px-4 pb-10">
			<div className="before:transform-y-1/2 relative mt-14 flex justify-between before:absolute before:left-0 before:top-1/2 before:h-1 before:w-full before:bg-slate-200">
				{steps.map(({step, label}) => (
					<div className="relative z-10" key={step}>
						<div
							className={`flex size-[14px] items-center justify-center rounded-full border-2 text-electric bg-white transition-all delay-200 ease-in ${
								activeStep >= step ? 'border-electric bg-red-500' : ''
							}`}
						>
							{activeStep > step ? (
								<span className="size-[14px] rounded-full bg-electric"></span>
							) : (
								<span className="size-[14px] rounded border-2"></span>
							)}
						</div>
						<div className="absolute left-1/2 top-10 -translate-x-2/4 -translate-y-2/4">
							<span className="text-xs font-semibold text-greendark text-nowrap">{label}</span>
						</div>
					</div>
				))}
				<div
					className="transform-y-1/2 absolute left-0 top-1/2 h-1 w-full bg-electric transition-all delay-200 ease-in"
					style={{width: width}}
				></div>
			</div>
		</div>
	);
};

export default StepperNew;
