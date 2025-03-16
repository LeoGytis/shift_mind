import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
	images: {
		unoptimized: true,
	},
	output: 'export',
	distDir: 'out',
	basePath: '/shift_mind',
};

export default nextConfig;
