import * as React from "react"
import { Link } from "gatsby"
import Rec20 from "../../images/AboutUs/Rectangle20.png"
import DldRed from "../../images/AboutUs/dld-red.png"

const wishcomp = (props) => {

  return (
    <div className="md:flex justify-between py-6 items-center w-full">
      <div className="md:w-1/3 w-full flex justify-around items-center">
        <img className=" " src={props.image} alt="Rext20" />
        <p className="font-bold">
          {props.name}
        </p>
      </div>


      <div className="md:w-1/3 w-full flex justify-around">
        <p className="font-bold">
          {props.prise}
        </p>
        <p className="font-bold ">
          {props.stock}
        </p>
      </div>

      <div className="md:w-1/3 w-full flex justify-around">
        <button type="button"
                className="focus:outline-none  md:w-1/2 md:float-right nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Add
          to cart
        </button>

        <img className="h-8 " src={DldRed} alt="delete" />
      </div>
    </div>


  )
}

export default wishcomp
