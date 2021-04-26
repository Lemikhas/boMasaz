import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
  <section id="contact-container">
          <div id="contact">
              <div>
                  <img src="img/contact_img.png" alt="contact" id="contact-img"/>
              </div>
              <div id="contact-info">
                  <h3>Julia Bortniczuk</h3>
                  <h4>Masażystka</h4>
                  <br/>
                  <ul>
                      <a href="tel:+48881333465"><li id="contact-phone"><i className="fas fa-phone-alt"></i> 881333465</li></a>
                      <a href="mailto:bomasazstudio@gmail.com"><li id="contact-email"><i className="far fa-envelope"></i> bomasazstudio@gmail.com</li></a>
                      <a href="https://www.instagram.com/_bomasaz_/"><li id="contact-ig"><i className="fab fa-instagram"></i> @_bomasaz_</li></a>
                      <a href="#form-container"><li id="contact-write">Napisz <i className="far fa-paper-plane"></i></li></a>
                  </ul>
              </div>
          </div>
          <div className="mapouter">
              <div className="gmap_canvas">
                  <iframe className="gmap_iframe" id="map-iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=gąbińska 26&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
          </div>
      </section>
      <div id="oferta-container">
          <h3>Oferta</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis recusandae numquam, dicta cupiditate delectus eligendi sint voluptas dolores cum velit libero fugiat debitis provident non totam. Natus voluptas ipsum magni.
          Perferendis porro, minima obcaecati dolorem, dolore ex aspernatur eaque corrupti quibusdam voluptatum nisi sit tenetur odio eos ratione omnis reiciendis alias nihil quia consequuntur rem distinctio illum excepturi! Veritatis, repellat?
          Repellat molestiae voluptatum, laborum in rem quam illo dignissimos illum, sint recusandae perspiciatis ipsam saepe facere id, voluptatem nemo! Ducimus ex itaque tempora molestiae suscipit exercitationem maxime fugit numquam error?
          Animi eius vero suscipit in placeat recusandae deleniti veritatis qui earum natus reprehenderit voluptates dolor necessitatibus minus nisi alias nulla laboriosam eum facere deserunt, soluta est? Iure assumenda accusamus consequatur!
          Facilis iste adipisci similique quibusdam id eos quidem quia nobis inventore, eaque optio sequi nesciunt dolor atque deserunt, recusandae voluptatibus! Laboriosam dicta ducimus doloremque sapiente, hic ad laudantium voluptatibus similique!
          Harum, facere odit! Eveniet, cupiditate, minima in aperiam hic nobis recusandae eum ipsa enim nulla deleniti dicta quis saepe magnam ratione. Quo harum aperiam ut distinctio temporibus, laudantium libero assumenda.
          Dignissimos eveniet eaque velit reiciendis officiis laborum asperiores ducimus modi, aliquid earum corporis blanditiis voluptates laboriosam nobis veniam cum sequi! Sit maiores, enim tenetur aspernatur iure aliquid nostrum corrupti molestiae!
          Molestiae facilis a nam distinctio repudiandae architecto. Eum aperiam corrupti repellendus repudiandae, quam commodi modi nesciunt eaque! Inventore, debitis? Suscipit error possimus fugiat quas! Repellat corrupti aperiam doloribus autem illo.
          Nemo, minima hic. Non natus reprehenderit accusamus voluptatibus quasi modi similique, voluptates ex nam earum repellat maxime nisi corporis molestiae nesciunt suscipit. Nam porro voluptas repudiandae non corporis sint consequatur.
          Repellat obcaecati, voluptates minima quas animi libero id? Eveniet sequi reprehenderit error vel consequuntur officia fugit sint facere quaerat quasi officiis, ducimus voluptatum corporis quod quia molestias! Deserunt, ipsum dolores.</p>

      </div>
      <div id="cennik-container">
          <h3>CENNIK</h3>
          <ul id="cennik-list">
              <li className="cennik-item">
                  <span className="cennik-item-title">Masaż klasyczny</span>
                  <span className="cennik-item-price">
                      30min 60zł<br/>
                      1h 100zł<br/>
                      1,5h 140zł
                  </span>
              </li>
              <li className="cennik-item">
                  <span className="cennik-item-title">Masaż relaksacyjny</span>
                  <span className="cennik-item-price">1h 100zł</span>
              </li>
              <li className="cennik-item">
                  <span className="cennik-item-title">Masaż gorącymi kamieniami</span>
                  <span className="cennik-item-price">1,5h 160zł</span>
              </li>
              <li className="cennik-item">
                  <span className="cennik-item-title">Masaż antycelulitowy</span>
                  <span className="cennik-item-price">1h 120zł</span>
              </li>
              <li className="cennik-item">
                  <span className="cennik-item-title">Masaż dla kobiet w ciąży</span>
                  <span className="cennik-item-price">45min 100zł</span>
              </li>
              <li className="cennik-item">
                  <span className="cennik-item-title">Stawianie baniek</span>
                  <span className="cennik-item-price">30min 60zł</span>
              </li>
              <li className="cennik-item">
                  <span className="cennik-item-title">Zabieg chiropraktyczny</span>
                  <span className="cennik-item-price">150zł</span>
              </li>
              <h4>Pakiety:</h4>
              <li className="cennik-item">
                  <span className="cennik-item-title">Masaż klasyczny</span>
                  <span className="cennik-item-price">
                      5 x 1,5h 650zł<br/>
                      10 x 1,5h 1200zł
                  </span>
              </li>
          </ul>
      </div>
      <div id="form-container">
          <h3>Napisz do mnie</h3>
          <span id="form-msg"></span>
          <form id="contact-form">
              <input type="email" name="user_email" placeholder="Email" id="form-email"/>
              <textarea name="message" placeholder="Wiadomość do mnie..."></textarea>
              <input type="submit" value="Wyślij" id="form-submit"/>
          </form>
      </div>
  </div>
)

export default IndexPage
