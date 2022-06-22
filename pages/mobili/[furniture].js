import Head from 'next/head'
import { useState } from "react";
import { FURNITURES } from "../../shared/furnitures"

export default function Furnitures(props) {
  const [current, setCurrent] = useState(0)

  function toggleFullscreen() {
    let slider = document.getElementById('slider')

    if (slider.classList.contains('slider_full')) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    } else {
      if (slider.requestFullscreen) {
        slider.requestFullscreen();
      } else if (slider.webkitRequestFullscreen) { /* Safari */
        slider.webkitRequestFullscreen();
      } else if (slider.msRequestFullscreen) { /* IE11 */
        slider.msRequestFullscreen();
      }      
    }

    slider.classList.toggle('slider_full')

  }

  function nextImage() {
    setCurrent(prev => prev < props.image.length-1 ? prev+1 : 0)
  }

  function prevImage() {
    setCurrent(prev => prev > 0 ? prev-1 : props.image.length-1)
  }


  return (
    <>
    <Head>
      <title>{props.name} | Annamaria D&apos;angeli</title>
    </Head>
    <div className="proj_page">
      <img className="proj_main_img" alt={props.name} src={"/images/furniture/"+props.slug+"/"+props.thumb} />
      <div id="slider" className="slider">
        <svg onClick={toggleFullscreen} className="full" id="full" width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="black"><path id="black4" d="M205 38L320 38V153" stroke="#0C0C0C" strokeWidth="20"></path><path id="black3" d="M320 203L320 318L205 318" stroke="#0C0C0C" strokeWidth="20"></path><path id="black2" d="M153 318H38L38 203" stroke="#0C0C0C" strokeWidth="20"></path><path id="black1" d="M38 153V38H153" stroke="#0C0C0C" strokeWidth="20"></path></g><g id="white"><path id="white4" d="M197 30L312 30V145" stroke="#F5F5F5" strokeWidth="20"></path><path id="white3" d="M312 195L312 310L197 310" stroke="#F5F5F5" strokeWidth="20"></path><path id="white2" d="M145 310H30L30 195" stroke="#F5F5F5" strokeWidth="20"></path><path id="white1" d="M30 145V30H145" stroke="#F5F5F5" strokeWidth="20"></path></g></svg>
        <svg onClick={prevImage} className="left" width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M157 272L43 158.5L157 45" stroke="black" strokeWidth="20"></path><path d="M157 254L43 140.5L157 27" stroke="white" strokeWidth="20"></path></svg>
        <svg onClick={nextImage} className="right" width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43 45L157 158.5L43 272" stroke="black" strokeWidth="20"></path><path d="M43 27L157 140.5L43 254" stroke="white" strokeWidth="20"></path></svg>
        <div className="slider_img">
          {
            props.image.map((img, idx) => (
              <div key={idx} className={current == idx ? 'img_active' : ''} style={{backgroundImage:'url(/images/furniture/'+props.slug+'/'+img+')'}}></div>
            ))
          }
        </div>
      </div>
    </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: FURNITURES.map(furn => (
      {params: {furniture: furn.slug}}
    )),
    fallback: false // true, false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  return {
    props: FURNITURES.filter(furn => furn.slug == params.furniture)[0]
  }
}