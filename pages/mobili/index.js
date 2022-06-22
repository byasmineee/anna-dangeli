import Link from "next/link"
import Head from 'next/head'
import { FURNITURES } from "../../shared/furnitures"

export default function Mobili() {

  function focusImage (e) {
    window.scrollTo({top: e.target.offsetTop, left: 0, behavior: 'smooth'});
  }

  return (
    <>
      <Head>
        <title>Elementi d&apos;arredo | Annamaria D&apos;angeli</title>
      </Head>
      <div>
        <h1 id="furniture-title">ELEMENTI D&#x27;ARREDO</h1>
        <div className="furniture-about">
          <p>La progettazione degli elementi d’arredo prevede soluzioni interamente pensate per essere inserite in uno specifico contesto. Grazie ad una lunghissima collaborazione con esperti artigiani si realizzano pezzi unici sia nel design che nei componenti.</p>
          <img src="images/furniture/about.jpg" alt=""/>
          <p>Il componente d’elezione di questi oggetti è il legno di vecchie botti di vino, costituite da legno massello solitamente di rovere o castagno. La scelta di questo materiale è quella di un legno di alta qualità, destinato a durare molto a lungo.
            Di questo antico legno, sorprendono le striature rosse dovute all’assorbimento del vino che colora il suo contenitore gradualmente, con il passare degli anni. Questo processo oltre a rilasciare una calda venatura, restituisce un materiale
            assolutamente stagionato e non gradito ai tarli. Selezionate e accostate una ad una, le assi di botte vengono sapientemente levigate manualmente; il risultato è che nessun assemblaggio sarà mai uguale ad un altro. Per la finitura del legno
            si utilizzano esclusivamente prodotti certificati a base di cera e olii di origine naturale, che donano una patina inconfondibile a questo nobile materiale.</p>
        </div>
        <div>
          <h2 className="title pt-3" style={{fontSize:'16vw'}}>REALIZZAZIONI</h2>

          {
            FURNITURES.map((furn, idx) => (
              <div className="proj_div" key={idx}>
                <div className="proj_img img_active" onClick={e=>focusImage(e)} style={{backgroundImage:'url(images/furniture/'+furn.slug+'/'+furn.thumb+')'}}></div>
                <Link href={"/mobili/"+furn.slug}>
                  <a className="proj_desc py-3" >
                    <p className="proj_name ml-3">{furn.name}</p>
                    <img className="proj_arrow mr-3" alt="" src="images/arrow-right.svg" />
                  </a>
                </Link>
              </div>
            ))
          }

        </div>
      </div>
    </>
  )
}