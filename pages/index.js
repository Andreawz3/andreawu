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
        <div className={styles.container}>
          <div className={styles.topInfo}>
            <div>
              <div className={styles.greetingMsg}>
                <div style={{marginRight: "1em"}}>
                  <p className={styles.greetingText}>Hi There!</p>
                  <p  className={styles.name}>I’m Andrea Wu</p> 
                </div>
              </div>
              <p className={styles.jobTitle}>a 
              <span> Web Developer </span> 
              &  
              <span> UX-UI Designer</span>
              </p>
              <p className={styles.jobDescription}>
                I'm an open-minded and fast-learning web developer. I've designed 
                and created interactive web apps and pages also created realistic 
                drawings and Vector 3D artwork using Adobe Illustrator tools.
              </p>
            </div>
            <Image 
              src="/images/portfolio-image.png"
              width={400}
              height={500}
              alt="portfolio-image"
            />
          </div>
        </div>
      </main>
    </>
  );
}
