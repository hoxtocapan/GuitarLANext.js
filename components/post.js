import Image from "next/future/image"
import Link from "next/link"
import styles from '../styles/blog.module.css'
import { formatearFecha } from "../utils/helpers"

export default function Post({post}) {
    const {contenido, imagen, titulo, url, publishedAt} = post
    const texto = contenido[0].children[0].text;

  return (
    <article>
        <Image 
            src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${titulo}`} />
            
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{texto}</p>

                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>Leer Post</a>
                </Link>

            </div>
    </article>
  )
}
