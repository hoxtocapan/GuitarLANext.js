import Image from "next/future/image";
import Link from "next/link";
import styles from '../styles/guitarras.module.css'

export default function Guitarra({ guitarra }) {
  const { descripcion, imagen, nombre, precio, url } = guitarra;
  const texto = descripcion[0].children[0].text;

  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Iamgen guitarra ${nombre}`}
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{texto}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
}
