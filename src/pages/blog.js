import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShopHero from "../images/Shop/shophero.png"
import BlogCard from "../components/blog/blogCard"
import Ks18 from "../images/Blog/ks18.png"
import Ks18xl from "../images/Blog/ks18xl.png"
import Ks140 from "../images/Blog/ks140.png"
import Ks165 from "../images/Blog/ks165.png"
import Ks20off from "../images/Blog/20off.png"
import Off from "../images/Blog/Rectangle53.png"
import Facebook from "../images/Blog/facebook.png"
import Insta from "../images/Blog/insta.png"
import Play from "../images/Blog/play.png"

const Blog = (props) => {
  return (
    <Layout>
      <SEO title="blog" />
      <div>
        <div className="">
          <div className="Shop-headder relative">
            <img className=" " src={ShopHero} alt="ShopHero" />
            <p className="text-white absolute top-0 md:top-1">Home / Blog</p>
          </div>

          <div>
            <div className="flex justify-center">
              <div className="lg:w-5/6 xl:w-5/6 2xl:w-1/2 md:flex  py-6">
                <div className="md:w-3/4 ">
                  <div className=" flex flex-wrap justify-around">
                    <BlogCard src={Ks140} alt="Ks 140D" date="Farissi + January 02, 2021"
                              title="Top 7 Electric Unicycles of 2020 Reviewed" />
                    <BlogCard src={Ks18xl} alt="Ks 140D" date="Farissi + January 02, 2021"
                              title="What makes a “good” Electric Unicycles?" />
                    <BlogCard src={Ks165} alt="Ks 140D" date="Farissi + January 02, 2021"
                              title="Comparing the King Song KS-14D and KS-16XL" />
                    <BlogCard src={Ks18} alt="Ks 140D" date="Farissi + January 02, 2021"
                              title="What Components of an Unicycle are the Heaviest?" />
                    <BlogCard src={Ks20off} alt="Ks 140D" date="Farissi + January 02, 2021"
                              title="Top 7 Electric Unicycles of 2020 Reviewed" />
                    <BlogCard src={Ks140} alt="Ks 140D" date="Farissi + January 02, 2021"
                              title="Top 7 Electric Unicycles of 2020 Reviewed" />
                  </div>

                  <div>
                    <div className="flex text-gray-400 justify-center pt-4">
                      <button className=" p-4 pr-4 focus:outline-none "> &laquo; Previous</button>
                      <button className=" p-4 focus:outline-none ">Next &raquo;</button>
                    </div>
                  </div>

                </div>

                {/*----------------------*/}
                <div className="md:w-1/4">
                  <div className="flex">
                    <input className="border border-b-2 py-2 w-3/4  border-gray-200 rounded " placeholder="Search" />
                    <button type="button"
                            className="focus:outline-none w-1/4 nav-top-main text-sm text-white p-2  hover:bg-yellow-600">Go
                    </button>
                  </div>
                  <div className="flex p-4">
                    <p>
                      Recent posts
                    </p>
                    <div className="  text-gray-400 h-1 w-1/2">
                    </div>
                  </div>
                  <ul className="p-4">
                    <li className="orange-color py-2 font-semibold">Top 7 Electric Unicycles of 2020 Reviewed</li>
                    <li className=" py-2 font-semibold">Comparing the King Song KS-14D and KS-16XL</li>
                    <li className=" py-2 font-semibold">What makes a “good” Electric Unicycles?</li>
                    <li className=" py-2 font-semibold">What Components of an Electric Unicycle are the
                      Heaviest?
                    </li>
                  </ul>
                  <div>
                    {/*------*/}
                    <div className="p-4">
                      <strong>Subscribe news</strong>
                      <div>
                        {/*_________________*/}
                      </div>
                      <p className="text-gray-400">Urna, ut non senectus scelerisque netus. Aliquam sit placerat sed
                        vestibulum magna aenean amet.</p>

                      <input className="border border-b-2 p-2 w-full my-2 border-gray-200 rounded "
                             placeholder="name" />
                      <input className="border border-b-2 p-2 w-full my-2 border-gray-200 rounded "
                             placeholder="Email" />

                      <button type="button"
                              className="focus:outline-none nav-top-main text-sm text-white px-5 py-2 rounded-full  hover:bg-yellow-600">Subscribe
                      </button>
                    </div>

                    {/*  -----------*/}

                    <div className="p-4">
                      <strong>Follow us</strong>
                      <div>
                        _________________
                      </div>
                      <div className="flex justify-around p-4">
                        <div className="rounded-full px-4 py-2 nav-top-main hover:bg-yellow-600">
                          <img className=" " src={Facebook} alt="facebook " />
                        </div>
                        <div className="rounded-full px-3 py-2.5 nav-top-main hover:bg-yellow-600">

                          <img className=" " src={Insta} alt="insta " />
                        </div>
                        <div className="rounded-full py-3.5 px-2.5 nav-top-main hover:bg-yellow-600">

                          <img className=" " src={Play} alt="play " />
                        </div>
                      </div>

                      {/*-------*/}
                      <div className="flex  p-2">
                        <div className=" ">
                          <img className=" " src={Off} alt="Off " />
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="btn-left1">
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Blog