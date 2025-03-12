import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.heroSection} style={{background: "url('/srh-team2.png') no-repeat center/cover"}}id="home">
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.mainText}>Bleed Orange, Support SRH!</h1>
        <p className={styles.subText}>Join the biggest community of Sunrisers Hyderabad fans!</p>
      </div>
    </div>
  );
}
