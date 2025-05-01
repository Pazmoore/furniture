import Image from "next/image";
import Hero from "@/components/home/hero/Hero";
import Partners from "@/components/home/partners/Partners";
import Featured from "@/components/home/featured/Featured";
import Recommendation from "@/components/home/recommendations/Recommendation";
import Beds from "@/components/home/Beds/Beds";
import Blog from "@/components/home/blog/Blog";
import Faqs from "../components/home/faqs/Faqs";
import LiveStore from "@/components/home/liveStore/LiveStore";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Partners />
        <Featured />
        <Recommendation />
        <Beds />
        <Blog />
        <Faqs />
        <LiveStore />
      </main>
    </>
  );
}
