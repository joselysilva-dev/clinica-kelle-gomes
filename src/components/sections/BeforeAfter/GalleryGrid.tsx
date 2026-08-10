import {GalleryItem} from "./GalleryItem";import type{GalleryItemData}from "./types";import styles from "./GalleryGrid.module.css";
export function GalleryGrid({items,onSelect}:{items:GalleryItemData[];onSelect:(item:GalleryItemData)=>void}){return <div className={styles.grid}>{items.map(item=><GalleryItem key={item.id} item={item} onClick={()=>onSelect(item)}/>)}</div>}
