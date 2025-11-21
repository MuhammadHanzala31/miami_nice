import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./sections/homepage/Banner";
import Speakers from "./sections/homepage/Speakers";
import Programs from "./sections/homepage/Programs";
import Where from "./sections/homepage/Where";
import Brands from "./sections/homepage/Brands";
import Exhibit from "./sections/homepage/Exhibit";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Speakers/>
    <Programs/>
    <Where/>
    <Brands/>
    <Exhibit/>
    </>
  );
}
