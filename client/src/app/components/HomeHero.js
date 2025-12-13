import styles from "./css/homehero.module.css";
import Image from "next/image";
import Link from "next/link";


export default function Home(){
    return(
        <section id="home">
        <div className={styles.home_container}>

          <div className={styles.home_left}>
            <div className={styles.kicker}>We build software that works</div>

            <h1>
              Full-Stack engineering &{" "}
              <span className="em">AI solutions</span> for ambitious teams
            </h1>

            <p>
              Teclury partners with startups and businesses to deliver
              production-grade web and mobile applications, cloud platforms, and
              practical AI integrations. We start with a fast MVP and evolve
              validated pilots into productized solutions.
            </p>

            <div className={styles.hbutton_container2}>
               <Link href="/startproject">
              <button className={styles.login_button2}>Start a Project</button>
              </Link>
            </div>

            <div className={styles.pill}>
              Stack: React • Node • NextJS • Postgres • Docker • MongoDB • FastAPI
            </div>
          </div>

         
          <div className={styles.home_right}>
            <div className={styles.homeimg_container}>
              <Image
                src="/sideimg1.png"
                alt="Home Image"
                width={450}
                height={330}
                priority 
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className={styles.homeimg_small}>
              <Image
                src="/sideimg1.png"
                alt="Home Image"
                width={300}
                height={230}
              />
            </div>
          </div>

        </div>
      </section>
    )
}