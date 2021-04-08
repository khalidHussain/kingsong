import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShopHero from "../images/Shop/shophero.png"
import ItemDetails from "../components/shopcomponent/electronic/itemDetails"
import Discription from "../components/shopcomponent/electronic/discription"
import BestSeller from "../components/Home/bestSeller"

const ElectricUnicycles = (props) => (
  <Layout>
    <SEO title="electricUnicycles" />
    <div>
      <div className="">
        <div className="Shop-headder relative">
          <img className=" " src={ShopHero} alt="ShopHero" />
          <p className="text-white absolute top-0 md:top-1">Home / Shop / Electric Unicycles</p>
        </div>

        <div>
          <div className="flex justify-center">
            <div className="lg:w-5/6 xl:w-5/6 2xl:w-1/2 ">
              <ItemDetails />
              <Discription />

              <BestSeller heading="Also Purchased"
                          text="Morbi ultricies egestas sed ipsum sagittis ligula potenti odio quis. Donec eu pharetra lectus scelerisque morbi pulvinar. Sed libero tristique ut vel, quisque commodo sit. Maecenas hendreri" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </Layout>
)

export default ElectricUnicycles