import styles from "./index.module.css";

export default function IntroText() {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>heli balsara</h2>
      <p className={styles.description}>
        is a product designer aiming to create simple and innovative digital
        solutions through human-centric thinking
      </p>
      <div className={styles.roleContainer}>
        <h4 className={styles.currently}>currently</h4>
        <p className={styles.role}>a product design intern @ Housecall Pro</p>
      </div>
    </div>
  );
}
