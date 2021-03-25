import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "./layout"
import HeaderMenu from "../components/header/headermenu"

import Flag from "../images/emojione_flag-for-united-states.png"
import Logo from "../images/logo.png"
import Search from "../images/serch.png"
import Heart from "../images/heart.png"
import Group from "../images/Group.png"
import Cart from "../images/fluent_cart-20-regular.png"
import Bx from "../images/bx_bx-menu-alt-left.png"
import Search1 from "../images/fluent_search-20-regular.png"
import Heart1 from "../images/fluent_heart-20-regular.png"
import Group1 from "../images/fluent_person-20-regular.png"
import { useState } from "react"

const Header = ({ siteTitle }) => {
  const [navOpen, setNavOpen] = useState(false)

  function navhandel() {
    setNavOpen(true)
  }

  return (
    <header className="relative">
      {navOpen ?
        <div className="absolute top-0 z-10 right-0 w-5/6">
          <HeaderMenu setNavOpen={setNavOpen} />
        </div>
        :
        ""
      }


      <div className="nav-top-main hidden md:block  ">
        <div className="flex justify-center w-full">
          <div className="nav-top lg:w-5/6 xl:w-5/6 2xl:w-1/2 flex justify-between">
            <div className="nav-top-left text-white float-left">
              <p>Free USA & Canada Ground Shipping On All Orderse</p>
            </div>
            <div className=" flex">
              <img className="mx-2" src={Flag} alt="logo" />
              <label >Eng <i className="fa fa-sort-down text-white"></i></label>
              <label>USD</label><i className="fas fa-sort-down text-white"></i>

            </div>
          </div>
        </div>
      </div>

      <div className="nav-bottom-main hidden md:block w-full ">
        <div className="flex justify-center w-full">
          <div className="nav-bottom  lg:w-5/6 xl:w-5/6 2xl:w-1/2">
            <div className="nav-bottom-left">
              <img src={Logo} alt="logo" />

            </div>
            <div className="nav-bottom-middle">
              <Link to="/"><label className="active p-4 font-bold hover:text-yellow-600">Home</label></Link>

              <div className="dropdown1">
                <button className="dropbtn p-4 ">Shop
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <Link to="/shop">Electric Unicycles</Link>
                  <Link to="#">Accessories </Link>

                </div>
              </div>

              <Link to="/blog"><label className="p-4 font-bold hover:text-yellow-600 ">Blog</label></Link>
              <Link to="/aboutUs"><label className="p-4 font-bold hover:text-yellow-600">About Us</label></Link>
              <Link to="/contact"><label className="p-4 font-bold hover:text-yellow-600">Contact</label></Link>

            </div>
            <div className="flex justify-around nav-bottom-right">

              <img className="mx-2 text-white" src={Search} alt="logo" />
              <img className="mx-2" src={Heart} alt="logo" />
              <img className="mx-2" src={Group} alt="logo" />
              <img className="mx-2" src={Cart} alt="logo" />

            </div>
          </div>
        </div>
      </div>
      {/*  -----------------------*/}
      <div className="nav-top-main  block md:hidden w-full justify-center">
        <div className="nav-top lg:w-5/6 xl:w-1/2 2xl:w-1/2 flex  justify-between">
          <div className=" text-white flex">
            <img className="mx-2" src={Flag} alt="logo" />
            <label>Eng <i className="fa fa-sort-down"></i></label>
            <label>USD</label><i className="fas fa-sort-down"></i>

          </div>
          <div className=" flex">
            <img className="mx-2 text-white" src={Search1} alt="logo" />
            <img className="mx-2" src={Heart1} alt="logo" />
            <img className="mx-2" src={Group1} alt="logo" />

          </div>
        </div>
      </div>

      <div className="py-4 block md:hidden w-full flex justify-between">

        <div className="nav-bottom-left">
          <img className="h-12" src={Logo} alt="logo" />

        </div>
        <div className="nav-bottom-middle">
          <img className="h-10" src={Cart} alt="logo" />
          <img onClick={navhandel} className="h-10" src={Bx} alt="logo" />
        </div>
      </div>


    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
