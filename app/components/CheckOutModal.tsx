import React, {useState} from 'react';
import StepperNew from './StepperNew';
import PaymentForm from './Checkout/PaymentForm';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose}) => {
	const [currentStep, setCurrentStep] = useState(1);
	const steps = ['Select plan', 'Payment', 'Receipt'];
	const stepsData = [
		{label: 'Select plan', step: 1},
		{label: 'Payment', step: 2},
		{label: 'Receipt', step: 3},
	];

	const handleSubmit = () => setCurrentStep(2);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white rounded-lg p-6 w-full max-w-4xl relative">
				<button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl">
					✕
				</button>

				{/* Stepper Component */}

				<div className="w-full mb-6">
					<StepperNew steps={stepsData} activeStep={2} />
				</div>

				{/* Step Content */}
				{currentStep === 1 && <PaymentForm />}
				{currentStep === 2 && (
					<div className="text-center">
						<h3 className="text-lg font-semibold mb-2">Step 3: Receipt</h3>
						<p className="text-gray-600 mb-4">Your payment was successful!</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Modal;
