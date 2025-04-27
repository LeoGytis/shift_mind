import sectionframegreen from "@/app/vectors/sectionframe-green.svg";
import shiftmind from "@/app/vectors/shiftmind.svg";
import Image from "next/image";

const TopBar = () => {
  return (
    <nav className="">
      <div className="bg-greenlight relative h-24 lg:h-4">
        <Image
          src={shiftmind}
          alt="shift_mind_logo"
          width={110}
          height={52}
          className="absolute top-8 left-1/2 h-[52px] w-[110px] -translate-x-1/2"
        />
      </div>
      <Image
        src={sectionframegreen}
        alt="section_top_vector"
        layout="intrinsic"
        className="-mt-1 w-full object-contain"
      />
    </nav>
  );
};

export default TopBar;
