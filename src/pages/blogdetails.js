import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShopHero from "../images/Shop/shophero.png"
import BlogCard1 from "../images/Blog/Rectangle1036.png"
import Off from "../images/Blog/Rectangle53.png"
import Facebook from "../images/Blog/facebook.png"
import Insta from "../images/Blog/insta.png"
import Play from "../images/Blog/play.png"
import Rec1039 from "../images/Blog/Rectangle1039.png"
import Fluent from "../images/Blog/fluent_tag-16-regular.png"
import Share from "../images/Blog/share.png"
import Rec1040 from "../images/Blog/Rectangle1040.png"
import Ellips from "../images/Blog/Ellipse5.png"


const BlogDetails = (props) => {
  return (
    <Layout>
      <SEO title="blog" />
      <div>
        <div className="">
          <div className="Shop-headder relative">
            <img className=" " src={ShopHero} alt="ShopHero" />
            <p className="text-white absolute top-1">Home / Shop / Electric Unicycles</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200">
            <p className="p-4 font-bold text-black text-2xl">What Components of an Electric Unicycle are the
              Heaviest?</p>
            <p className="p-4">by Rachid Farissi
              On January 02, 2021
              at 11:59 am
              no Comments</p>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="lg:w-5/6 xl:w-5/6 2xl:w-1/2 md:flex justify-around px-4 py-6">

                <div className="md:w-3/4 flex justify-around ">

                  <div className="text-gray-400  ">

                    <div className="p-4">
                      <img className=" " src={BlogCard1} alt="blogCard1 " />
                    </div>
                    <p className="p-4">
                      Amet, morbi congue id morbi ultricies at at. Sit amet leo, facilisi velit nascetur justo. Semper
                      id laoreet amet velit habitant nullam lectus tincidunt amet. Tincidunt habitasse faucibus diam
                      convallis nisl, libero orci adipiscing. Tincidunt quis dolor ac, et aliquam ut sollicitudin. Enim
                      feugiat commodo amet enim viverra. Porttitor lacus nullam posuere ullamcorper platea amet est
                      cursus vel.
                    </p>
                    <p className="p-4">
                      Venenatis ut tellus vel eu sodales amet. Amet vestibulum aliquet placerat sapien feugiat
                      pellentesque mollis aliquam. Eget diam amet, cras leo iaculis dui dictum euismod. Adipiscing donec
                      lectus nascetur donec eu ut integer nisi, amet. Felis tincidunt netus purus porttitor. Dui nibh
                      blandit erat pharetra et pharetra, in. Vitae nec etiam quis nulla. Risus nunc suspendisse ornare
                      amet tellus mi. Ut fermentum vitae, sed sed mauris, dolor, et diam massa. Pretium scelerisque
                      venenatis amet, egestas sed sit. Commodo urna, dictum cras pellentesque in.
                    </p>

                    <div className="bg-gray-100 text-black p-10">
                      <p className="font-bold ">
                        “What will be better than Electric Unicycle? I think, nothing!”
                      </p>
                      <p>Farissi</p>
                    </div>


                    <p className="p-4">Enim eget tincidunt faucibus eget sed diam sagittis. Scelerisque sed proin lorem
                      vitae risus mi
                      sagittis. Blandit pharetra et hendrerit augue mauris pellentesque amet purus. Enim amet, morbi
                      quis lectus. Mauris aliquet ut eget diam. Mauris elementum aenean eget velit id luctus nec,
                      convallis.
                      Bibendum at et massa feugiat pretium mauris nibh egestas. Amet dolor.</p>
                    <div className="md:flex">
                      <img className=" md:w-1/2" src={Rec1039} alt="blogCard1 " />
                      <img className="  md:w-1/2" src={Rec1040} alt="blogCard1 " />

                    </div>
                    <p className="p-4">Enim eget tincidunt faucibus eget sed diam sagittis. Scelerisque sed proin lorem
                      vitae risus mi
                      sagittis. Blandit pharetra et hendrerit augue mauris pellentesque amet purus. Enim amet, morbi
                      quis lectus. Mauris aliquet ut eget diam. Mauris elementum aenean eget velit id luctus nec,
                      convallis.
                      Bibendum at et massa feugiat pretium mauris nibh egestas. Amet dolor.</p>

                    <div className="flex justify-between py-4">
                      <div className="flex w-2/3">
                        <img className=" h-6" src={Fluent} alt="Fluent " />
                        <p>
                          Unicycle, accessories, electric
                        </p>
                      </div>
                      <div>
                        <img className=" " src={Share} alt="share " />
                      </div>
                    </div>
                    {/*-------*/}
                    <div className="p-4 border-b-2 border-t-2 flex border-gra-400">
                      <div className="pr-4">
                        <img className=" rounded-full   " src={Ellips} alt="blogCard1 " />
                      </div>
                      <div>
                        <strong className="text-black">
                          Rachid Farissi
                        </strong>
                        <p className="text-gray-400">
                          Author information. Maecenas et ullamcorper sem. Suspendisse sed magna vitae nibh interdum
                          condimenum. In ligula nunc, egestasac, ornare in libero.
                        </p>
                      </div>
                    </div>

                    {/*  --------------*/}
                    <div className="text-center pt-8 border-t-1">
                      <strong className="text-black"> Leave a Reply</strong>
                      <p>
                        Your email address will not be published.
                      </p>

                      <div className="md:flex py-4 justify-between">
                        <input className="border border-b-2 p-2 w-2/5 mr-4 border-gray-200 rounded " placeholder="Name" />
                        <orange-color className="border border-b-2 p-2 w-2/5 border-gray-200 rounded " placeholder="Email" />

                      </div>
                      <input className="border my-4 border-b-2 p-2 w-full border-gray-200 rounded "
                             placeholder="commit" />
                      <button type="button"
                              className="focus:outline-none w-1/4 rounded-full bg-yellow-600 text-sm text-white p-2  hover:bg-yellow-500">Post
                        Comment
                      </button>

                    </div>
                  </div>
                </div>

                {/*----------------------*/}
                <div className="md:w-1/4">

                  <div className="flex">

                    <input className="border border-b-2 p-2 w-3/4 border-gray-200 rounded " placeholder="Search" />
                    <button type="button"
                            className="focus:outline-none w-1/4 bg-yellow-600 text-sm text-white p-2  hover:bg-yellow-500">Go
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
                    <li className="text-yellow-600 py-2 font-semibold">Top 7 Electric Unicycles of 2020 Reviewed</li>
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
                        _________________
                      </div>
                      <p className="text-gray-400">Urna, ut non senectus scelerisque netus. Aliquam sit placerat sed
                        vestibulum magna aenean amet.</p>

                      <input className="border border-b-2 w-full p-2 my-2 border-gray-200 rounded "
                             placeholder="name" />
                      <input className="border border-b-2 w-full p-2 my-2 border-gray-200 rounded "
                             placeholder="Email" />

                      <button type="button"
                              className="focus:outline-none bg-yellow-600 text-sm text-white px-5 py-2 rounded-full  hover:bg-yellow-500">Subscribe
                      </button>
                    </div>

                    {/*  -----------*/}

                    <div className="p-4">
                      <strong>Follow us</strong>
                      <div>
                        _________________
                      </div>
                      <div className="flex justify-around p-4">
                        <div className="rounded-full px-4 py-2 bg-yellow-600">
                          <img className=" " src={Facebook} alt="facebook " />
                        </div>
                        <div className="rounded-full px-3 py-2.5 bg-yellow-600">

                          <img className=" " src={Insta} alt="insta " />
                        </div>
                        <div className="rounded-full py-3.5 px-2.5 bg-yellow-600">

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

export default BlogDetails