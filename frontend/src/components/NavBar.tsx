import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>SRH Fans Official</div>
      <ul className={styles.navLinks}>
        <li><a href="#" onClick={() => scrollToSection('home')}>Home</a></li>
        <li><a href="#" onClick={() => scrollToSection('about')}>About</a></li>
        <li><a href="#players">Players</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#matches">Matches</a></li>
      </ul>
      <button className={styles.joinButton}>Join Us</button>
    </nav>
  );
}
