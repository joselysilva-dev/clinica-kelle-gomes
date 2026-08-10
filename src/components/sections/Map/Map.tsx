import{MapPin}from"lucide-react";import styles from"./Map.module.css";// TODO: adicionar embed oficial após confirmação do endereço.
export function Map(){return <section className={styles.map} aria-labelledby="map-title"><div><MapPin/><h2 id="map-title">Localização</h2><p>O mapa será disponibilizado após a confirmação do endereço oficial da clínica.</p></div></section>}
