import Image from "next/image";
import Link from 'next/link';
import styles from "@/styles/TinyPaws.module.css";
import { useState } from "react";

// Components
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer";

// Data
import { tinyPawsData } from "@/data/tinyPawsData";

export default function Project() {
  const [ data, setData ] = useState(tinyPawsData);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Image 
              src="/images/leaf-left.png"
              width={70}
              height={70}
              alt="portfolio-image"
            />
            <h1 className={styles.title}>TinyPaws</h1>
          </div>
          {
            data && data.about.map((d, index) => {
              return (
                <div key={index} style={{textAlign: "center"}}>
                  <p className={styles.projectDesc}>{d.info}</p>
                  <Link className={styles.projectLink} href={`${d.websiteLink}`}>Website</Link>
                </div>
              )
            })
          }
          <div className={styles.PromoContainer}>
            <Image 
              className={styles.promoBackground}
              src="/images/tinyPaws/background.png"
              width={1115}
              height={656}
              alt="tinyPaws-background"
            />
            <div className={styles.promoVideoContainer}>
              <Image 
                src="/images/tinyPaws/laptop-frame.png"
                width={835}
                height={500}
                alt="pixel6-frame"
              />
              <video className={styles.promoVideo} src="/videos/tinyPaws-video.mov" autoplay="autoplay" loop="loop" muted="muted"></video>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.subContainerTitle}>
            <Image 
              src="/images/leaf-left.png"
              width={70}
              height={70}
              alt="portfolio-image"
            />
            <h1 className={styles.title}>MAIN FEATURES</h1>
          </div>
          <div className={styles.featuresContainer}>
            {
              data && data.features.map((d, index) => {
                return (
                  <div key={index} className={styles.featureDesc}>
                    <Image 
                      src={d.image}
                      width={450}
                      height={325}
                      alt={d.title}  
                    />
                    <p className={styles.featureTitle}>{d.title}</p>
                    <p className={styles.featureDesc}>{d.description}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles.thirdContainer}>
          <div className={styles.subContainerTitle}>
            <Image 
              src="/images/leaf-left.png"
              width={70}
              height={70}
              alt="portfolio-image"
            />
            <h1 className={styles.title}>VALUES</h1>
          </div>
          <div  className={styles.valuesContainer}>
            {
              data && data.values.map((d, index) => {
                return (
                  <div key={index} className={styles.valuesInfoContainer} style={{marginBottom: "130px"}}>
                    <div className={styles.valuesTitleContainer}>
                      <Image 
                        src="/images/red-leaf.png"
                        width={70}
                        height={70}
                        alt="red-leaf"
                      />
                      <p className={styles.valuesTitle}>{d.title}</p>
                    </div>
                    <p className={styles.valuesDesc}>{d.description}</p>
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