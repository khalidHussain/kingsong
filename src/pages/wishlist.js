import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Rec20 from "../images/AboutUs/Rectangle20.png"
import Rec48 from "../images/AboutUs/Rec48.png"
import Rec49 from "../images/AboutUs/Rec49.png"
import ShopHero from "../images/Shop/shophero.png"
import Wishcomp from "../components/wishlist/wishcomp"


const Wishlist = (props) => {
  return (
    <Layout>
      <SEO title="blog" />
      <div className="Shop-headder relative">
        <img className=" " src={ShopHero} alt="ShopHero" />
        <p className="text-white absolute top-0 md:top-1">Home / Wishlist</p>
      </div>
      {/*--------------------*/}
      <div className="flex justify-center">
        <div className="w-full lg:w-5/6 xl:w-5/6 2xl:w-1/2 py-6 pl-2">
          <div className="hidden md:block">
            <div className=" flex justify-evenly p-4 border-t-2 border-b-2 border-gray-300">
              <div className="w-1/5"></div>
              <div className="w-1/5">
                <p>
                  Product</p>
              </div>
              <div className="w-1/5">
                <p>
                  Quantity</p></div>
              <div className="w-1/5">
                <p>
                  Total</p></div>
              <div className="w-1/5"></div>
            </div>

          </div>
          <Wishcomp image={Rec20} name="KingSong KS-S18" prise="$ 393.78" stock="In Stock" />
          <Wishcomp image={Rec48} name="KingSong KS-14D" prise="$ 626.29" stock="in stock" />
          <Wishcomp image={Rec49} name="KingSong KS-18XL" prise="$ 1,567.78" stock="in stock" />
        </div>
      </div>

    </Layout>
  )
}

export default Wishlist