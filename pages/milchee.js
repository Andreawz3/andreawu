import Image from "next/image";
import Link from 'next/link';
import styles from "@/styles/Milchee.module.css";
import { useState } from "react";

// Components
import Header from "@/components/Header";
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer";


export default function Milchee() {
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
            <h1 className={styles.title}>Milchee</h1>
          </div>
          <p className={styles.description}>
            Crafted with the playful imagination of Illustrator, the can design 
            for the strawberry, banana, and chocolate milky drink for kids is 
            a delightful fusion of vibrant colours and whimsical elements. Each 
            flavour is represented by its distinct visual mascot, with strawberries, 
            bananas, and chocolate swirls dancing across the can's surface.
          </p>
          <div className={styles.imagesDisplay}>
            <Image 
              src="/images/milchee/can05.jpg"
              width={1000}
              height={667}
              alt="magazine-cover"
            />
            <Image 
              src="/images/milchee/can02.jpg"
              width={1000}
              height={667}
              alt="magazine-cover"
            />
            <div style={{display: "flex", gap: "50px"}}>
              <Image 
                src="/images/milchee/can04.jpg"
                width={555}
                height={370}
                alt="magazine-cover"
              />
                <Image 
                src="/images/milchee/can03.jpg"
                width={555}
                height={370}
                alt="magazine-cover"
              />
            </div>
            <Image 
              src="/images/milchee/can06.jpg"
              width={1000}
              height={667}
              alt="magazine-cover"
            />
            <Image 
              src="/images/milchee/can07.jpg"
              width={1000}
              height={667}
              alt="magazine-cover"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}