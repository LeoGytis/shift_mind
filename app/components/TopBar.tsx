import Image from 'next/image';
import sectionframetop from '@/app/vectors/sectionframetop.svg';
import shiftmind from '@/app/vectors/shiftmind.svg';

const TopBar = () => {
	return (
		<>
			<div className="relative h-24 lg:h-4 bg-greenlight">
				<Image
					src={shiftmind}
					alt="shift_mind_logo"
					width={110}
					height={52}
					className="absolute top-8 left-1/2 -translate-x-1/2 w-[110px] h-[52px]"
				/>
			</div>
			<Image
				src={sectionframetop}
				alt="section_top_vector"
				layout="intrinsic"
				className="object-contain w-full -mt-1"
			/>
		</>
	);
};

export default TopBar;
