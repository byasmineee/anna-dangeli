import Link from 'next/link'

export default function Header() {

  function toggleHeader () {
    document.getElementById('burger').classList.toggle('toggle_burger')
    document.getElementById('menu').classList.toggle('menu_active')
  }
  
  return (
    <div>
      <svg onClick={toggleHeader} id="burger" width="250" height="210" viewBox="0 0 250 210" fill="none" xmlns="http://www.w3.org/2000/svg"><rect id="line_6" x="9" y="162" width="241" height="48" fill="#0C0C0C"></rect><rect id="line_5" x="9" y="85" width="241" height="48" fill="#0C0C0C"></rect><rect id="line_4" x="9" y="8" width="241" height="48" fill="#0C0C0C"></rect><rect id="line_3" y="154" width="241" height="48" fill="#F5F5F5"></rect><rect id="line_2" y="77" width="241" height="48" fill="#F5F5F5"></rect><rect id="line_1" width="241" height="48" fill="#F5F5F5"></rect></svg>
      <div id="menu">
        <Link onClick={toggleHeader} href="/"><a className="nav-link" >HOME</a></Link>
        <Link onClick={toggleHeader} href="/#progetti"><a className="nav-link" >ARCHITETTURE</a></Link>
        <Link onClick={toggleHeader} href="/mobili"><a className="nav-link" >ELEMENTI D&apos;ARREDO</a></Link>
        <a className="nav-link" target="_blank" rel="noreferrer" href="https://youtu.be/mhGrXAv0n6o">ArchimovieTV</a>
        <div className="nap">
        <a href="tel:3386097288">Tel: 338-6097288</a>
        <a href="mailto:a.dangeli@archiworld.it">Mail: a.dangeli@archiworld.it</a>
        <span>Fossombrone (PU), Marche, Italia</span>
        </div>
      </div>
    </div>
  )
}
