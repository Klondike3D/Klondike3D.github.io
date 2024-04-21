import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-seccolor to-maincolor p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}
      
      {/*<Fade bottom cascade>
        <div className="mt-10  flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-seccolor to-maincolor p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Performance</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">95+</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Accessibility</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Best Practices</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">SEO</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
        </div>
      </Fade>*/}

      <div className="mt-10 px-8">
        {/*<h2 className="text-black text-4xl font-semibold">PERFORMANCE</h2>*/}
        <h3 className="text-black text-6xl font-bold xxs:text-l xs:text-xl sm:text-3xl lg:text-4xl text-gradient bg-gradient-to-r from-seccolor to-maincolor">
          What are my hobbies?
        </h3>

        <p className="text-black font-normal mt-3 text-md xxs:text-md xs:text-md sm:text-md md:text-md lg:text-lg">
          My dad was always pationate about tech, and there's no doubt it rubbed off on me. I enjoy learning about tech, from retro computing to the
          cutting-edge. Since a young age, video games have been a big part of my life. My earliest experiences were on the PlayStation 1 with Spiro and Crash Bandicoot, and on the PC side, The Sims 2 on my family's PC. My favorite video games include Half-Life 1 and Call of Duty: World at War.
          I (soon will) work in IT and do 3D modelling and avatar commissions in my free time.
        </p>
      </div>
    </div>
  )
}

export default WorkPage
