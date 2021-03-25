import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShopHero from "../images/Shop/shophero.png"

const Suport = (props) => {
  return (
    <Layout>
      <SEO title="blog" />
      <div className="Shop-headder relative">
        <img className=" " src={ShopHero} alt="ShopHero" />
        <p className="text-white absolute top-0 md:top-1">Home / Support</p>
      </div>
      <div className="flex justify-center">
        <div className="lg:w-5/6 xl:w-5/6 2xl:w-1/2 py-6 pl-2">
          <div className="flex flex-col justify-center items-center py-6">
            <p className="font-bold text-2xl py-4">
              Hi, how can we help you?
            </p>

            <div className="flex w-full pb-6 justify-center">
              <input className="border border-b-2 p-4 w-5/12  border-gray-200 rounded "
                     placeholder="Search topics, products..." />
              <button type="button"
                      className="focus:outline-none bg-yellow-600 text-sm text-white p-4  hover:bg-yellow-500">Go
              </button>
            </div>

          </div>

          <div className="md:flex justify-around">
            {/*  -------FAQ---------*/}
            <div className="py-6 bg-gray-100 md:w-7/12 pl-2">

              <div className="px-6 yx-4 font-bold">Popular FAQs</div>
              <div className="p-6">
                <div className="bg-white shadow">
                  <button className=" px-4 pt-4 flex justify-between w-full">
                    <p>
                      How Do I Order Wholesale?
                    </p>
                    <p className="text-2xl font-bold">-</p>
                  </button>
                  <p className="p-4  text-gray-400">
                    If you’d like to become a dealer and resell our products through your own website or physical store,
                    we can
                    provide you these items at wholesale prices. If you want to order wholesale for any other reason, we
                    might be
                    able to help you with discounts.
                  </p>
                </div>

                <div className="py-2">
                  <button className="bg-gray-100 p-4 flex justify-between w-full">
                    <p>
                      How Do I Order Wholesale?
                    </p>
                    <p className="text-2xl font-bold">+</p>
                  </button>

                </div>
                <div className="py-2">
                  <button className="bg-gray-100 p-4 flex justify-between w-full">
                    <p>
                      How Do I Order Wholesale?

                    </p>
                    <p className="text-2xl font-bold">+</p>
                  </button>

                </div>

              </div>
              <div className="border-l-4 border-yellow-600 p-4">
                <p className="text-2xl font-bold py-4">
                  Technical Support
                </p>
                <p className="text-gray-400">
                  Due to the ongoing circumstances surrounding COVID-19, our phone staff has been limited, for faster
                  response please use the below form to email us or use the blue help button in the right hand corner of
                  the page to chat with one of our team members. Thank you for your patience during this time.Due to the
                  ongoing circumstances surrounding COVID-19, our phone staff has been limited, for faster response
                  please use the below form to email us or use the blue help button in the right hand corner of the page
                  to chat with one of our team members. Thank you for your patience during this time.
                </p>
              </div>

            </div>


            {/*-----------form------------*/}
            <div className="flex  md:w-4/12">
              <div className="p-6 bg-gray-100">
                <p className="font-bold py-4">Send us a Message</p>
                <p className="text-gray-400">Write now and we will reply as soon as possible. Thank you for
                  waiting!</p>
                <div className="items-center flex flex-col ">
                  <input className="focus:outline-none border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                         placeholder="Full Name" type="text" />
                  <input className="focus:outline-none border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                         placeholder="Email" type="email" />
                  <input className="focus:outline-none border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                         placeholder="Model*" type="number" />
                  <input className="focus:outline-none border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                         placeholder="Date of Purchase *" type="text" />
                  {/*----------------*/}
                  <div className="custom-select w-full">
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

                  {/*---------*/}
                  <input className="focus:outline-none border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                         placeholder="Message" type="text" />
                  {/*-----*/}

                  <p className="py-2">Do you still have the original box? *</p>
                  <div className="text-gray-400 flex justify-between w-full pb-6">
                    <div className="w-1/2">
                      <input className="pr-3" type="radio" id="yes" name="items" value="yes" />
                      <label htmlFor="yes">Yes</label>
                    </div>
                    <div className="w-1/2">
                      <input className="pr-3" type="radio" id="no" name="items" value="no" />
                      <label htmlFor="no">No</label>
                    </div>
                  </div>

                  {/*----------*/}
                  <button type="button"
                          className="focus:outline-none w-full nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Submit
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Suport