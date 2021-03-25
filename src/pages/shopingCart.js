import * as React from "react"
import { Link } from "gatsby"
import Rec1095 from "../images/AboutUs/Rectangle1095.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Rec20 from "../images/AboutUs/Rectangle20.png"
import DldRed from "../images/AboutUs/dld-red.png"
import DldSm from "../images/AboutUs/dld-sm.png"

import ShopHero from "../images/Shop/shophero.png"
import { useState } from "react"
import Facebook from "../images/Blog/facebook.png"
import Insta from "../images/Blog/insta.png"
import Play from "../images/Blog/play.png"
import Visa from "../images/visa-light-large.png"
import Master from "../images/mastercard-light-large.png"
import Amricna from "../images/americanexpress-light-large.png"
import Paypal from "../images/paypal-light-large.png"
// import Wishlistcomponent from "../components/wishlist/wishlistcomponent"


const ShopingCart = (props) => {

  const [cheqout, setCheqout] = useState(false)
  const [shoping, setShoping] = useState(true)
  return (
    <Layout>
      <SEO title="blog" />
      <div className="Shop-headder relative">
        <img className=" " src={ShopHero} alt="ShopHero" />
        <p className="text-white absolute top-0 md:top-1">Home / ShopingCart</p>
      </div>
      {/*------------*/}
      <div className="flex justify-center">
        <div className="lg:w-5/6 xl:w-5/6 2xl:w-1/2 py-6 pl-2">

          {shoping ?
            <div className="md:flex justify-around">

              {/*  ----------------*/}
              <div className="py-6 text-center md:w-7/12 pl-2">
                <p className="text-2xl font-bold p-6">Your Cart</p>
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
                {/*  -------products---------*/}
                <div className="md:flex justify-between py-6 items-center">
                  <div className="w-1/5 flex justify-center">
                    <img className=" " src={Rec20} alt="Rext20" />
                  </div>
                  <div className="w-1/5">
                    <p className="font-bold">
                      KingSong KS-S18
                    </p>
                  </div>
                  <div className="w-1/5 flex justify-center items-center  rounded ">
                    <div className="w-3/4 bg-gray-100 flex justify-center">
                      <button className="font-bold  p-2">-</button>
                      <input className="p-2 m-1 bg-white rounded w-full" type="number" id="quantity" name="quantity"
                             min="1" />
                      <button className="font-bold  p-2">+</button>
                    </div>

                  </div>
                  <div className="w-1/5">
                    <p className="font-bold">
                      $393.78
                    </p>
                  </div>
                  <div className="w-1/5 flex justify-center">
                    <img className=" " src={DldRed} alt="delete" />
                  </div>
                </div>

                <div className="flex justify-between pb-7">
                  <button type="button"
                          className="focus:outline-none  border-b-2 border-gray-400 text-sm uppercase pt-2.5   hover:bg-gray-300">Continue
                    Shopping
                  </button>

                  <button type="button "
                          className="focus:outline-none  text-sm bg-gray-100 flex py-2.5 px-5  uppercase hover:bg-gray-300">
                    <img className="pr-4 " src={DldSm} alt="delete" />
                    Clear All
                  </button>

                </div>
              </div>

              {/*-----------form------------*/}
              <div className="flex  md:w-4/12">
                <div className="p-6 ">
                  <div className="flex justify-between items-center">
                    <p className="font-bold ">Total</p>
                    <p className="text-gray-400">$ 393.78</p>
                  </div>
                  <div className="flex justify-center py-4">
                    <button onClick={() => {
                      setCheqout(true)
                      setShoping(false)
                    }} type="button"
                            className="focus:outline-none w-1/2 nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Checkout
                    </button>
                  </div>


                  <div className="text-gray-400 float-right  w-full py-4">
                    <div className=" float-right py-2">
                      <input className="" type="radio" id="yes" name="items" value="yes" />
                      <label className="pl-2 " htmlFor="yes">I agree to the terms of service</label>
                    </div>
                    <p className="  float-right">Standart shipping 10-12 business days</p>
                  </div>

                  <div className="flex justify-between py-y w-full border-b-2 border-gray-400">
                    <p className="font-bold">
                      Shipping Calculator
                    </p>
                    <p className="font-bold text-2xl">
                      -
                    </p>
                  </div>

                  <div className="custom-select w-full py-4">
                    <p className="">Country</p>
                    <select
                      className="focus:outline-none bg-white text-gray-400 w-full border my-4 border-b-2 p-2 w-full border-gray-200 rounded">
                      <option value="0">Select Country:</option>
                      <option value="1">Pakistan</option>
                      <option value="2">China</option>
                      <option value="3">Turkey</option>
                      <option value="4">UK</option>
                      <option value="5">Egypt</option>
                      <option value="6">Albania</option>
                      <option value="7">Algeria</option>
                      <option value="8">Australia</option>
                      <option value="9">Iceland</option>
                      <option value="10">Sweden</option>
                      <option value="11">Ukraine</option>

                    </select>
                  </div>

                  <div className="custom-select w-full py-4">
                    <p className="">Region</p>
                    <select
                      className="focus:outline-none bg-white text-gray-400 w-full border my-4 border-b-2 p-2 w-full border-gray-200 rounded">
                      <option value="0">Select region</option>
                      <option value="1">miami</option>
                      <option value="2">China</option>
                      <option value="3">Turkey</option>
                      <option value="4">UK</option>
                      <option value="5">Egypt</option>
                      <option value="6">Albania</option>
                      <option value="7">Algeria</option>
                      <option value="8">Australia</option>
                      <option value="9">Iceland</option>
                      <option value="10">Sweden</option>
                      <option value="11">Ukraine</option>

                    </select>
                  </div>

                  <div className=" flex flex-col ">
                    <p className="">
                      Postal/ZIP Code
                    </p>
                    <input className="focus:outline-none border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                           placeholder="" type="text" />
                  </div>

                  <div className=" flex justify-center py-4">
                    <button type="button"
                            className="focus:outline-none w-1/2 nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Calculate
                    </button>
                  </div>


                  <div className="flex justify-between py-4 border-b-2 border-gray-400">
                    <p className="font-bold">
                      Note For Seller
                    </p>
                    <p className="font-bold text-2xl">
                      +
                    </p>
                  </div>

                  <input
                    className="focus:outline-none border my-4 border-b-2 p-2 w-full bg-gray-100 border-gray-200 rounded "
                    placeholder="Add a note to your order" type="text" />
                  <p className="text-gray-400">
                    * Savings include promotions, coupons, rueBUCKS, and shipping (if applicable).
                  </p>

                </div>
              </div>

            </div>
            : ""}


          {cheqout ?
            <div className="md:flex justify-around">
              <div className="py-6  md:w-7/12 pl-2">
                <p className="text-2xl font-bold p-6">Checkout</p>
                <div className="md:flex justify-between p-4">
                  <p>
                    Billing details
                  </p>
                  <p className="text-gray-400">Returning customer? <span
                    className="orange-color">Click here to login</span></p>
                </div>

                <div className="md:flex justify-evenly p-4">
                  <div className="md:w-5/12">
                    <p className="float-left">First name <span className="orange-color">*</span></p>
                    <input
                      className="focus:outline-none border my-4 border-b-2 p-2 w-full bg-gray-100 border-gray-200 rounded "
                      type="text" />
                  </div>
                  <div className="md:w-5/12">
                    <p className="float-left">Last name <span className="orange-color">*</span></p>
                    <input
                      className="focus:outline-none border my-4 border-b-2 p-2 w-full bg-gray-100 border-gray-200 rounded "
                      type="text" />
                  </div>
                </div>

                <div className="md:flex justify-evenly p-4">
                  <div className="md:w-5/12">
                    <p className="float-left">Email<span className="orange-color">*</span></p>
                    <input
                      className="focus:outline-none border my-4 border-b-2 p-2 w-full bg-gray-100 border-gray-200 rounded "
                      type="text" />
                  </div>
                  <div className="md:w-5/12">
                    <p className="float-left w-32">Phone Number<span className="orange-color">*</span></p>
                    <input
                      className="focus:outline-none border my-4 border-b-2 p-2 w-full bg-gray-100 border-gray-200 rounded "
                      type="text" />
                  </div>
                </div>

                <div className="md:flex justify-evenly p-4">
                  <div className="md:w-5/12">
                    <p className="float-left">Town/City <span className="orange-color">*</span></p>
                    <input
                      className="focus:outline-none border my-4 border-b-2 p-2 w-full bg-gray-100 border-gray-200 rounded "
                      type="text" />
                  </div>
                  <div className="md:w-5/12">
                    <p className="float-left">Address <span className="orange-color">*</span></p>
                    <input
                      className="focus:outline-none border my-4 border-b-2 p-2 w-full bg-gray-100 border-gray-200 rounded "
                      type="text" />
                  </div>
                </div>

                <div className="w-full md:flex justify-evenly items-center">
                  <div className="custom-select md:w-3/12 md:py-4 p-4">
                    <p className="">Country</p>
                    <select
                      className="focus:outline-none bg-white text-gray-400 w-full border my-4 border-b-2 p-2 w-full border-gray-200 rounded">
                      <option value="0">Select Country:</option>
                      <option value="1">Pakistan</option>
                      <option value="2">China</option>
                      <option value="3">Turkey</option>
                      <option value="4">UK</option>
                      <option value="5">Egypt</option>
                      <option value="6">Albania</option>
                      <option value="7">Algeria</option>
                      <option value="8">Australia</option>
                      <option value="9">Iceland</option>
                      <option value="10">Sweden</option>
                      <option value="11">Ukraine</option>

                    </select>
                  </div>

                  <div className="custom-select md:w-3/12 p-4 md:py-4">
                    <p className="">Reagion</p>
                    <select
                      className="focus:outline-none bg-white text-gray-400 w-full border my-4 border-b-2 p-2 w-full border-gray-200 rounded">
                      <option value="0">Select region</option>
                      <option value="1">miami</option>
                      <option value="2">China</option>
                      <option value="3">Turkey</option>
                      <option value="4">UK</option>
                      <option value="5">Egypt</option>
                      <option value="6">Albania</option>
                      <option value="7">Algeria</option>
                      <option value="8">Australia</option>
                      <option value="9">Iceland</option>
                      <option value="10">Sweden</option>
                      <option value="11">Ukraine</option>

                    </select>
                  </div>

                  <div className=" md:flex custom-select flex-col md:w-3/12 p-4 md:py-4">
                    <p className="w-40">
                      Postal/ZIP Code
                    </p>
                    <input className="focus:outline-none border my-4 border-b-2 p-2  border-gray-200 rounded "
                           placeholder="" type="text" />
                  </div>
                </div>


                <div className="md:flex justify-evenly p-4">
                  <div className="w-full">
                    <p className="">Order notes (optional)</p>
                    <input
                      className="focus:outline-none border my-4 border-b-2 p-2 w-full bg-gray-100 border-gray-200 rounded "
                      type="text" />
                  </div>
                </div>
                <div className=" p-4">
                  <input type="checkbox" name="account" value="account" />
                  <label htmlFor="account"> Create an account?</label>
                </div>

                <button type="button"
                        className="focus:outline-none w-full md:w-1/2 md:float-right nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Submit
                </button>
              </div>

              {/*-----------*/}
              <div className="  md:w-4/12">
                <div className="flex justify-between items-center">
                  <p className="font-bold ">Total</p>

                  <Link to="/wishlist">
                    <button type="button"
                            className="focus:outline-none  border-b-2 border-yellow-600  text-sm orange-color p-2  hover:border-yellow-300">Edit
                      order
                    </button>

                  </Link>
                </div>
                <div>
                  <div className="flex justify-between items-center">

                    <div className="flex items-center">
                      <img className=" " src={Rec20} alt="Rext20" />
                      <p className="font-bold">
                        KingSong KS-S18
                      </p>
                    </div>
                    <div className="float-right justify-between ">

                      <p className="font-bold">
                        $ 393.78
                      </p>
                    </div>
                  </div>

                  {/*--------*/}
                  <div className="flex justify-between py-2">
                    <p className="">
                      Subtotal
                    </p>
                    <p className="text-gray-400">
                      $ 393.78
                    </p>
                  </div>
                  <div className="flex justify-between py-2 ">
                    <p className="">
                      Shipping
                    </p>
                    <p className="text-gray-400">
                      Free
                    </p>
                  </div>
                  <div className="flex justify-between border-t-1 border-gray-400 py-4">
                    <p className="">
                      Total
                    </p>
                    <p className="font-bold">
                      $ 393.78
                    </p>
                  </div>
                </div>

                <div className="flex justify-between py-y w-full border-b-2 border-gray-400">
                  <p className="font-bold">
                    Payment Method
                  </p>
                  <p className="font-bold text-2xl">
                    -
                  </p>
                </div>

                <div className="flex justify-around py-4">
                  <img src={Visa} alt="visa" />
                  <img src={Master} alt="Master" />
                  <img src={Amricna} alt="Amricna" />
                  <img src={Paypal} alt="Paypal" />
                </div>

              </div>
            </div>
            : ""}

        </div>
      </div>

    </Layout>
  )
}

export default ShopingCart