import * as React from "react"
import Elips from "../../images/Ellipse10.png"
import Group from "../../images/Group1162.png"
import "./itemSec.css"
import "./itemSec.css"

const CustomerReview = ({ siteTitle }) => (
  <div className="flex justify-center  py-8 ">
    <div className="lg:w-5/6 xl:w-5/6 2xl:w-1/2 justify-around pt-4">
      <div className="md:flex">
        <div className="flex flex-col justify-center items-center text-center ">
          <p className="text-bold text-3xl font-bold pb-4 pr-6">
            Customer Reviews</p>
          <p className="p-4 w-2/3">
            Morbi ultricies egestas sed ipsum sagittis ligula potenti odio quis. Donec eu pharetra lectus scelerisque
            morbi pulvinar. Sed libero tristique ut vel
          </p>
        </div>
      </div>
      <div className="md:flex justify-around">
        <div className="flex md:w-1/3 rounded p-2">
          <div className="bg-gray-100 p-4">
            <div className="flex justify-around py-4">
              <div>
                <img className=" " src={Elips} alt="Ellipse" />
              </div>
              <div>
                <p>
                  Katy Smith
                </p>
                <img className=" " src={Group} alt="Ellipse" />

              </div>
            </div>
            <p>
              Morbi ultricies egestas sed ipsum sagittis ligula potenti odio quis. Donec eu pharetra lectus scelerisque
              morbi
              pulvinar. Arcu dapibus vitae enim in sagittis.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="btn-left">
            </div>
          </div>
        </div>

        <div className="flex md:w-1/3 rounded p-2">
          <div className="bg-gray-100 p-4">
            <div className="flex justify-around py-4">
              <div>
                <img className=" " src={Elips} alt="Ellipse" />
              </div>
              <div>
                <p>
                  Katy Smith
                </p>
                <img className=" " src={Group} alt="Ellipse" />

              </div>
            </div>
            <p>
              Morbi ultricies egestas sed ipsum sagittis ligula potenti odio quis. Donec eu pharetra lectus scelerisque
              morbi
              pulvinar. Arcu dapibus vitae enim in sagittis.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="btn-left">
            </div>
          </div>
        </div>

        <div className="flex md:w-1/3 rounded p-2">
          <div className="bg-gray-100 p-4">
            <div className="flex justify-around py-4 ">
              <div>
                <img className=" " src={Elips} alt="Ellipse" />
              </div>
              <div>
                <p>
                  Katy Smith
                </p>
                <img className=" " src={Group} alt="Ellipse" />

              </div>
            </div>
            <p>
              Morbi ultricies egestas sed ipsum sagittis ligula potenti odio quis. Donec eu pharetra lectus scelerisque
              morbi
              pulvinar. Arcu dapibus vitae enim in sagittis.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="btn-left">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

)

export default CustomerReview
