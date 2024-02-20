import Image from "next/image";
import Link from 'next/link';
import styles from "@/styles/NyumNyum.module.css";
import { useState } from "react";

// Components
import Header from "@/components/Header";
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer";

// Data
import { nyumNyumData } from "@/data/nyumnyum"; 

export default function Milchee() {
  const [ data, setData ] = useState(nyumNyumData);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <NavBar />
        <h1>Coming Soon</h1>
      </main>
    </>
  )
}