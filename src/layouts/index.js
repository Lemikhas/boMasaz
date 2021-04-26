import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import Footer from '../components/footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>BoMasaż</title>
      <link rel="icon" href="logo1.png" type="image/png" sizes="16x16"/>
      <script src="https://kit.fontawesome.com/a892cf4061.js" crossorigin="anonymous"></script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
      {/* <script type="text/javascript">
          (function() {
              emailjs.init('user_w7fYigvT1K4GzYjLBYJlo')
          })();
      </script>
      <script type="text/javascript">
          window.onload = function() {
              document.getElementById('contact-form').addEventListener('submit', function(event) {
                  event.preventDefault();
                  // these IDs from the previous steps
                  emailjs.sendForm('contact_service', 'contact_form', this)
                      .then(function() {
                          console.log('SUCCESS!');
                      }, function(error) {
                          console.log('FAILED...', error);
                      });
              })
          }
      </script> */}
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
