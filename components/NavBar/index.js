import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router';
import styles from './NavBar.module.css'

export default function NavBar() {
  const router = useRouter();

  return (
    <main className={styles.container}>
      <Link href={'/'}>
        <Image
          className={styles.logo}
          src="/images/logo.png"
          width={200}
          height={200}
          alt="logo"
        />
      </Link>
      <div className={styles.navBarText}>
        <Link className={styles.linkText} href={'/project'}>
          {
            router.pathname == '/project' ? 
            <p style={{color: "var(--color-red-chestnut)"}}>Project</p> : <p>Project</p>
          }
        </Link>
        <Link className={styles.linkText} href={'/design'}>
          {
            router.pathname == '/design' ? 
            <p style={{color: "var(--color-red-chestnut)"}}>Design</p> : <p>Design</p>
          }
        </Link>
        <Link className={styles.linkText} href={"/#aboutMe"}>About me</Link>
      </div>
    </main>
  )
}