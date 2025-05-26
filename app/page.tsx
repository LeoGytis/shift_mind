"use client";
import { auth } from "@/utils/firebaseConfig";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import TopBar from "../components/layout/TopBar";
import SectionChooseYourPlan from "../components/sections/section-choose-your-plan/SectionChooseYourPlan";
import SectionEighthPromise from "../components/sections/SectionEighthPromise";
import SectionFivePlan from "../components/sections/SectionFivePlan";
import SectionFourHero from "../components/sections/SectionFourHero";
import SectionNineAsk from "../components/sections/SectionNineAsk";
import SectionSixPeople from "../components/sections/SectionSixPeople";
import SectionThreeCards from "../components/sections/SectionThreeCards";
import SectionYourPersonal from "../components/sections/SectionYourPersonal";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  useEffect(() => {
    if (!user && !userSession) {
      router.push("/sign-up");
    }
  }, [user, userSession, router]);

  return (
    <div className="flex flex-col">
      <TopBar />
      <SectionYourPersonal />
      <SectionChooseYourPlan />
      <SectionThreeCards />
      <SectionFourHero />
      <SectionFivePlan />
      <SectionSixPeople />
      <SectionChooseYourPlan />
      <SectionEighthPromise />
      <SectionNineAsk />
    </div>
  );
}
