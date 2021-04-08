import * as React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"

const Headermenu = ({ siteTitle, setNavOpen }) => {

  console.log("setter", setNavOpen)

  return (
    <div className="p-4 shadow rounded bg-white ">
      <div>
        <button onClick={()=>{setNavOpen(false)}}>close</button>
      </div>
      <div>
        <img src={Logo} alt="logo" />

      </div>
      <div className=" ">
        <Link to="/">
          <label className="active p-4  font-bold">Home</label></Link>
        <div className=" p-4 border-b-2 border-gray-200">
          <div className="pb-4 font-bold ">Shop
            <i className="fa fa-caret-down"></i>
          </div>
          <div className="">
            <p>

              <a className=" p-4 hover:text-yellow-600  " href="/shop">Electric Unicycles</a>
            </p>
            <p>

              <a className=" p-4 hover:text-yellow-600" href="#">Accessories</a>
            </p>
          </div>
        </div>
        <div className="p-4 border-b-2 border-gray-200">
          <Link to="/blog"><label className="p-4 font-bold hover:text-rgb(236, 90, 17) ">Blog</label></Link>
        </div>
        <div className="p-4">

          <Link to="/aboutus"><label className="p-4 font-bold hover:text-yellow-600">About Us</label></Link>
        </div>
        <div className="p-4 border-b-2 border-gray-200">

          <Link to="/contact"><label className="p-4 font-bold hover:text-yellow-600">Contact</label></Link>
        </div>
        <div className="p-4 border-b-2 border-gray-200">

          <input className="border border-2 p-2 rounded-full border-gray-200 rounded " placeholder="Search"/>
        </div>
        <div>

          <button>
            Login
          </button>
        </div>
      </div>

    </div>

  )
}

export default Headermenu
