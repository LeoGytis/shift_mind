import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true, // Disable default image optimization
	},
	assetPrefix: '/shift_mind/',
	basePath: '/shift_mind/',
	output: 'export',
};

export default nextConfig;
