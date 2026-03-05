import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
        <h1>HOLA MUNDO</h1>
        <h2>Este sera mi comienzo con Next.JS</h2>
        <p> Shohei Ohtani es un beisbolista japonés considerado uno de los jugadores 
            más talentosos de la MLB. Destaca tanto como lanzador como bateador, 
            algo muy poco común en el béisbol profesional.
        </p>
        <h1>SHOHEI OHTANI</h1>

           <Image
            src="/Ohtani.jpg"
            alt="Shohei Ohtani"
            width={400}
            height={300}
            />
            <h2>Estadísticas Generales</h2>

           <table border="1" cellPadding="10">
             <thead>
                 <tr>
                  <th>Dato</th>
                  <th>Información</th>
                 </tr>
            </thead>
            <tbody>
                 <tr>
                   <td>Nombre</td>
                   <td>Shohei Ohtani</td>
                 </tr>
                 <tr>
                   <td>País</td>
                  <td>Japón</td>
                  </tr>
                 <tr>
                  <td>Equipo</td>
                  <td>Los Angeles Dodgers</td>
                 </tr>
                 <tr>
                  <td>Posición</td>
                  <td>Lanzador / Bateador</td>
                  </tr>
  </tbody>
</table>

       

        </main>
    </div>
  );
}
