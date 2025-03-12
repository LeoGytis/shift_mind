import React, {useState} from 'react';
import union from '@/app/vectors/union.svg';
import Image from 'next/image';
import PaymentForm from './PaymentForm';
import Stepper from './Stepper';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const CheckOutModal: React.FC<ModalProps> = ({isOpen, onClose}) => {
	const [currentStep, setCurrentStep] = useState(2);
	const steps = [
		{label: 'Select plan', step: 1},
		{label: 'Payment', step: 2},
		{label: 'Receipt', step: 3},
	];

	if (!isOpen) return null;

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className="fixed inset-0 z-50 flex justify-center items-start lg:items-center bg-gray-800/50 overflow-y-auto py-8"
			onClick={handleBackdropClick}
		>
			<div className="relative max-w-[600px] bg-white border border-greenlight rounded-3xl p-6 pb-10">
				<button onClick={onClose} className="absolute top-6 right-6 cursor-pointer">
					<Image src={union} alt="close_icon" layout="intrinsic" className="object-contain" />
				</button>

				<div className="px-8 lg:px-14 mb-[43px]">
					<Stepper steps={steps} activeStep={currentStep} />
				</div>

				{currentStep === 2 && <PaymentForm onNextStep={() => setCurrentStep(3)} />}
				{currentStep === 3 && (
					<div className="min-w-[300px] text-center">
						<h3 className="text-lg font-semibold mb-2">Step 3: Receipt</h3>
						<p className="text-gray-600 mb-4">Your payment was successful!</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default CheckOutModal;
