import { CheckCircle2 } from "lucide-react";
import styles from "./About.module.css";

const features = [
  "Atendimento humanizado",
  "Protocolos personalizados",
  "Tecnologia de última geração",
  "Resultados naturais",
];

export default function AboutFeatures() {
  return (
    <div className={styles.features}>
      {features.map((item) => (
        <div key={item} className={styles.feature}>
          <CheckCircle2 size={20} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}