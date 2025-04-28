import star from "@/app/vectors/star.svg";
import Image from "next/image";
import { FC } from "react";

interface TestimonialProps {
  image: string;
  name: string;
  location: string;
  description: string;
}

const testimonialData: TestimonialProps[] = [
  {
    image: "images/users/user01.png",
    name: "Samantha C., 38",
    location: "Kansas City, Missouri",
    description:
      "“Years of procrastination left my life in shambles. I knew that something needed to change.\n \nShiftMind helped me realize that all my life I'd been suffering from overwhelm anxiety and task aversion and helped me embrace my unique productivity style - Energy-Driven Achiever!”",
  },
  {
    image: "images/users/user02.png",
    name: "Julia W., 33",
    location: "Albuquerque, New Mexico",
    description:
      "“When I found ShiftMind, I was instantly hooked by its CBT-based daily lessons that helped me reframe my thoughts and overcome negative self-talk (my #1 procrastination trigger). \n \nPlus, since the program made me realize that I'm a Deadline-Driven Performer, I've revamped my diet, started exercising regularly, and my body has transformed!”",
  },
];

const SectionSixPeoplev: FC = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-10 text-center md:mb-20">People love our plan</h1>

      <div className="flex flex-col gap-5 md:flex-row">
        {testimonialData.map((item, index) => (
          <div
            key={index}
            className="!text-greendark shadow-rainbow flex flex-col gap-6 rounded-3xl bg-white p-6 md:w-1/2"
          >
            <div className="flex gap-6">
              <Image src={item.image} alt="icon" width={86} height={86} />
              <div className="flex flex-col gap-1">
                <span className="font-extrabold">{item.name}</span>
                <span className="text-sm">{item.location}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={star}
                      alt="star"
                      width={14}
                      height={12}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm whitespace-pre-line">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSixPeoplev;
