import * as React from "react"
// import { config } from '@fortawesome/fontawesome-svg-core'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./footer.css"
import FooterLogo from "../images/King_copy_02.png"
import Visa from "../images/visa-light-large.png"
import Master from "../images/mastercard-light-large.png"
import Amricna from "../images/americanexpress-light-large.png"
import Paypal from "../images/paypal-light-large.png"
import Facebook from "../images/Blog/facebook.png"
import Insta from "../images/Blog/insta.png"
import Play from "../images/Blog/play.png"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="footer-main w-full flex p-4">
      <div className="footer w-5/6 justift-between">
        <div className="footer-top md:flex justify-evenly items-center">

          <div className="md:w-1/4 p-2">
            <img src={FooterLogo} alt="visa" />
            <p className="text-white">If you have any question, please contact us at <span
              className="text-yellow-600">info@kingsong.com</span></p>
          </div>

          <div className="p-2">
            <h2 className="text-white">Contact Us </h2>
            <p className="text-white"><Link to="/">Technical Support</Link></p>
            <p className="text-white"><Link to="/page-2/">Dealer Opportunities</Link></p>
            <p className="text-white"><Link to="/page-2/">Affiliate Program</Link></p>

          </div>
          <div className="p-2">
            <h2 className="text-white">Support </h2>
            <p className="text-white"><Link to="/">Safety Tips</Link></p>
            <p className="text-white"><Link to="/page-2/">Shipping & Return</Link></p>
            <p className="text-white"><Link to="/page-2/">Warranty Registration</Link></p>

          </div>

          <div className="p-2">
            <h2 className="text-white">About Us </h2>
            <p className="text-white"><Link to="/">Why US </Link></p>
            <p className="text-white"><Link to="/page-2/">Privacy Policy</Link></p>
            <p className="text-white"><Link to="/page-2/">Terms of Service </Link></p>

          </div>
          <div className="p-2">
            <h2 className="text-white">Payment</h2>
            <p className="text-white">We have such payment methods</p>
            <div className="flex justify-around py-2">

              <img src={Visa} alt="visa" />
              <img src={Master} alt="Master" />
              <img src={Amricna} alt="Amricna" />
              <img src={Paypal} alt="Paypal" />
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom md:flex justify-center ">
      <div className=" md:w-5/6 lg:w-5/6 xl:w-1/2 2xl:w-1/2 md:flex justify-between">
        <div className="md:w-2/3">
          <p className="text-white px-4 md:p-2">Copyright © 2021 KingSong, All Rights Reserved</p>
        </div>
      <div className="flex justify-around md:w-1/3 p-2">
        <img className=" " src={Facebook} alt="facebook " />
        <img className=" " src={Insta} alt="insta " />
        <img className=" " src={Play} alt="play " />
      </div>
      </div>
    </div>

  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string
}

Footer.defaultProps = {
  siteTitle: ``
}

export default Footer
