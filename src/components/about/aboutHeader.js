import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/snoot.webp"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-96 m-4">
          <img alt="Image" src={Image3}></img>
        </div>
        <div className="mt-10 px-8">
          <h1 className="font-bold text-6xl text-black text-gradient bg-gradient-to-r from-seccolor to-maincolor">
            Who am I?
          </h1>
          <br></br>
          <h2 className="text-black text-xl font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-xl lg:text-xl">
            I'm a 3D-artist based in the US. I mostly work with the Fluffy Dog base by Irix. I make clothing and other accessories as well as make edits to the base to fit your needs.
          </h2>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
