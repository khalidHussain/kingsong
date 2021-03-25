import * as React from "react"
import { Link } from "gatsby"
import "../components/shopcomponent/shop.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import KingSong1 from "../images/Rectangle20.png"
import StarGrp from "../images/Group162.png"
import KingSong2 from "../images/Rectangle20-1.png"
import KingSong3 from "../images/Rectangle20-2.png"
import KingSong4 from "../images/Shop/Rectangle20-4.png"
import KingSong5 from "../images/Shop/Rectangle20-5.png"
import Group from "../images/Shop/Group.png"
import Feather from "../images/Shop/feather_grid.png"
import ShopHero from "../images/Shop/shophero.png"
import Delete from "../images/Shop/delete.png"
import Edit from "../images/Shop/edit.png"
import { useState } from "react"

const Shop = () => {

  const [grid, setGrid] = useState(true)

  function gridhandel() {
    setGrid(!grid)
  }

  const [list, setList] = useState(false)
  const [addCart, setAddCart] = useState(false)

  function addcarthandel() {
    setAddCart(!addCart)
    console.log(addCart, "listner")
  }

  return (
    <Layout>
      <SEO title="Shop" />
      <div className="">

        <div className="">
          <div className="Shop-headder relative">
            <img className=" " src={ShopHero} alt="ShopHero" />
            <p className="text-white absolute top-1">Home / Shop / Electric Unicycles</p>
          </div>
        </div>
        {/*--------*/}
        <div className="flex justify-center p-4">
          <div className=" lg:w-5/6 xl:w-5/6 2xl:w-1/2 md:flex justify-between">

            {/*-------------Categories-------------*/}

            <div className="p-4 md:w-1/4">
              {/*-----Categories------*/}
              <div className="p-2">
                <p className="font-bold">Categories</p>
                <div className="Shop-line border-b-2  "></div>
                <div className="flex justify-between">
                  <p>Electric Unicycles</p>
                  <span>(5)</span>
                </div>
                <div className="flex justify-between">
                  <p>Accessories</p>
                  <span>(21)</span>
                </div>
              </div>
              {/*-----Price------*/}
              <div className="p-2">
                <p className="font-bold ">Price</p>
                <div className="Shop-line    "></div>
                <div>
                  <div className="border p-1 mt-4 flex">
                    <div className="circle-price"></div>
                    <div className="flex justify-center">
                      <div className="Shop-line-price    "></div>
                    </div>
                    <div className="circle-price"></div>
                  </div>
                  <div>
                    <p>Range: $250.00 - $623.00</p>
                  </div>
                </div>

                <div className="">
                  <div>
                    <div>

                    </div>
                  </div>
                </div>
              </div>

              {/*-----Max Speed------*/}
              <div className="p-2">
                <p className="font-bold">Categories</p>
                <div className="Shop-line border-b-2  "></div>
                <div className="flex justify-between items-center">
                  <p>18.6Mph - 30km/h</p>
                  <input type="checkbox" />
                </div>
                <div className="flex justify-between">
                  <p>31Mph - 50km/h</p>
                  <input type="checkbox" />
                </div>
              </div>

              {/*-----Categories------*/}
              <div className="p-2">
                <p className="font-bold">Categories</p>
                <div className="Shop-line border-b-2  "></div>
                <div className="flex justify-between items-center">
                  <p>264lbs - 120kg</p>
                  <input type="checkbox" />
                </div>
                <div className="flex justify-between items-center">
                  <p>330lbs - 150kg</p>
                  <input type="checkbox" />
                </div>
              </div>
            </div>

            {/*-------items-------*/}

            <div className="p-4 md:w-3/4">
              <div className="flex justify-between md:p-4">
                <div className="relative inline-block text-left">
                  <div>
                    <button type="button"
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                            id="options-menu" aria-expanded="true" aria-haspopup="true">
                      Sort by

                      <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20"
                           fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>

                  <div
                    class="origin-top-right absolute hidden right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div class="py-1" role="none">
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                         role="menuitem">Grids</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                         role="menuitem">Block</a>


                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <img onClick={() => {
                    setGrid(true)
                    setList(false)
                  }} className=" mr-4 p-1 h-10" src={Feather} alt="Hero img" />

                  <img onClick={() => {
                    setGrid(false)
                    setList(true)
                  }} className="p-2 h-10" src={Group} alt="Hero img" />
                </div>
              </div>

              {/*---------------Grid---------------*/}
              {grid ?
                <div className="flex justify-center  py-8">
                  <div className="lg:w-5/6 xl:w-5/6  justify-around pt-4">

                    <div className="md:flex justify-around items-center md:flex-wrap">

                      {/*-----------*/}
                      <div className="text-center py-4 items-center flex flex-col md:w-1/3">
                        <img className="  " src={KingSong1} alt="KingSong1" />
                        <p>
                          KingSong KS-14D
                        </p>
                        <p>
                          $786.88 <strong> $626.29</strong>
                        </p>
                        <img className="  " src={StarGrp} alt="Stat grp" />

                      </div>

                      {/*---------*/}
                      <div className="text-center py-4 items-center flex flex-col md:w-1/3">
                        <img className="  " src={KingSong3} alt="KingSong3" />
                        <p>
                          KingSong KS-16X
                        </p>
                        <p>
                          $1,968.90 <strong> $1,567.24</strong>
                        </p>
                        <img className="  " src={StarGrp} alt="Stat grp" />
                      </div>

                      {/*----------*/}
                      <div className="text-center py-4 items-center flex md:w-1/3 flex-col">
                        <img className="  " src={KingSong2} alt="KingSong2" />


                        <p>
                          KingSong KS-16X
                        </p>
                        <p>
                          $1,968.90 <strong> $1,567.24</strong>
                        </p>
                        <img className="  " src={StarGrp} alt="Stat grp" />


                      </div>

                      {/* -------------*/}
                      <div className="text-center py-4 items-center flex md:w-1/3 flex-col">
                        <img className="  " src={KingSong4} alt="KingSong3" />

                        <p className="pb-3">
                          KingSong KS-18XL
                        </p>
                        <button type="button"
                                className="focus:outline-none  md:w-1/2 md:float-right nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Add
                          to cart
                        </button>
                      </div>

                      {/*-----------*/}
                      <div className="text-center py-4 items-center flex md:w-1/3 flex-col">
                        <img className="  " src={KingSong5} alt="KingSong3" />
                        <p>
                          KingSong KS-16XS
                        </p>
                        <p>
                          $1,575.12 <strong> $1,102.58 </strong>
                        </p>
                        <img className="  " src={StarGrp} alt="Stat grp" />
                      </div>

                    </div>
                  </div>
                </div>


                : ""}
              {/* ----------List----------- */}
              {list ?
                <div className="flex justify-center  py-8">
                  <div className="lg:w-5/6 xl:w-5/6 justify-around pt-4">

                    <div className=" justify-around items-center ">

                      {/*-----------*/}
                      <div className=" md:flex p-4 items-center mb-4   border">
                        <img className="  " src={KingSong1} alt="KingSong1" />
                        <div className="p-4  ">

                          <p className="">
                            KingSong KS-14D
                          </p>
                          <p className="py-2">
                            $786.88 <strong> $626.29</strong>
                          </p>
                          <img className="  " src={StarGrp} alt="Stat grp" />
                          <p className="py-2">
                            The King Song 14D electric unicycle is a perfect choice for riders who has a lower budget
                            but
                            still want an electric unicycle which is comfortable, practical and powerful.
                          </p>
                          <div className="flex justify-between w-full p-2">
                            <button type="button"
                                    className="focus:outline-none  md:w-1/2 md:float-right nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Add
                              to cart
                            </button>
                            <Link
                              className=" border-b-2 border-gray-200 p-2 m-0  hover:rounded-full text-sm    hover:bg-gray-100 "
                              to="/electronicUnicycles">
                              view details
                            </Link>
                            {/*<a herf="#"> view details</a>*/}
                          </div>
                        </div>
                      </div>

                      {/*---------*/}
                      <div className=" md:flex p-4 items-center mb-4   border">
                        <img className="  " src={KingSong3} alt="KingSong3" />
                        <div className="p-4  ">

                          <p className="">
                            KingSong KS-16X
                          </p>
                          <p className="py-2">
                            $1,968.90 <strong> $1,567.24</strong>
                          </p>
                          <img className="  " src={StarGrp} alt="Stat grp" />
                          <p className="py-2">
                            The King Song 14D electric unicycle is a perfect choice for riders who has a lower budget
                            but
                            still want an electric unicycle which is comfortable, practical and powerful.
                          </p>
                          <div className="flex justify-between w-full p-2">
                            <button onClick={addcarthandel} type="button"
                                    className="focus:outline-none  md:w-1/2 md:float-right nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Add
                              to cart
                            </button>

                            <Link
                              className=" border-b-2 border-gray-200 p-2 m-0  hover:rounded-full text-sm    hover:bg-gray-100 "
                              to="/electronicUnicycles">
                              view details
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/*----------*/}
                      <div className=" md:flex p-4 items-center mb-4  border">
                        <img className="  " src={KingSong2} alt="KingSong2" />
                        <div className="p-4  ">

                          <p className="">
                            KingSong KS-16X
                          </p>
                          <p className="py-2">
                            $1,968.90 <strong> $1,567.24</strong>
                          </p>
                          <img className="  " src={StarGrp} alt="Stat grp" />
                          <p className="py-2">
                            The King Song 14D electric unicycle is a perfect choice for riders who has a lower budget
                            but
                            still want an electric unicycle which is comfortable, practical and powerful.
                          </p>
                          <div className="flex justify-between w-full p-2">
                            <button type="button"
                                    className="focus:outline-none  md:w-1/2 md:float-right nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Add
                              to cart
                            </button>
                            <Link
                              className=" border-b-2 border-gray-200 p-2 m-0  hover:rounded-full text-sm    hover:bg-gray-100 "
                              to="/electronicUnicycles">
                              view details
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* -------------*/}
                      <div className=" md:flex p-4 items-center mb-4  border">
                        <img className="  " src={KingSong4} alt="KingSong3" />
                        <div className="p-4  ">

                          <p className="">
                            KingSong KS-18XL
                          </p>
                          <p className="py-2">
                            $786.88 <strong> $626.29</strong>
                          </p>
                          <img className="  " src={StarGrp} alt="Stat grp" />
                          <p className="py-2">
                            The King Song 14D electric unicycle is a perfect choice for riders who has a lower budget
                            but
                            still want an electric unicycle which is comfortable, practical and powerful.
                          </p>
                          <div className="flex justify-between w-full p-2">
                            <button type="button"
                                    className="focus:outline-none  md:w-1/2 md:float-right nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Add
                              to cart
                            </button>
                            <a herf="#"> view details</a>
                          </div>
                        </div>
                      </div>

                      {/*-----------*/}
                      <div className=" md:flex p-4 items-center mb-4  border">
                        <img className="  " src={KingSong5} alt="KingSong3" />
                        <div className="p-4  ">

                          <p className="">
                            KingSong KS-16XS
                          </p>
                          <p className="py-2">
                            $1,575.12 <strong> $1,102.58 </strong>
                          </p>
                          <img className="  " src={StarGrp} alt="Stat grp" />
                          <p className="py-2">
                            The King Song 14D electric unicycle is a perfect choice for riders who has a lower budget
                            but
                            still want an electric unicycle which is comfortable, practical and powerful.
                          </p>
                          <div className="flex justify-between w-full p-2">
                            <button type="button"
                                    className="focus:outline-none  md:w-1/2 md:float-right nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Add
                              to cart
                            </button>
                            <Link
                              className=" border-b-2 border-gray-200 p-2 m-0  hover:rounded-full text-sm    hover:bg-gray-100 "
                              to="/electronicUnicycles">
                              view details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                : ""}
            </div>
          </div>
        </div>


        {/*-------------------add carit-------------------*/}
        {addCart ?
          <div className="flex justify-around p-8 fixed top-0 w-250px h-full right-0 bg-white shadow">
            <div className="">
              <div className="flex justify-around pb-7">
                <button type="button"
                        className="focus:outline-none  text-sm  py-2.5 px-5 rounded-full  hover:bg-gray-300">Clear All
                </button>
                <button onClick={addcarthandel} type="button"
                        className="focus:outline-none  text-sm  py-2.5 px-5 rounded-full hover:bg-gray-300">Close
                </button>
              </div>

              <div className="flex pb-14">

                <div className="flex justify-around">
                  <img className=" h-32 mb-2 " src={KingSong3} alt="KingSong3" />

                </div>
                <div className="flex ">
                  <div className="flex flex-col justify-around ">
                    <p className="mb-2">
                      KingSong KS-S18
                    </p>
                    <div className="w-2/3 flex justify-center items-center bg-gray-100 rounded ">
                      <button className="font-bold  p-2">-</button>
                      <input className="p-2 m-1 bg-white rounded w-full" type="number" id="quantity" name="quantity"
                             min="1" />
                      <button className="font-bold  p-2">+</button>
                    </div>

                    <p>
                      $393.78
                    </p>
                  </div>
                  <div className="p-4">
                    <img className=" h-3.5 mb-4 " src={Delete} alt="delete" />
                    <img className=" h-3.5 mb-2 " src={Edit} alt="edit" />


                  </div>
                </div>

              </div>

              <div className="border-b-2 border-gray-200 w-full"></div>

              <div className="flex justify-around pt-4">
                <Link to="/shopingCart">
                  <button type="button"
                          className="focus:outline-none bg-yellow-600 text-sm text-white py-2.5 px-5 rounded-full  hover:bg-yellow-500">View
                    cart
                  </button>
                </Link>
                <button type="button"
                        className="focus:outline-none bg-gray-600 text-sm text-white py-2.5 px-5 rounded-full hover:bg-gray-500">Checkout
                </button>
              </div>
              <div className="text-center p-4 bottom-0">
                <p className="text-gray-300">Free Shipping on all
                  <strong className="text-gray-700"> orders over $75</strong></p>
              </div>

            </div>
          </div>
          : ""}

      </div>

    </Layout>
  )
}
export default Shop
