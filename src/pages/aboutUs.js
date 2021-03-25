import * as React from "react"
import { Link } from "gatsby"
import Rec1095 from "../images/AboutUs/Rectangle1095.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Shippin from "../images/shipping.png"
import Money from "../images/Vector.png"
import Online from "../images/services.png"
import CustomerReview from "../components/Home/customerReview"


const AboutUs = (props) => {
  return (
    <Layout>
      <SEO title="blog" />
      <div className="flex justify-center">
        <div className="lg:w-5/6 xl:w-5/6 2xl:w-1/2 py-6 pl-2">

          <div className="border-l-4 rounded border-yellow-600 pl-4">
            <div className="md:flex ">
              <div className="md:w-2/3">
                <p className="text-2xl font-bold py-4">Welcome to King Song</p>
                <p className=" text-gray-400 py-4">
                  Sollicitudin scelerisque amet, cursus id fermentum, et nulla nam. In sit nunc aliquam bibendum
                  ullamcorper. Ac sit faucibus massa quam sodales etiam. Justo, scelerisque diam at diam eget quis
                  dignissim. Quis eget eu, sit facilisis quam pharetra. Nisl aliquam tempus fames quis diam urna sit
                  gravida accumsan. Lacus amet diam dignissim molestie in sed quis. Mauris ultricies eu, turpis sed
                  pellentesque. Massa erat viverra vel morbi auctor morbi arcu et. Hac neque, pellentesque ullamcorper
                  sit congue tempor sed. Pellentesque nunc risus faucibus vestibulum. Semper donec commodo arcu faucibus
                  quisque nec enim magna. Quisque mauris, nec donec mi dictum id massa, odio. Maecenas lectus in id
                  convallis cursus.

                </p>
                <p className=" text-gray-400 py-4">
                  Our support is available 10.00 – 18.00 GMT + 2 (Monday – Friday). We usually get back to you within 24
                  hours.
                </p>
              </div>
              <div className="md:w-1/3">
                <img className="" src={Rec1095} alt="King Song" />
              </div>
            </div>
            <div className="md:flex text-center py-4">
              <div className="p-2">
                <p className=" orange-color font-bold text-3xl">92%</p>
                <p className="p-2  font-bold">of excellent reviews</p>
                <p className="p-2 text-gray-400">You can find here all our reviews.
                  We have great service for our clients.
                  Rating is saying for
                  us!
                </p>
              </div>
              <div className="p-2">
                <p className=" orange-color font-bold text-3xl">1234+</p>
                <p className="p-2 font-bold">more sales</p>
                <p className="p-2 text-gray-400">We have a high quality products, so we have a big sales volumes. We
                  know all the
                  "novelties" on the
                  market. </p>
              </div>
              <div className="p-2">
                <p className=" orange-color font-bold text-3xl">100%</p>
                <p className="p-2 font-bold">happy clients</p>
                <p className="p-2 text-gray-400">We know what you want and our support team can help you find the best
                  product in our
                  range. </p>
              </div>
            </div>

          </div>

          {/*------------Shipping Section-------------*/}
          <div className="text-center bg-gray-100 p-8">
            <p className="font-bold text-2xl">Why Shop With Us?</p>

            <div className="flex justify-around ">
              <div className=" md:flex py-4 justify-between">

                <div
                  className="flex flex-col p-4 m-4 text-center items-center md:1/3 bg-white shadow border-l-4 rounded border-yellow-600">
                  <img className="h-20" src={Shippin} alt="Free Shipping " />
                  <p className="font-bold py-4">Free Shipping & Return</p>
                  <p>Free USA and Canada ground shipping on all orders</p>
                </div>

                <div
                  className="flex flex-col p-4 m-4 text-center items-center md:1/3 bg-white shadow border-l-4 rounded border-yellow-600 ">
                  <img className="h-20" src={Money} alt="Money" />
                  <p className="py-4 font-bold">Money Back Guarantee</p>
                  <p>Easy free returns if you don’t like products</p>
                </div>

                <div
                  className="flex flex-col p-4 m-4 text-center items-center md:1/3 border-l-4 bg-white shadow rounded border-yellow-600">
                  <img className="h-20" src={Online} alt="Online support " />
                  <p className="font-bold py-4">Online Support 24/7</p>
                  <p>We are constantly in touch to answer your all questions</p>
                </div>

              </div>
            </div>

          </div>

        {/*-----------Customer review---------------*/}
          <CustomerReview />

        </div>
      </div>

    </Layout>
  )
}

export default AboutUs