import * as React from "react"
import { Link } from "gatsby"

const BlogCard = (props) => {
  return (


    <div className="relative rounded shadow-md h-64 bg-white my-2">
      <div className="">
        <img className=" z-10 h-40 mb-2 " src={props.src} alt={props.alt} />
      </div>
      <div className="flex justify-center bg-green-500 ">
        <div className="absolute bg-white top-24 left-6 text-center p-4 w-5/6 " >
          <p className="text-gray-400">{props.date}</p>
          <p className="  py-4">{props.title}</p>

          <Link className="orange-color  float-right hover:bg-gray-100 rounded-full " to="/blogdetails">Read More </Link>
        </div>
      </div>

    </div>
  )
}

export default BlogCard
