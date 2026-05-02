import Banner from "@/components/homepage/Banner";
import Tips from "@/components/homepage/Tips";
import TopGenerations from "@/components/homepage/TopGenerations";



export default function Home() {
  return (
    <div className="">
      <main className="">
        <Banner></Banner>
        <TopGenerations></TopGenerations>
        <Tips></Tips>
      </main>
    </div>
  );
}
