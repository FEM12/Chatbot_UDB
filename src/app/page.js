import styles from "./page.module.css";
import Chat from "./components/chat";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Chat/>
      </main>
    </>
  );
}
