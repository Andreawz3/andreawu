import styles from "@/styles/Design.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Components
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"

// Data
import { DesignData } from "@/data/designData"; 
import Footer from "@/components/Footer";

export default function Project() {
  const [data, setData] = useState(DesignData);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.subtitleContainer}>
            <Image 
              src="/images/leaf-left.png"
              width={70}
              height={70}
              alt="portfolio-image"
            />
            <h1 className={styles.subtitle}>MOTION GRAPHICS</h1>
          </div>
          <p style={{width: "760px", textAlign: "center", margincontainer: "30px"}}>
            Create an engaging beginner hiking tips video using After Effects, 
            featuring animated graphics and transitions to illustrate key points 
            such as packing essentials, trail safety, and navigation basics
          </p>
          <div className={styles.linksSubcontainer}>
            <p>Watch video</p>
            <Link className={styles.projectLink} href="https://youtu.be/WzCv9zlh8hM" target="_blank">YouTube</Link>
          </div>
        </div>
        <div className={styles.promoVideoContainer}>
          <Image 
            src="/images/tv-frame.png"
            width={835}
            height={695}
            alt="tv-frame"
          />
          <video className={styles.promoVideo} src="/videos/after-effect.mp4" autoplay="autoplay" loop="loop" muted="muted"></video>
        </div>
        <div className={styles.container}>
          <div className={styles.subtitleContainer}>
            <Image 
              src="/images/leaf-left.png"
              width={70}
              height={70}
              alt="portfolio-image"
            />
            <h1 className={styles.subtitle}>GRAPHICS DESIGN</h1>
          </div>
          <div className={styles.designContainer}>
            {
              data && data.map((d, i) => {
                return (
                  <div key={i} className={styles.designImage}>
                    <Image 
                      src={d.image}
                      width={525}
                      height={675}
                      alt={d.title}
                    />
                    <p className={styles.designTitle}>{d.title}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}