import {z} from 'zod';

const currentYear = new Date().getFullYear();

export const creditCardSchema = z.object({
	cardNumber: z.string().regex(/^\d{4} \d{4} \d{4} \d{4}$/, 'Invalid credit card number'),
	nameOnCard: z.string().min(1, 'Name on card is required').max(50, 'Name on card is too long'),
	expiryDate: z
		.string()
		.min(1, 'Expiry date is required')
		.regex(/^\d{2}\/\d{2}$/, 'Invalid expiry date')
		.refine((val) => {
			const [month, year] = val.split('/').map(Number);

			if (month < 1 || month > 12) {
				return false;
			}

			if (year < currentYear % 100) {
				return false;
			}

			if (year === currentYear % 100 && month < new Date().getMonth() + 1) {
				return false;
			}

			return true;
		}, 'Invalid expiry date'),
	cvv: z
		.string()
		.min(1, 'CCV number is required')
		.regex(/^\d{3}$/, 'Invalid CVV/CVC'),
});
