import * as React from "react"
import { Link } from "gatsby"
import KingSong1 from "../../../images/Rectangle20.png"
import StarGrp from "../../../images/Group162.png"
import Compare from "../../../images/Shop/compare.png"
import Share from "../../../images/Shop/share.png"
import Heart from "../../../images/Shop/wishlist.png"
import Visa from "../../../images/Shop/visa-outline-large.png"
import Master from "../../../images/Shop/mastercard-outline-large.png"
import Amercian from "../../../images/Shop/americanexpress-outline-large.png"
import PayPal from "../../../images/Shop/paypal-outline-large.png"
import Clock from "../../../images/Shop/Vector.png"


const ItemDetails = ({ siteTitle }) => (
  <div className=" md:flex p-4 items-center mb-4 ">
    <img className="  " src={KingSong1} alt="KingSong1" />
    <div className="p-4  ">
      <div className="flex">
        <div className="w-full">
          <img className="  " src={StarGrp} alt="Stat grp" />
          <p className="py-2">
            KingSong KS-14D
          </p>

          <div className="md:flex text-gray-400">
            <div className="py-2 md:flex justify-between md:w-2/3">

              <div>
                <div>
                  <strong className="text-black"> $626.29</strong>
                </div>
                <div className="text-gray-400 md:pl-6">

                  <label> $786.88 </label>
                  <p>You save $157.51 (20%)</p>
                </div>
              </div>
              <div className="flex ">
                <img className="pr-4" src={Clock} alt="clock" />
                <div>
                  <label className="">This product was viewed</label>
                  <p> 60 times within last hour</p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>


      <div>

        <strong>Short description</strong>
        <p className="p-2 text-gray-400">
          The King Song 14D Electric Unicycle has an 800W motor, and you can choose between 340Wh or 420Wh batteries for
          extended range. The King Song 14D electric unicycle is a perfect choice for riders who has a lower budget but
          still want an electric unicycle which is comfortable, practical and powerful.
        </p>
        <div className="  flex justify-between flex-col p-6">

          <div className="flex justify-between text-gray-400">
            <div className="w-1/2">
              <p>Battery: 340/420Wh</p>
              <p>Top Speed: 18 Mph</p>
              <p>Range: 15-20 miles</p>
            </div>
            <div className="w-1/2">
              <p>Motor Rating: 800W</p>
              <p>200lb Rider Capacity</p>
              <p>Tire Size: 14 X 2.125 inch</p>
            </div>
          </div>
        </div>
        <div>

          <div className="bg-gray-100 md:flex justify-between flex-col p-6">
            <div className="md:flex justify-between">
              <div className="md:w-1/2">
                <strong>Availability:</strong> <label className="text-green-400"> In Stock</label>
              </div>
              <div className="md:w-1/2">
                <strong>Category: E-Unicycles</strong> <label className="text-gray-400"> E-Unicycles</label>

              </div>
            </div>
            <div className="md:flex justify-between">
              <div className="md:w-1/2">
                <strong>SKU: </strong><label className="text-gray-400"> 1235424</label>
              </div>
              <div className="md:w-1/2">
                <strong>Tax: </strong><label className="text-gray-400"> calculated in checkout</label>
              </div>
            </div>
          </div>


          <div className="flex py-6">
            <label>Color: </label>
            <div className=" mx-4 bg-black rounded rounded-full radius-1/2 h-8 py-4 w-8"></div>
            <div className="border-2 border-gray-300 rounded-full rounded radius-1/2 h-8 w-8 px-2 text-gray-300">+</div>
          </div>

          <div className="flex justify-betwen">
            <div className="md:flex justify-between md:w-1/2 items-center">
              <div className="flex justify-around items-center rounded bg-gray-100 w-1/3">
                <button className="px-2">-</button>
                <input className="p-2 mb-2  my-2  rounded w-1/3" type="number" name="quantity" placeholder="1"
                       min="1" />
                <button className="px-2">+</button>
              </div>
              <div>
                <button type="button"
                        className="focus:outline-none bg-yellow-600 text-sm text-white py-2.5 px-5 rounded-full  hover:bg-yellow-500">Add
                  to cart
                </button>
              </div>
              <div>

              </div>
            </div>
            <div className="flex justify-around md:w-1/2">
              <img className="h-8 " src={Compare} alt="Compare" />
              <img className="h-8 " src={Share} alt="Share" />
              <img className=" h-8" src={Heart} alt="Wish list" />
            </div>

          </div>

          <div className="md:w-1/2 py-8">
            <div className="flex justify-around ">
              <strong>Payment:</strong>

              <img className="" src={Visa} alt="Vise card" />
              <img className="" src={Master} alt="Master" />
              <img className="" src={Amercian} alt="Amercian Express" />
              <img className="" src={PayPal} alt="Paypal" />
            </div>
          </div>

          {/*--------------*/}
        </div>

      </div>

    </div>
  </div>


)

export default ItemDetails
