import Image from "next/image";
import Link from 'next/link';
import styles from "@/styles/Project.module.css";
import { useState } from "react";

// Components
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer";

// Data
import { projects } from "@/data/projects";

export default function Project() {
  const [data, setData] =useState([...projects]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <NavBar />
        <div className={styles.subtitleContainer}>
          <Image 
            src="/images/leaf-left.png"
            width={70}
            height={70}
            alt="portfolio-image"
          />
          <h1 className={styles.subtitle}>PROJECTS</h1>
        </div>
        <div className={styles.projectsContainer}>
          {
            data && data.map((d, index) => {
              return (
                <div key={index}>
                  <Link href={`/${d.url}`} className={styles.projectName}>
                    {d.name}
                    <span style={{color: "var(--color-blue-cambridge)"}}> | </span>
                    <span className={styles.jobTitle}>{d.job}</span>
                  </Link>
                  <p className={styles.projectDesc}>{d.description}</p>
                  <Link href={`/${d.url}`}>
                    <Image 
                      className={styles.projectImage}                  
                      src={d.image}
                      width={450}
                      height={350}
                      alt={d.name}
                    />
                  </Link>
                </div>
              )
            })
          }
        </div>
        <Footer />
      </main>
    </>
  )
}