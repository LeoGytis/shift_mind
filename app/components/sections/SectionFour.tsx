"use client";
import sectionframegreen from "@/app/vectors/sectionframe-green.svg";
import woman from "@/app/vectors/woman.svg";
import Image from "next/image";

const SectionFour = () => {
  return (
    <section className="bg-greenlight_ mb-96 w-full py-1">
      <Image
        src={sectionframegreen}
        alt="section_htop_vector"
        layout="intrinsic"
        className="-mt-1 w-full rotate-180 object-contain"
      />
      <Image
        src={woman}
        alt="section_htop_vector"
        width={763}
        height={1066}
        className="absolute top-70 z-10 w-1/2 object-cover"
      />
      <div className="ml-auto flex w-1/2 flex-1 flex-col justify-center gap-5 border border-red-500 py-5 text-white">
        <div>
          <h1>87%</h1>
          <p>
            of our users reported experiencing long-term improvements in
            managing their procrastination symptoms
          </p>
        </div>
        <div>
          <h1>94%</h1>
          <p>of users reported a more balanced and positive mental state</p>
        </div>
        <div>
          <h1>89%</h1>
          <p>
            of users successfully aligned their behaviors and attitudes more
            closely with the qualities they admire in others
          </p>
        </div>
      </div>

      <div className="relative h-[180px]">
        <Image
          src={sectionframegreen}
          alt="section_htop_vector"
          layout="intrinsic"
          className="-mt-1 w-full object-contain"
        />
      </div>
    </section>
  );
};

export default SectionFour;
