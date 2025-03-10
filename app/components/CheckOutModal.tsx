import React, {useState} from 'react';
import Stepper from './Stepper'; // Assuming the Stepper component is in the same directory
import StepperNew from './StepperNew';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose}) => {
	const [currentStep, setCurrentStep] = useState(1); // Start at Step 2 (Payment)

	const steps = ['Select plan', 'Payment', 'Receipt'];
	const stepsData = [
		{label: 'Select plan', step: 1},
		{label: 'Payment', step: 2},
		{label: 'Receipt', step: 3},
	];

	const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
	const handleSubmit = () => setCurrentStep(2); // Move to Step 3 (Receipt)
	const resetModal = () => {
		setCurrentStep(1); // Reset to Step 2 (Payment)
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white rounded-lg p-6 w-full max-w-4xl relative">
				<button
					onClick={resetModal}
					className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
				>
					✕
				</button>

				{/* Stepper Component */}

				<div className="w-full mb-6">
					<StepperNew steps={stepsData} activeStep={2} />
				</div>
				{/* <div className="w-full mb-6">
					<Stepper currentStep={currentStep} steps={steps} />
				</div> */}

				{/* Step Content */}
				<div className="mb-6">
					{currentStep === 1 && (
						<div className="text-center">
							<h3 className="text-lg font-semibold mb-2">Step 2: Payment</h3>
							<p className="text-gray-600 mb-4">Enter your payment details.</p>
							<button className="px-4 py-2 bg-teal-600 text-white rounded-md" onClick={handleSubmit}>
								Submit Payment
							</button>
						</div>
					)}
					{currentStep === 2 && (
						<div className="text-center">
							<h3 className="text-lg font-semibold mb-2">Step 3: Receipt</h3>
							<p className="text-gray-600 mb-4">Your payment was successful!</p>
							<button className="px-4 py-2 bg-teal-600 text-white rounded-md" onClick={resetModal}>
								Close
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;
