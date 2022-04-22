import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import '../parent-styles/slidebar.css'
import s1 from '../assets/23_kollaj17042020222-Copy-1.jpg'
import s2 from '../assets/bloom.jpg'
import s3 from '../assets/forum55.jpg'
import s4 from '../assets/Screenshot_211.jpg'
import s5 from '../assets/slayd_kollaj17-tile.jpg'
import s6 from '../assets/UNEC-banner-1280x436-sayt-ucun-1.jpg'
import s7 from '../assets/YENI-KORPUS-ACILIS-tile.jpg'
export const Slidebar=()=>{
    const [currentImage,setCurrentImage]=React.useState(0)
    const slide_image_sources=[s1,s2,s3,s4,s5,s6,s7]
    const currentSlide=(n)=>{
        setCurrentImage(prev=>{
            let copyPrev=prev
            copyPrev=n==="next"?copyPrev+1:n==="prev"?copyPrev-1:n
            return copyPrev>slide_image_sources.length-1?0:copyPrev<0?slide_image_sources.length-1:copyPrev
        })
    }
    React.useEffect(()=>{
        setInterval(currentSlide("next"),200)
    },[])
    const imgs=slide_image_sources.map((el,i)=>{
        return (
        <div key={i} className={`single-slide-img-wrapper slide-img-${i+1} fadein`}>
            <div className="txt-link">
                <div className="txt"></div>
                <div className="link"></div>
            </div>
            <img src={`${el}`}/>
        </div>
        )
    })
    return (
        <section className="slidebar">
            <div className="slide-wrapper">
                <div className="all-slide-img-wrapper">
                    {imgs[currentImage]}
                </div>
                <span onClick={()=>currentSlide("prev")} className="prev"><FaAngleLeft icon="fa-solid fa-angle-left" /></span>
                <span onClick={()=>currentSlide("next")} className="next"><FaAngleRight icon="fa-solid fa-angle-right" /></span>
                <div className="slider-dots">
                    {slide_image_sources.map((_,i)=><span key={i} onClick={()=>currentSlide(i)} className={`dot ${i===currentImage?`active`:``}`}></span>)}
                </div>
            </div>
        </section>
    )
}