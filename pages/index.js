import Image from "next/image";
import Link from 'next/link';
import styles from "@/styles/Home.module.css";
import { useState } from "react";

// Components
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Data
import { skills } from "@/data/skills";

export default function Home() {
  const [data, setData] = useState([...skills]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <NavBar />
        <div className={styles.topInfo}>
          <div>
            <div className={styles.greetingMsg}>
              <div style={{marginRight: "1em"}}>
                <p className={styles.greetingText}>Hi There!</p>
                <p 
                  className={styles.greetingText} 
                  style={{borderBottom: "5px solid var(--color-blue-cambridge)"}}
                  >
                    I’M ANDREA
                </p> 
              </div>
              <Image 
                src="/images/leaf-right.png"
                width={120}
                height={135}
                alt="leaf"
              />
            </div>
            <p className={styles.jobTitle}>web developer & uxui designer</p>
            <p className={styles.jobDescription}>
              I'm an open-minded and fast-learning web developer. I've designed 
              and created interactive web apps and pages also created realistic 
              drawings and Vector 3D artwork using Adobe Illustrator tools
            </p>
          </div>
          <Image 
            src="/images/portfolio-image.png"
            width={500}
            height={600}
            alt="portfolio-image"
          />
        </div>
        <div className={styles.middleBackground}>
          <div className={styles.middleContent}>
            <Image 
              src="/images/laptop-image.png"
              width={500}
              height={600}
              alt="portfolio-image"
            />
            <div>
              <div className={styles.subtitleContainer}>
                <Image 
                  src="/images/leaf-left.png"
                  width={70}
                  height={70}
                  alt="portfolio-image"
                />
                <p className={styles.subtitle}>WHAT I DO</p>
              </div>
              <p className={styles.middleDescription}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, 
                making it over 2000 years old. Richard McClintock, a Latin professor 
                at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                the cites of the word in classical literature
              </p>
            </div>
          </div>
        </div>
        <div className={styles.lastSection}>
          <div className={styles.subtitleContainer}>
            <Image 
              src="/images/leaf-left.png"
              width={70}
              height={70}
              alt="portfolio-image"
            />
            <p className={styles.subtitle}>TECHNICAL SKILLS</p>
          </div>
          <div className={styles.skillsContainer}>
            {
              data && data.map((d, index) => {
                return (
                  <div key={index} className={styles.skillLink}>
                    <Link href={d.url}>
                      <Image 
                        className={styles.skillImage}
                        src={d.image}
                        width={100}
                        height={100}
                        alt={d.name}
                      />
                      <span className={styles.tooltiptext}>{d.name}</span>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
