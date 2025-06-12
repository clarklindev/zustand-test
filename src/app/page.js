"use client";

import styles from "./page.module.css";
import { useStore } from "@/store/store";

export default function Home() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{bears} bears around here...</h1>
        <button onClick={increasePopulation}>one up</button>
        <p>{}</p>
      </main>
    </div>
  );
}
