import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'
import {motion} from "framer-motion"
import {fadeIn, textVariant} from "../utils/motion"
import {styles} from "../styles"


const Contact = () => {
  return (
    <>
    <motion.div variants={textVariant()}
    initial={{ color: "yellow" }}
    animate={{ color: "white" }}
    >
      <h2 className={styles.sectionHeadText}>
      Certificate.
      </h2>
    </motion.div>



    <div className="w-full flex h-full justify-center shadow-xl">
      <motion.div
      variants={fadeIn("","",0.1,1)}
      className="text-white shadow-md  shadow-stone-600 h-[250px] leading-[30px]
      flex justify-center items-center mt-10 sm:w-[800px] w-full"
      >
        <div className="carousel w-full h-full">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-full">
          <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full h-full">
          <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      </motion.div>
     
    </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact")
