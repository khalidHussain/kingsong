import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HeroImg from "../images/banner.png"
import Money from "../images/Vector.png"
import Shippin from "../images/shipping.png"
import Rec1 from "../images/Rectangle43.png"
import Rec2 from "../images/Rectangle44.png"
import Rec3 from "../images/Rectangle45.png"
import Img from "../images/img1.png"
import Online from "../images/services.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopHeader from "./header/topHeader"
import ItemsSec from "../components/Home/itemsSec"
import CustomerReview from "../components/Home/customerReview"
import BestSeller from "../components/Home/bestSeller"
import Treanding from "../components/Home/treanding"

const IndexPage = (props) => {
  return (

    <Layout>
      {/*<TopHeader/>*/}
      <SEO title="Home" />
      {/*--------Hero img---------*/}
      <div className="relative ">
        <img className="w-screen " src={HeroImg} alt="Hero img" />
        {/*<button className=" text-white font-bold rounded-full   nav-top-main position-class">Buy Now</button>*/}
      </div>

      {/*------------Shipping Section-------------*/}
      <div className="flex justify-center bg-gray-100 p-8">
        <div className="lg:w-5/6 xl:w-5/6 2xl:w-1/2 md:flex p-4 justify-around">

          <div className="flex flex-col p-4 text-center items-center md:1/3">
            <img className="h-20" src={Shippin} alt="Free Shipping " />
            <p className="font-bold py-4">Free Shipping & Return</p>
            <p>Free USA and Canada ground shipping on all orders</p>
          </div>

          <div className="flex flex-col p-4 text-center items-center md:1/3 ">
            <img className="h-20" src={Money} alt="Money" />
            <p className="py-4 font-bold">Money Back Guarantee</p>
            <p>Easy free returns if you don’t like products</p>
          </div>

          <div className="flex flex-col p-4 text-center items-center md:1/3">
            <img className="h-20" src={Online} alt="Online support " />
            <p className="font-bold py-4">Online Support 24/7</p>
            <p>We are constantly in touch to answer your all questions</p>
          </div>

        </div>
      </div>

      {/*-----------Easy to take on a trip Sec----------*/}
      <div className="p-4  ">
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl pb-4">Easy to take on a trip</h2>
          <p className="w-2/3">
            Design is very portable & convenient. This is very compact enough to fit in a gym locker or under a car
            seat,
            because have foldable pedals.
          </p>
        </div>
        <div className="flex justify-center items-center ">

          <img className=" " src={Img} alt="item img" />
        </div>


      </div>

      {/*  ------------------------------*/}
      <ItemsSec />
      <CustomerReview />
      <BestSeller heading="Our Bestseller" text=" Morbi ultricies egestas sed ipsum sagittis ligula potenti odio quis. Donec eu pharetra lectus scelerisque
            morbi pulvinar. Sed libero tristique ut vel" />
      <Treanding />

    </Layout>
  )
}

export default IndexPage
