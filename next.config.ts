import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	distDir: 'out',
	basePath: '/shift_mind',
	// assetPrefix: '/shift_mind',
	assetPrefix: './',
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
