import Link from "next/link";
import styles from "@/styles/index.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/home">inicio</Link>
        <Link href="/acerca">Acerca de jiji</Link>
      </nav>
    </div>
  );
};

export default Navigation;
