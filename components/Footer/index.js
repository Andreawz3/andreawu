import Image from "next/image";
import Link from 'next/link';
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div style={{display: "flex", gap: "30px"}}>
          <Image 
            src="/images/logo-bw.png"
            width={130}
            height={130}
            alt="logo-black-white"
          />
          <div>
            <div className={styles.contactInfo}>
              <p>Andrea Wu</p>
              <p>Vancouver, BC</p>
              <p>andrea_wzh@hotmail.com</p>
            </div>
            <div className={styles.socialLogos}>
              <Link  className={styles.githubLogo} href={"https://github.com/Andreawz3"} target="_blank">
                <i class="fa fa-github"></i>
              </Link>
              <Link className={styles.linkedinLogo} href={"https://www.linkedin.com/in/andreawzh/"} target="_blank">
                <i class="fa fa-linkedin-square"></i>
              </Link>
            </div>
          </div>
        </div>
        <p className={styles.copyrightText}>Copyright © Andrea Wu 2024</p>
      </div>
      <div>
        <Image 
          className={styles.leftLeaf}
          src='/images/leaf-left.png'
          width={150}
          height={150}
          alt="linkedin-logo"
        />
        <Image 
          className={styles.rightLeaf}
          src='/images/leaf-right.png'
          width={150}
          height={150}
          alt="linkedin-logo"
        />
      </div>
    </footer>
  )
}