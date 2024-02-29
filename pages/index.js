import Image from "next/image";
import Link from 'next/link';
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

// Components
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Data
import { skills } from "@/data/skills";

export default function Home() {
  const [data, setData] = useState([...skills]);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isBrowser = () => typeof window !== 'undefined'; 

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
            <p className={styles.jobTitle}>web developer & ux-ui designer</p>
            <p className={styles.jobDescription}>
              I'm an open-minded and fast-learning web developer. I've designed 
              and created interactive web apps and pages also created realistic 
              drawings and Vector 3D artwork using Adobe Illustrator tools.
            </p>
          </div>
          <Image 
            src="/images/portfolio-image.png"
            width={500}
            height={600}
            alt="portfolio-image"
          />
        </div>
        <div className={styles.middleBackground} id="aboutMe">
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
                As a web developer and designer, my primary goal is to create digital 
                experiences that users find not only visually appealing but also intuitive 
                and engaging to interact with. This means I'm constantly working together 
                two distinct yet interrelated disciplines: coding and design. In the development 
                phase, I leverage my expertise in languages like JavaScript, React, and NextJS 
                to translate design concepts into functional websites and applications. But 
                it's not just about functionality; it's also about how users experience and 
                interact with the interface. That's where my role as a designer comes in, 
                blending technical expertise with creative vision. It's a constant balancing 
                act between code and design, logic, and creativity.
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
                    <Link href={d.url} target="_blank">
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
        <div className={styles.upBtnContainer}>
          <button id={styles.upBtn} className={`... scrollToTopButton ${isVisible ? 'visible' : ''}`} onClick={scrollToTop} >
            <i class="fa fa-arrow-up"></i>
          </button>
        </div>
        <Footer />
      </main>
    </>
  );
}
