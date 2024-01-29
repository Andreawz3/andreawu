import styles from "@/styles/Design.module.css";

// Components
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"

export default function Project() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <NavBar />
        <h1>Design Page</h1>
      </main>
    </>
  )
}