import styles from "../styles/AboutUs.module.css";
import MaskGroup from "../assets/srh-fans.jpg"; // Ensure correct file extension

export default function AboutUs() {
  return (
    <div className={styles.AboutUs_12_42} id="about">
      <span className={styles.WhoWeAre_8_34}>Who We Are?</span>
      <div className={styles.imageContainer}>
        <img src={MaskGroup} alt="About Us" />
        <div className={styles.overlay}>
          <span className={styles.overlayText}>
          SRH Fans Official is the ultimate hub for Sunrisers Hyderabad supporters. We bring fans together to celebrate victories, discuss matches, and stay updated on all things SRH!
          </span>
        </div>
      </div>
    </div>
  );
}
