import Image from "next/image";
import styles from "@/styles/GaudiM.module.css";

// Components
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer";


export default function GaudiMagazine() {

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
            <h1 className={styles.title}>Gaudí’s Masterpieces</h1>
          </div>
          <p className={styles.description}>
            From the organic forms of the iconic Sagrada Família to the eccentric 
            curves of Casa Batlló and the intricate mosaic patterns of Park Güell, 
            each masterpiece is a testament to Gaudí's boundless imagination and profound 
            understanding of architectural principles. As readers immerse themselves in 
            the pages of the magazine, they are not merely spectators but explorers, 
            delving into the intricate details and profound symbolism imbued within each structure.
          </p>
          <div className={styles.imagesDisplay}>
            <Image 
              src="/images/gaudi/magazine01.jpg"
              width={1000}
              height={667}
              alt="magazine-cover"
            />
            <div style={{display: "flex", gap: "50px"}}>
              <Image 
                src="/images/gaudi/magazine05.jpg"
                width={555}
                height={370}
                alt="magazine-cover"
              />
                <Image 
                src="/images/gaudi/magazine04.jpg"
                width={555}
                height={370}
                alt="magazine-cover"
              />
            </div>
            <Image 
              src="/images/gaudi/magazine02.jpg"
              width={1000}
              height={667}
              alt="magazine-cover"
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}