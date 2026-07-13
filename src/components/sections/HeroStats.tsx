import styles from "./Hero.module.css";

const stats = [
  {
    number: "20 mil+",
    label: "Pacientes"
  },
  {
    number: "10+",
    label: "Anos"
  },
  {
    number: "98%",
    label: "Satisfação"
  }
];

export default function HeroStats() {
  return (
    <div className={styles.heroStats}>
      {stats.map((item) => (
        <div key={item.label}>
          <h3>{item.number}</h3>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}