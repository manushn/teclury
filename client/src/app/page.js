import Image from "next/image";
import styles from "./home.module.css";

import Header from "./components/Header";
import HomeHero from "./components/HomeHero";
import Services from "./components/Services";
import Aisession from "./components/Aisession";
import ProcessProducts from "./components/processProducs";
import Footer from "./components/Footer";
import Chatcomponent from "./components/Chatcomponent"
export default function Home() {
  return (
    <main className={styles.containers}>
      
      <Header />
      <Chatcomponent/>
      <HomeHero />
      <Services />
      <Aisession/>
      <ProcessProducts/>
      <Footer/>


      


      

    


    </main>
  );
}
