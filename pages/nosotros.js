import Image from "next/future/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";


export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, guitarLA, tienda de musica"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
          <div>
            <p>Nunc ornare neque magna, nec mollis risus tincidunt nec. Pellentesque vulputate, justo sit amet sagittis molestie, nulla velit lobortis erat, varius mattis erat turpis ac turpis. Ut feugiat fringilla massa eget euismod. Donec non dui blandit, aliquet elit non, gravida tortor. Suspendisse tempor ullamcorper nisl, vel sagittis leo pretium id. Pellentesque ornare auctor felis, ac placerat leo pharetra at. Phasellus mattis et mi non congue.</p>
            <p>Vivamus in justo scelerisque, tincidunt leo in, eleifend lorem. Pellentesque mi purus, pharetra quis lobortis vitae, sodales et orci. In hac habitasse platea dictumst. Nam sagittis eget diam pellentesque efficitur. Ut turpis neque, ullamcorper a accumsan quis, ullamcorper eget nibh. Mauris risus nunc, fermentum at neque vitae, porta varius orci.</p>
          </div>
        </div>

      </main>
    </Layout>
  );
}
