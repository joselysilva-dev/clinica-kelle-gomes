import { useState } from "react";
import styles from "./Gallery.module.css";
import { GalleryGrid } from "./GalleryGrid";
import { GalleryModal } from "./GalleryModal";
import { galleryData } from "./gallery.data";
import type { GalleryItemData } from "./types";

export function Gallery() {
  const [selectedItem, setSelectedItem] =
    useState<GalleryItemData | null>(null);

  const handleOpen = (item: GalleryItemData) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className={styles.gallery}>
        <GalleryGrid
          items={galleryData}
          onSelect={handleOpen}
        />
      </div>

      <GalleryModal
        item={selectedItem}
        open={selectedItem !== null}
        onClose={handleClose}
      />
    </>
  );
}