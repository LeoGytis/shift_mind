import sectionframerainbow from "@/app/vectors/sectionframe-rainbow.svg";
import Image from "next/image";
import { FC } from "react";

const SectionEighthPromise: FC = () => {
  return (
    <section className="relative px-6 pb-10 md:pb-36">
      <section className="border-rainbow relative mx-auto my-20 max-w-5xl rounded-[40px] bg-white px-6 py-10 md:px-13">
        <h1 className="mb-6 text-center">Our promise</h1>
        <div className="flex flex-col gap-5">
          <div className="mx-auto max-w-2xl space-y-5 pb-16 text-lg text-gray-800 md:pb-28">
            <p>
              &quot;We know how you feel. You&apos;re constantly fighting
              procrastination, and{" "}
              <strong>it seems like there&apos;s no way to win.</strong>{" "}
              Sometimes you see a glimmer of hope, only to{" "}
              <strong>fall back into the same old patterns.</strong>&quot;
            </p>
            <p>
              At first you think that missing a deadline or an overdue bill is
              the worst that could happen. But then you realize that those are
              just the beginning.
            </p>
            <p>
              <strong>
                Unsuccessful relationships, unrealized aspirations, and poor
                mental wellbeing
              </strong>{" "}
              that seems to be spiraling out of control – these are the real
              consequences of procrastination.
            </p>
            <p>
              Having helped thousands of procrastinators we&apos;ve learned that
              the procrastinator&apos;s problems run deep and overcoming
              procrastination is not merely just a matter of &quot;getting your
              act together&quot; and &quot;sticking to it&quot;.
            </p>
            <p>
              <strong>
                There&apos;s a reason why you procrastinate, and understanding
                that reason is the key to success.
              </strong>
            </p>
            <p>
              That&apos;s why there&apos;s no one-size-fits-all solution to
              procrastination. You need to find the right strategy for you – and
              that&apos;s where we come in.
            </p>
            <p>
              Together,{" "}
              <strong>
                we&apos;ll help you find the root cause of your procrastination
              </strong>{" "}
              and design a personalized plan to overcome it based on the latest
              psychological research.
            </p>
            <p>
              We have helped countless people to feel more in control, more
              productive, and more confident and we know we can do the same for
              you!
            </p>
          </div>
          <Image
            src={sectionframerainbow}
            alt="section_top_vector"
            layout="intrinsic"
            className="absolute right-0 bottom-40 left-0 -mt-1 w-full object-contain"
          />
          <div className="mx-auto">
            <div className="flex items-center gap-6">
              <Image
                src="images/users/user03.png"
                alt="COT_TIMOTHY"
                width={110}
                height={110}
              />
              <div className="flex flex-col gap-1">
                <span className="font-extrabold">Timothy Decker</span>
                <span className="text-sm">
                  Head of Science and
                  <br /> Research at{" "}
                  <strong className="text-greenlight">ShiftMind</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SectionEighthPromise;
