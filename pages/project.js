import Image from "next/image";
import Link from 'next/link';
import styles from "@/styles/Project.module.css";
import { useState } from "react";

// Components
import Header from "@/components/Header"
import NavBar from "@/components/NavBar";

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
          <p>
            Check out my latest projects and see what I've been working on!
          </p>
          <div className={styles.projectsContainer}>
            {
              data && data.map((d, index) => {
                return (
                  <Link href={`/${d.url}`} className={styles.projectsInfo}>
                    <Image          
                      src={d.image}
                      width={100}
                      height={100}
                      alt={d.name}
                    />
                    <p className={styles.projectName}>{d.name}</p>
                    <p className={styles.jobTitle}>{d.job}</p>
                    <p className={styles.projectDesc}>{d.description}</p>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </main>
    </>
  )
}