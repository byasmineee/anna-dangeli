import Link from "next/link";
import Head from 'next/head'
import { useEffect, useState } from "react";
import { PROJECTS } from "../shared/projects";

export default function Home() {
  const [isLandscape, setIsLandscape] = useState(true)

  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      if (window.innerWidth < window.innerHeight) {
        setIsLandscape(false)
      } else if (window.innerWidth > window.innerHeight) {
        setIsLandscape(true)
      }
    })
  }, [])
  
  function toggleActive (e) {
    e.target.parentNode.classList.toggle('serv_active')
  }

  function focusImage (e) {
    window.scrollTo({top: e.target.offsetTop, left: 0, behavior: 'smooth'});
  }

  return (
    <>
    <Head>
      <title>Architetto | Annamaria D&apos;angeli</title>
    </Head>
    <div>
      <div id="home" className="d-flex flex-column justify-content-center">
        <div id="home-img"></div><span className="flex-2"></span>
        <div className="text-center px-4" id="title">
          <h1 className="col-12 w-100 p-0">Annamaria D&apos;Angeli</h1>
          <h2 className="col-12 w-100 p-0">Architetto</h2>
        </div>
        <div className="d-flex justify-content-center flex-2">
          <div className="align-self-end" id="arrow-container" onClick={()=>{window.scrollTo({top: document.querySelector("#about").offsetTop, left: 0, behavior: 'smooth'});}}>
            <img id="arrow" src="/images/arrow-down.svg" alt="" />
          </div>
        </div>
      </div>

      <div id="about">
        <div className="about_div container pt-5 pb-2">
          <p className="p-3 text-center">La casa non è solo un luogo fisico, ma riveste da sempre una molteplicità di significati, non è un semplice involucro ma uno spazio che rimanda a sensazioni ed emozioni, un luogo dove quasi sempre si desidera ritornare, se non letteralmente,
            almeno metaforicamente.
          </p>
          <div className="serv_div">
            <h2 className="serv_title" onClick={e=>toggleActive(e)}>OBIETTIVI</h2>
            <p className="serv_text text-center">Dopo la nostra pelle, la casa rappresenta un importante confine, un luogo che definisce un dentro e un fuori, uno spazio vitale in cui ci si sente al sicuro e contenuti. È il luogo da vivere da soli e al contempo aperto alla convivialità;
              un rifugio che diventa specchio ed espressione di sé, narrazione della propria storia. Ma costruire il proprio spazio significa anche intraprendere un investimento che richiede notevoli energie, economiche, temporali e affettive.
              Il mio lavoro consiste nell&apos;affiancare chi vuole intraprendere questo percorso e guidarlo nella realizzazione di uno spazio abitativo che risponda al meglio alle proprie specifiche esigenze.</p>
          </div>
          <div className="serv_div">
            <h2 className="serv_title" onClick={e=>toggleActive(e)}>UN PROGETTO A PROPRIA MISURA</h2>
            <div className="serv_text text-center">
              <blockquote className="text-center">
                <p>&quot;Non c’è nulla di nuovo tranne ciò che è stato dimenticato&quot;</p>
                <cite className="cite">-Rose Bertin (sarta di Maria Antonietta)</cite>
              </blockquote>
              Mi occupo soprattutto di ristrutturazioni edilizie e di restauro, seguendo sia la progettazione
              che la direzione lavori architettonica; spesso il mio lavoro si estende anche alla progettazione interna, dove ogni tipo di elemento di arredo è pensato e disegnato interamente su misura. L’approccio progettuale prevede che il
              cliente venga coinvolto in tutte le fasi del progetto. Verranno vagliate tutte le esigenze del committente, e attraverso un’analisi dettagliata delle richieste, si costruirà un progetto esclusivo, personalizzato, unico. Attraverso
              strumenti di rappresentazione e modellazione il cliente avrà la possibilità di seguire tutto il processo evolutivo della proposta progettuale, partecipando attivamente alla crescita del progetto . Il risultato, sempre in divenire,
              subirà inevitabilmente tutte le variazioni necessarie alla stesura condivisa del progetto definitivo.
            </div>
          </div>
          <div className="serv_div">
            <h2 className="serv_title" onClick={e=>toggleActive(e)}>RECUPERO E SOSTENIBILITA’</h2>
            <p className="serv_text text-center">Attraverso lo studio dell’involucro edilizio e grazie all’uso di materiali e tecniche di restauro, l’immobile risulterà compatibile con le mutate funzioni, adeguate alle rinnovate esigenze del committente. Questo processo però, non
              può esimersi dal considerare che impianti, involucro e materiali, ora come non mai sempre più connessi, richiedano un tipo di progettazione che non può prescindere dal considerarsi strettamente legata al recupero del costruito,
              alle prestazioni energetiche ed al ciclo di vita dei materiali. In questa ottica progettuale divengono rilevanti tutti i componenti integrati all’involucro edilizio; l’utilizzo di impianti innovativi, il controllo dell’apporto
              solare, l’impiego di materiali eco-compatibili, il controllo dell’impatto ambientale, sono tutti elementi che concorreranno a rendere il progetto adeguato ai principi della sostenibilità, del risparmio energetico e del confort
              abitativo. Ma recuperare un edificio significa anche salvaguardarne la memoria storica; occorre che le passate tracce restino ancora visibili, riutilizzando il più possibile tutto ciò che può ancora essere ritenuto valido sotto
              l’aspetto funzionale, strutturale o estetico. Il risultato sarà un progetto connotato da un aspetto che lo renderà ancora più unico, capace di raccontare la sua nuova identità ma al contempo permeato dall’influsso del proprio passato.</p>
          </div>
        </div>
      </div>
      
      <div id="progetti" name="progetti">
        <h2 className="title pt-3">PROGETTI</h2>

        {
          PROJECTS.map((proj, idx) => (
            <div className="proj_div" key={idx}>
              <div onClick={e=>focusImage(e)} className="img_active proj_img" style={{backgroundImage:'url('+(isLandscape ? proj.thumbnail_o : proj.thumbnail_v)+')'}}></div>
              <Link href={'/'+proj.url}>
                <a className="proj_desc py-3">
                  <p className="proj_name ml-3">{proj.name}</p>
                  <img className="proj_arrow mr-3" src="images/arrow-right.svg" alt=""/>
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
