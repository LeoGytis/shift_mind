"use client";
import sectionframegreen from "@/elements/vectors/sectionframe-green.svg";
import shiftmind from "@/elements/vectors/shiftmind.svg";
import { auth } from "@/utils/firebaseConfig";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const TopBar = () => {
  const [user] = useAuthState(auth);
  const [timeLeft, setTimeLeft] = useState({
    minutes: 15,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds === 0) {
          if (prevTime.minutes === 0) {
            clearInterval(timer);
            return { minutes: 0, seconds: 0 };
          }
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        }
        return { ...prevTime, seconds: prevTime.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="">
      <div className="bg-greendark flex items-center text-white">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-4">
          <h3 className="text-wrap !text-white">Time offer expires in</h3>
          <div className="flex items-center gap-1 md:gap-2">
            <p className="bg-greenlight flex flex-col items-center rounded-sm px-2 py-1 text-base font-semibold md:px-4 md:py-2 md:text-xl">
              {timeLeft.minutes.toString().padStart(2, "0")}{" "}
              <span className="text-xs font-normal md:text-sm">min</span>
            </p>
            <span>:</span>
            <p className="bg-greenlight flex flex-col items-center rounded-sm px-2 py-1 text-base font-semibold md:px-4 md:py-2 md:text-xl">
              {timeLeft.seconds.toString().padStart(2, "0")}{" "}
              <span className="text-xs font-normal md:text-sm">sec</span>
            </p>
          </div>
          <button className="background-rainbow flex cursor-pointer rounded-lg px-5 py-3 md:ml-4 md:px-10 md:py-6">
            GET&nbsp;<span className="hidden md:block">MY PLAN</span>
          </button>
        </div>
        <Link href="/sign-up">
          <button className="background-rainbow mr-6 flex cursor-pointer rounded-lg px-5 py-1 md:ml-4 md:px-5 md:py-2">
            Login
          </button>
        </Link>
        {user && (
          <button
            onClick={() => {
              signOut(auth);
              sessionStorage.removeItem("user");
            }}
            className="background-rainbow mr-6 flex cursor-pointer rounded-lg px-5 py-1 md:ml-4 md:px-5 md:py-2"
          >
            Log Out
          </button>
        )}
      </div>
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
