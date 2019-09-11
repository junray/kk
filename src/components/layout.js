import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from '../images/favicon.png'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'klippa kloppa website' },
              { name: 'keywords', content: 'music, art' },
            ]}
            link={[
              {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: `${favicon}`,
              },
              {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: `${favicon}`,
              },
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
