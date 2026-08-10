import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import styles from "./GalleryModal.module.css";
import type { GalleryItemData } from "./types";

interface GalleryModalProps {
  item: GalleryItemData | null;
  open: boolean;
  onClose: () => void;
}

export function GalleryModal({
  item,
  open,
  onClose,
}: GalleryModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [open, onClose]);

  if (!open || !item) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          ref={closeRef}
          className={styles.close}
          onClick={onClose}
          aria-label="Fechar"
        >
          <X size={22} />
        </button>

        <span className={styles.category}>
          {item.category}
        </span>

        <h2
          id="gallery-title"
          className={styles.title}
        >
          {item.title}
        </h2>

        <p className={styles.description}>
          {item.description}
        </p>

        <div className={styles.compare}>
          <div className={styles.imageCard}>
            <span>Antes</span>

            <img
              src={item.before}
              alt={`${item.title} antes`}
              decoding="async"
            />
          </div>

          <div className={styles.imageCard}>
            <span>Depois</span>

            <img
              src={item.after}
              alt={`${item.title} depois`}
              decoding="async"
            />
          </div>
        </div>

        <div className={styles.footer}>
          <h4>Procedimentos realizados</h4>

          <div className={styles.tags}>
            {item.procedures.map((procedure) => (
              <span key={procedure}>
                {procedure}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
