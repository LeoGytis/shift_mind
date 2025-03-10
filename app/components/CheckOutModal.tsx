import React, {useState} from 'react';
import StepperNew from './StepperNew';
import PaymentForm from './Checkout/PaymentForm';
import union from '@/public/vectors/union.svg';
import Image from 'next/image';

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
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50">
			<div className="relative w-full max-w-[600px] bg-white border border-greenlight rounded-3xl p-6 overflow-y-auto">
				<button onClick={onClose} className="absolute top-6 right-6 cursor-pointer">
					<Image src={union} alt="close_icon" layout="intrinsic" className="object-contain" />
				</button>

				{/* Stepper Component */}

				<div className="px-14 mb-16">
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
