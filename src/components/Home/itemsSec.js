import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Rec4 from "../../images/Rectangle52.png"
import Rec5 from "../../images/Rectangle53.png"
import Speed from "../../images/speed.png"
import Kg from "../../images/kg.png"
import Btry from "../../images/btry.png"

import "./itemSec.css"


const ItemsSec = ({ siteTitle }) => (
  <div className="bg-gray-100 ">
    <div className="md:flex">
      <div className="md:w-1/2">
        <img className=" w-full" src={Rec4} alt="Hero img" />
      </div>

      <div className="flex md:w-1/2  ">
        <div className="flex flex-col justify-center items-center p-6">
          <p className="text-bold text-3xl font-bold pb-4 pr-6">
            The King Song 14D Electric Unicycle</p>
          <p className="p-4">
            The King Song 14D Electric Unicycle has an 800W motor, and you can choose between 340Wh or 420Wh batteries
            for extended range. The King Song 14D electric unicycle is a perfect choice for riders who has a lower
            budget but still want an electric unicycle which is comfortable, practical and powerful.
          </p>

          <div className="flex justify-around w-full p-4">
            <div className="circles">
              <img className="mb-2 " src={Speed} alt="Speed" />
              <p>Max Speed 30km/h</p>
            </div>
            <div className="circles">
              <img className="mb-2 " src={Kg} alt="Kg" />
              <p>
                Only 13.6kg weight
              </p>
            </div>
            <div className="circles">
              <img className="mb-2 " src={Btry} alt="Batry " />
              <p>
                Max Charching time 3.5h
              </p>
            </div>

          </div>
        </div>
        <div>
          <button className=" but-arow-right from-yellow-600 rounded border-1/2">-></button>
        </div>

      </div>
    </div>

    {/*------------------*/}
    <div className="md:flex">
      <div className="md:w-1/2 flex">
        <div>
          <button className=" btn-arow-left from-yellow-600 rounded border-1/2"> -</button>
        </div>
        <div className="flex flex-col justify-center items-center p-6">
          <p className="text-bold text-3xl font-bold pb-4 pr-6">
            Top 7 Electric Unicycles of 2020 Reviewed</p>
          <p className="p-4">
            In sagittis eu netus dolor, dignissim lobortis in sed. Pellentesque felis nunc in ultricies mauris, vel
            nulla proin. Velit egestas amet amet cursus dapibus dapibus condimentum enim tortor. Et donec gravida leo eu
            erat quis id non a. Elit tellus est tincidunt vel arcu convallis. Metus in massa neque auctor tincidunt id
            sagittis ut. Quam ornare risus habitasse.
          </p>
          <button className="float-right p-4 bg-yellow-600 rounded rounded-full text-white">Read More</button>

          <div className="flex justify-around w-full p-4">


          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <img className=" w-full" src={Rec5} alt="Hero img" />
      </div>

    </div>
  </div>


)

export default ItemsSec
