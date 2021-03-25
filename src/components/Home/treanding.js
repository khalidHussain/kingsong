import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import KingSong11 from "../../images/Rectangle201.png"
import KingSong21 from "../../images/Rectangle201-1.png"
import KingSong31 from "../../images/Rectangle201-2.png"
import StarGrp from "../../images/Group162.png"


import "./itemSec.css"
import Rec4 from "../../images/Rectangle52.png"
import "./itemSec.css"
// import Rec1 from "../../images/Rectangle43.png"

const Treanding = ({ siteTitle }) => (
  <div className="flex justify-center  py-8">
    <div className="lg:w-5/6 xl:w-5/6 2xl:w-1/2 justify-around pt-4">
      <div className="md:flex">
        <div className="flex flex-col justify-center items-center text-center ">
          <p className="text-bold text-3xl font-bold pb-4 pr-6">
            Our Bestseller</p>
          <p className="p-4 w-2/3">
            Morbi ultricies egestas sed ipsum sagittis ligula potenti odio quis. Donec eu pharetra lectus scelerisque
            morbi pulvinar. Sed libero tristique ut vel
          </p>
        </div>
      </div>
      <div className="md:flex justify-around items-center">
        <div>-</div>
        <div className="text-center items-center flex flex-col">
          <img className="  " src={KingSong11} alt="KingSong1" />
          <p>
            KingSong 16X Mudguartd
          </p>
          <p>
            $30.00  <strong>$22.00 </strong>
          </p>
          <img className="  " src={StarGrp} alt="Stat grp" />

        </div>
        {/*-------*/}
        <div className="text-center items-center flex flex-col">
          <img className="  " src={KingSong21} alt="KingSong2" />
          <p className="pb-3">
            KingSong XL Pedal
          </p>
          <button className="float-right p-2 bg-yellow-600 rounded rounded-full text-white">Add to cart</button>

        </div>

        {/*------*/}
        <div className="text-center items-center flex flex-col">
          <img className="  " src={KingSong31} alt="KingSong3" />
          <p>
            KingSong Pedal
          </p>
          <p>
            $31.50   <strong> $23.63</strong>
          </p>
          <img className="  " src={StarGrp} alt="Stat grp" />
        </div>
        <div> -</div>
      </div>
    </div>
  </div>

)

export default Treanding
