import * as React from "react"
import { Link } from "gatsby"
import Video from "../../../images/Shop/Group1026.png"
import StarGrp from "../../../images/Group162.png"
import Checq from "../../../images/Shop/Grouptick.png"
import Doller from "../../../images/Shop/fa-solid_comment-dollar.png"
import Deliver from "../../../images/Shop/fa-solid_headset.png"
import Service from "../../../images/Shop/fa-solid_shipping-fast.png"


const Discription = ({ siteTitle }) => (
  <div className="">
    <div className=" border-t-2 border-gray-300 md:flex justify-between py-2">

      <div>
        <button
          className="p-2 font-bold border-t-2 border-transparent hover:border-yellow-600 cursor-pointer">Discription
        </button>
      </div>
      <div>
        <button className="p-2 font-bold border-t-2 border-transparent hover:border-yellow-600">Specification</button>
      </div>
      <div>
        <button className="p-2 font-bold border-t-2 border-transparent hover:border-yellow-600">Shipping & Warranty
        </button>
      </div>
      <div>
        <button className="p-2 font-bold border-t-2 border-transparent hover:border-yellow-600">FAQ</button>
      </div>
      <div>
        <button className="p-2 font-bold border-t-2 border-transparent hover:border-yellow-600">Videos</button>
      </div>
      <div>
        <button className="p-2 font-bold border-t-2 border-transparent hover:border-yellow-600">Reviews</button>
      </div>
    </div>

    <div className="p-4 text-gray-400">
      <p className="">It is reliable, easy to learn and suitable for those who want to go to work every day. This 420W electric
        unicycle offers a range of 30-40 km and a top speed of 30 km/h on a single charge. The King song 14D is a fun,
        lightweight and fast. The bike weighs 120 kg, has a climbing angle of 30 degrees and has rain protection which
        can use in light or wet conditions. Kingsong 14D electric unicycle has a telescopic handle to carry easily when
        not in use. A convenient USB Power Supply port allows you to charge other devices on the go.
        It has an atmospheric LED, 4 built-in speakers to listen to your favorite songs, and charging time of just 3.5
        hours. The kingSong app allows you to adjust LED lighting and provide performance data. From fast acceleration
        to smooth ending, the 14D never disappoints.</p>
    </div>

    <div className="py-6">
      <p className="font-bold py-4">
        Specification
      </p>
      <div className=" md:flex justify-around p-4 ">
        <div className="md:w-1/2">
          <div className=" py-1 bg-gray-100">
            <strong>Wheel Size: </strong><label className="text-gray-400"> 14-Inch</label>
          </div>
          <div className="py-1">
            <strong>Max Range: </strong><label className="text-gray-400"> 15-20</label>
          </div>
          <div className=" py-1 bg-gray-100">
            <strong>Motor Type: </strong><label className="text-gray-400"> brushless motor</label>
          </div>
          <div className="py-1">
            <strong>Charging Time:: </strong><label className="text-gray-400"> 3h</label>
          </div>
          <div className="py-1  bg-gray-100">
            <strong>Dimensions: </strong><label className="text-gray-400"> 18.7*17.2*7.95</label>
          </div>
          <div className="py-1">
            <strong>Charger-Input: </strong><label className="text-gray-400"> AC 80~240V</label>
          </div>
          <div className=" py-1 bg-gray-100">
            <strong>Bluetooth: </strong><label className="text-gray-400"> 4.0 Bluetooth</label>
          </div>

          <div className="py-1">
            <strong>Tax: </strong><label className="text-gray-400"> calculated in checkout</label>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className=" py-1 bg-gray-100">
            <strong>Color: </strong> <label className="text-gray-400"> Black/White</label>
          </div>
          <div className="py-1">
            <strong>Max Speed: </strong> <label className="text-gray-400"> 18.6 mph - 30km/h </label>
          </div>
          <div className=" py-1 bg-gray-100">
            <strong>Battery:</strong> <label className="text-gray-400"> 340Wh/420Wh </label>
          </div>
          <div className="py-1">
            <strong>Motor Power:</strong> <label className="text-gray-400"> 800W </label>
          </div>
          <div className="py-1  bg-gray-100">
            <strong>Weight: </strong> <label className="text-gray-400"> 1 30 Lbs -13.6 Kg </label>
          </div>
          <div className="py-1">
            <strong>Usage Temperature:</strong> <label className="text-gray-400"> 10°C～60°C </label>
          </div>
          <div className="py-1  bg-gray-100">
            <strong>Charger-Output:</strong> <label className="text-gray-400"> DC 67.2V, 2 A </label>
          </div>

          <div className="py-1">
            <strong>Mobile App:</strong> <label className="text-gray-400"> Android, iOS</label>
          </div>
        </div>


      </div>
    </div>


    {/*  ----------------*/}
    <div>
      <strong>Shipping & Warranty</strong>
      <p>
        To qualify for a warranty it is imperative you keep your original receipts and documents. We offer a 12-month
        limited warranty that covers the original purchase should any defects or problems result from normal use of your
        scooter. These 12 months are from the date of purchase. But we also offer 12 months of free technical support.
        That support includes any repairs, spare parts or other service needs. We also offer a six-month warranty for
        used
        certified items. (Unfortunately we cannot offer a warranty for items modified by customers). Our warranties do
        not
        cover physical damage resulting from a road accident so travel smart and stay safe.
      </p>
    </div>


    {/*  -------FAQ---------*/}
    <div className="py-6">

      <strong className="py-4">FAQ</strong>
      <div className="py-2">
        <button className="bg-gray-100 p-4 flex justify-between w-full">
          <p>
            How Do I Order Wholesale?

          </p>
          <p className="text-2xl font-bold">-</p>
        </button>
        <p className="p-4 text-gray-400">
          If you’d like to become a dealer and resell our products through your own website or physical store, we can
          provide you these items at wholesale prices. If you want to order wholesale for any other reason, we might be
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


    {/*  --------Video---------*/}

    <div className="py-6">
      <strong className="py-4">
        Video
      </strong>
      {/*<img src={Video} ref="Video" />*/}
      <img className=" w-screen py-4" src={Video} alt="video" />

    </div>

    {/*---------Review-----------*/}
    <div className="py-6 px-4">
      <strong>
        Reviews
      </strong>

      <div className="py-4 text-gray-400 border-b-2 border-gray-100">
        <img className="  " src={StarGrp} alt="Stat grp" />
        <div className="flex justify-between py-4">
          <p>
            Alex Whiteman on January 03, 2021
          </p>
          <p className="text-gray-400">
            Report as Inappropriate
          </p>
        </div>
        <p className="font-bold text-black">
          This is the best E-Unicycle!
        </p>
        <p className="py-4">
          Curabitur quis nulla enim. Nulla id quam varius, faucibus tellus ut, elementum orci. Integer nec eros diam.
          Nulla augue dolor, fringilla eu pellentesque in, suscipit ut nunc. Donec ligula velit, facilisis a risus nec,
          porttitor cursus neque. Nam a quam turpis. Suspendisse ut rhoncus eros, quis finibus massa. Nunc odio justo,
          tempor vel sagittis sit amet, consectetur vel orci.
        </p>
        <div className="py-4 flex">
          <img className="pr-4  " src={Checq} alt="Stat grp" />

          <p>
            Verified purchase
          </p>
        </div>
      </div>

      <div className="py-4 text-gray-400 border-b-2 border-gray-100">
        <img className="  " src={StarGrp} alt="Stat grp" />
        <div className="flex justify-between py-4">
          <p>
            Alex Whiteman on January 03, 2021
          </p>
          <p className="text-gray-400">
            Report as Inappropriate
          </p>
        </div>
        <p className="font-bold text-black">
          This is the best E-Unicycle!
        </p>
        <p className="py-4">
          Curabitur quis nulla enim. Nulla id quam varius, faucibus tellus ut, elementum orci. Integer nec eros diam.
          Nulla augue dolor, fringilla eu pellentesque in, suscipit ut nunc. Donec ligula velit, facilisis a risus nec,
          porttitor cursus neque. Nam a quam turpis. Suspendisse ut rhoncus eros, quis finibus massa. Nunc odio justo,
          tempor vel sagittis sit amet, consectetur vel orci.
        </p>
        <div className="py-4 flex">
          <img className="pr-4  " src={Checq} alt="Stat grp" />

          <p>
            Verified purchase
          </p>
        </div>
      </div>

      <div className="flex justify-between py-6">
        <button type="button"
                className="focus:outline-none bg-yellow-600 text-sm text-white py-2.5 px-5 rounded-full  hover:bg-yellow-500">Write
          a review
        </button>

        <button type="button"
                className="focus:outline-none  text-sm  py-2.5 px-5 rounded-full  hover:bg-gray-100">Load More
        </button>
      </div>
    </div>

    {/*  -----------------------*/}

    <div className="md:flex p-4 justify-evenly bg-gray-100">
      <div className="md:flex justify-around">
        <img className="  px-4" src={Doller} alt="video" />
        <p>
          Free Shipping & Return
        </p>
      </div>
      <div className="md:flex justify-around">
        <img className="  px-4" src={Deliver} alt="video" />
        <p>
          Money Back Guarantee
        </p>
      </div>
      <div className="md:flex justify-around">
        <img className="  px-4" src={Service} alt="video" />
        <p>
          Online Support 24/7
        </p>
      </div>
    </div>
  </div>


)

export default Discription
