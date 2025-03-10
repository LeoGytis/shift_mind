import React, {useState} from 'react';
import paypal from '@/public/vectors/paypal.svg';
import apple from '@/public/vectors/apple.svg';
import Image from 'next/image';

const PaymentForm = () => {
	return (
		<div className="">
			<div>
				<h3 className="text-lg font-semibold mb-2">Order Summary</h3>
				<div className="flex flex-col gap-2 border rounded-4xl p-4">
					<div
						className="flex justify-b
								etween pb-2 border-b"
					>
						<span>Monthly Plan</span>
						<span>$28.46</span>
					</div>
					<div className="flex justify-between pb-2 border-b text-pink">
						<span>Discount (50%)</span>
						<span>-$28.46</span>
					</div>
					<div className="flex justify-between pb-2 ">
						<span>Total</span>
						<span>$28.46</span>
					</div>
				</div>
			</div>
			<div>
				<h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
				<div className="flex gap-[11px]">
					<button className="w-1/2 flex justify-center items-center bg-[#FFC33A] rounded-3xl py-5">
						<Image src={paypal} alt="PayPal Icon" layout="intrinsic" className="object-contain" />
					</button>
					<button className="w-1/2 flex justify-center items-center bg-black rounded-3xl py-5">
						<Image src={apple} alt="PayPal Icon" layout="intrinsic" className="object-contain" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default PaymentForm;
