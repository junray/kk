import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Liberty</h1>
        <p>
          Il nuovo disco dei Klippa Kloppa
          <br /> in uscita il 20 settembre 2019 <br />
          preordina l'album sul{' '}
          <a
            href="https://snowdonia.bandcamp.com/album/liberty"
            target="_blank"
            rel="noopener noreferrer"
          >
            sito di snowdonia
          </a>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('video')
            }}
          >
            Video
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('stampa')
            }}
          >
            Stampa
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('social')
            }}
          >
            Social
          </a>
        </li>
        {/*  <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li> */}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
