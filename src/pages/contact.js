import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Amico from "../images/AboutUs/amico.png"
import Mail from "../images/AboutUs/mail.png"
import Phone from "../images/AboutUs/phone.png"
import Time from "../images/AboutUs/time.png"

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <div className="flex justify-center">
      <div className="lg:w-5/6 xl:w-5/6 2xl:w-1/2 py-6 pl-2">

        {/*----Get in touch----*/}
        <div className="md:flex p-4  ">
          <div className=" md:w-2/3 border-l-4 border-yellow-600 pl-2 ">
            <p className="text-2xl font-bold p-4 ">Get In Touch</p>
            <p className="text-gray-400 p-4">
              Due to the ongoing circumstances surrounding COVID-19, our phone staff has been limited, for faster
              response please use the below form to email us or use the blue help button in the right hand corner of the
              page to chat with one of our team members. Thank you for your patience during this time.
            </p>
          </div>
          <div className="w-1/3">
            <img className="" src={Amico} alt="Amico " />
          </div>
        </div>

        {/*  -------Form Sec-------*/}

        <div className="md:flex md:justiy-between">
          <div className="flex  md:w-1/2">
            <div className="p-6 bg-gray-100">
              <p className="font-bold">Send us a Message</p>
              <p className="text-gray-400">Write now and we will reply as soon as possible. Thank you for waiting!</p>
              <div className="items-center flex flex-col ">
                <input className="focus:outline-none border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                       placeholder="Full Name" type="text" />
                <input className="focus:outline-none border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                       placeholder="Email" type="email" />
                <input className="focus:outline-none border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                       placeholder="Phone Number" type="number" />
                <input className="focus:outline-none border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                       placeholder="Subject" type="text" />
                <input className="focus:outline-none border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                       placeholder="Message" type="text" />
                <button type="button"
                        className="focus:outline-none w-1/4 nav-top-main rounded-full text-sm text-white p-2  hover:bg-yellow-500">Submit
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="btn-left">
              </div>
            </div>
          </div>

          {/*------------*/}
          <div className="flex w-1/2 px-4 justify-center  items-center">
            {/*<div className="w-1/6">*/}
              <div className="a  text-2xl">Quick contact</div>
            {/*</div>*/}

            <div className="w-5/6 text-gray-400">
              <div className="flex border-b-2 border-gray-300 p-4">
                <img className="pr-4" src={Phone} alt="phone " />
                <p><strong>Call on</strong> +180 123 123 123</p>
              </div>

              <div className="flex border-b-2 border-gray-300 p-4">
                <img className="pr-4" src={Mail} alt="mail " />
                <p><strong> Mail to</strong> info@kingsong.co</p>
              </div>


              <div className="flex border-b-2 border-gray-300 p-4">
                <img className="pr-4" src={Time} alt="time " />
                <p><strong>We work</strong> 24/7h 7 days a week</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>


  </Layout>
)

export default Contact
