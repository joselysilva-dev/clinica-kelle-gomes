import { Eye } from "lucide-react";
import styles from "./GalleryItem.module.css";
import type { GalleryItemData } from "./types";

interface GalleryItemProps {
  item: GalleryItemData;
  onClick: () => void;
}

export function GalleryItem({
  item,
  onClick,
}: GalleryItemProps) {
  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.cover}
        onClick={onClick}
        aria-label={`Ver antes e depois de ${item.title}`}
      >
        <img
          src={item.cover}
          alt={item.title}
          className={styles.image}
          loading="lazy"
        />

        <div className={styles.overlay}>
          <Eye size={20} />
          <span>Ver resultado</span>
        </div>
      </button>

      <div className={styles.content}>
        <span className={styles.category}>
          {item.category}
        </span>

        <h3 className={styles.title}>
          {item.title}
        </h3>

        <p className={styles.description}>
          {item.description}
        </p>

        <button
          type="button"
          className={styles.button}
          onClick={onClick}
        >
          <Eye size={18} />
          Ver Antes e Depois
        </button>
      </div>
    </article>
  );
}