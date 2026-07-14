import styles from "./About.module.css";

const stats = [
  {
    number: "10+",
    label: "Anos de experiência",
  },
  {
    number: "5 mil+",
    label: "Procedimentos realizados",
  },
  {
    number: "98%",
    label: "Satisfação dos pacientes",
  },
];

export default function AboutStats() {
  return (
    <div className={styles.stats}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <h3>{stat.number}</h3>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}