import Image from "next/image";
import Navbar from "@/components/Navbar";

import Profile from "@/components/Profile";
import GrowthStack from "@/components/GrowthStack";
import GozenDo from "@/components/GozenDo"
import AboutGozen from "@/components/AboutGozen";
import FilterCards from "@/components/FilterCards"
import FilteringCards from "@/components/FilteringCards";
import ZenSuite from "@/components/ZenSuite";
import Premium from "@/components/Premium";
import Tools from "@/components/Tools"
import Footer from "@/components/Footer"


export default function Home() {
  return (
   <>
   <Navbar/>

   <Profile/>
   <GrowthStack/>


   <GozenDo/>

   <AboutGozen/>
   {/* <FilterCards/> */}
   <FilteringCards/>
   <ZenSuite/>
   <Premium/>
   <Tools/>
   <Footer/>
   </>
  );
}
