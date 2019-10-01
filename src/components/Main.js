import React from 'react'
import PropTypes from 'prop-types'
import Video from '../components/video'
import social from '../images/social.jpg'
import megaphone from '../images/megaphone.jpg'
import blowup from '../images/blowup.pdf'
import buscadero from '../images/buscadero.pdf'
import baroni from '../images/baroni.pdf'
import rumore from '../images/rumore.pdf'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    console.log(this.props)

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="video"
          className={`${this.props.article === 'video' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Video</h2>

          <Video
            videoSrcURL="https://www.youtube.com/embed/tapkzNyruls"
            videoTitle={'Cinghiali'}
            videoSubTitle="Scritto e diretto da Davide Maldi"
            ratio="16-9"
          />

          <br />
          <br />
          <Video
            videoSrcURL="https://www.youtube.com/embed/mbf-GHKC2e0"
            videoTitle="Bach"
            videoSubTitle="Scritto e diretto da Flavio Scutti"
            ratio="16-9"
          />
          <br />
          <br />
          <Video
            videoSrcURL="https://www.youtube.com/embed/IZoGkH6g6UE"
            videoTitle="Blast"
            videoSubTitle="Scritto e diretto da Mariano Calazzo aka Draghen"
            ratio="16-9"
          />

          {close}
        </article>

        <article
          id="stampa"
          className={`${this.props.article === 'stampa' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Stampa</h2>
          <span className="image main">
            <img style={{ opacity: 0.9 }} src={megaphone} alt="" />
          </span>
          <h2>Web magazines</h2>
          <ul>
            <li>
              <a
                href="https://sentireascoltare.com/recensioni/klippa-kloppa-liberty/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Massimo Padalino su Sentire ascoltare
              </a>
            </li>

            <li>
              <a
                href="http://www.kathodik.it/modules.php?name=Reviews&rop=showcontent&id=7357"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marco Fiori su Kathodik
              </a>
            </li>
            <li>
              <a
                href="https://acquanonpotabile.wordpress.com/2019/09/17/intervista-ai-klippa-kloppa-suoniamo-allincirca-dal-1999-erano-anni-in-cui-vivevamo-insieme-a-napoli-per-frequentare-luniversita-con-spirito-anarchico-condividevamo-passio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Intervista su acquanonpotabile
              </a>
            </li>
            <li>
              <a
                href="http://www.magazzininesistenti.it/klippa-kloppa-liberty-2019-di-ignazio-gulotta/?fbclid=IwAR1X1ewTywMlb_wSlZJLvo0JtcA2gQhXGZgARgwgVUFd-Qm_NAZRhrpaRKI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ignazio Gulotta su Magazzini inesistenti
              </a>
            </li>
            <li>
              <a
                href="http://www.distorsioni.net/canali/dischi/dischi-it/liberty"
                target="_blank"
                rel="noopener noreferrer"
              >
                Romina Baldoni su Distorsioni.net
              </a>
            </li>
            <li>
              <a
                href="https://www.rockit.it/recensione/45060/kloppaklippa-liberty"
                target="_blank"
                rel="noopener noreferrer"
              >
                Libera Capozucca su rockit.it
              </a>
            </li>
            <li>
              <a
                href="https://www.ondarock.it/recensioni/klippakloppa-liberty.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Paolo Sforza su ondarock.it
              </a>
            </li>
          </ul>
          <h2>Paper magazines</h2>
          <ul>
            <li>
              <a
                href="http://www.blowupmagazine.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Federico Savini su Blow up
              </a>
              :{' '}
              <a rel="noopener noreferrer" target="_blank" href={blowup}>
                scarica il pdf
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="http://www.buscadero.com/m">
                Lino Brunetti su Buscadero
              </a>
              :{' '}
              <a rel="noopener noreferrer" target="_blank" href={buscadero}>
                scarica il pdf
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/vittore.baroni"
              >
                Vittore Baroni
              </a>
              :{' '}
              <a rel="noopener noreferrer" target="_blank" href={baroni}>
                scarica il pdf
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://rumoremag.com/">
                Barbara Santi su Rumore
              </a>
              :{' '}
              <a rel="noopener noreferrer" target="_blank" href={rumore}>
                scarica il pdf
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="social"
          className={`${this.props.article === 'social' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Social</h2>
          <span className="image main">
            <img src={social} alt="" />
          </span>
          <p>
            Anche disponibile su:&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/album/67hZedDP3rYe3CogTA0pJD
"
            >
              spotify
            </a>
            &nbsp;e su&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://klippakloppa.bandcamp.com/
"
            >
              bandcamp
            </a>
          </p>
          <p className="m-bottom4x">
            Seguici su&nbsp;
            <a
              href="https://www.facebook.com/klippakloppa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook
            </a>
            &nbsp;
            <a
              href="https://www.instagram.com/klippa_kloppa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
            &nbsp;
            <a
              href="https://www.youtube.com/user/klippakloppa"
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube
            </a>
          </p>
          {close}
        </article>

        {/*  <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>

          {close}
        </article> */}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
