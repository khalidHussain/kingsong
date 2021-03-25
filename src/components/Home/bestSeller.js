import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import KingSong1 from "../../images/Rectangle20.png"
import KingSong2 from "../../images/Rectangle20-1.png"
import KingSong3 from "../../images/Rectangle20-2.png"
import StarGrp from "../../images/Group162.png"


import "./itemSec.css"
import Rec4 from "../../images/Rectangle52.png"
import "./itemSec.css"


const BestSeller = (props) => {
  return (
    <div className="flex justify-center  py-8">
      <div className="lg:w-5/6 xl:w-5/6 2xl:w-1/2 justify-around pt-4">
        <div className="md:flex">
          <div className="flex flex-col justify-center items-center text-center ">
            <p className="text-bold text-3xl font-bold pb-4 pr-6">
              {props.heading}
            </p>
            <p className="p-4 w-2/3">
              {props.text}

            </p>
          </div>
        </div>
        <div className="md:flex justify-around items-center">
          <div>-</div>
          <div className="text-center items-center flex flex-col">
            <img className="  " src={KingSong1} alt="KingSong1" />
            <p>
              KingSong KS-14D
            </p>
            <p>
              $786.88 <strong> $626.29</strong>
            </p>
            <img className="  " src={StarGrp} alt="Stat grp" />

          </div>
          {/*-------*/}
          <div className="text-center items-center flex flex-col">
            <img className="  " src={KingSong2} alt="KingSong2" />
            <p className="pb-3">
              KingSong KS-S18
            </p>
            <button type="button"
                    className="focus:outline-none bg-yellow-600 text-sm text-white py-2.5 px-5 rounded-full  hover:bg-yellow-500">Add to cart
            </button>

          </div>

          {/*------*/}
          <div className="text-center items-center flex flex-col">
            <img className="  " src={KingSong3} alt="KingSong3" />
            <p>
              KingSong KS-16X
            </p>
            <p>
              $1,968.90 <strong> $1,567.24</strong>
            </p>
            <img className="  " src={StarGrp} alt="Stat grp" />
          </div>
          <div> -</div>
        </div>
      </div>
    </div>

  )
}
export default BestSeller
