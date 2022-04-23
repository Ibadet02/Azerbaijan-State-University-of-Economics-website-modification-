import React from "react";
import '../parent-styles/news.css'
import b_news1 from '../assets/b-news1.gif'
import b_news2 from '../assets/b-news2.gif'
import b_news3 from '../assets/b-news3.gif'
import b_news4 from '../assets/b-news4.gif'
import others1 from '../assets/others1.jpg'
import others2 from '../assets/others2.jpg'
import others3 from '../assets/others3.png'
import others4 from '../assets/others4.jpg'
import others5 from '../assets/others5.png'
import others6 from '../assets/others6.png'
export const News=()=>{
    const breakingNewsRef=React.useRef(null)
    const advertisementRef=React.useRef(null)
    const moveOthers=React.useRef(null)
    const [isNewsOpen,setIsNewsOpen]=React.useState(true)
    const handleNewsOpen=(isOpen)=>{
        setIsNewsOpen(isOpen)
    }
    React.useEffect(()=>{
        // console.log(isNewsOpen)
        var breakingHeight=breakingNewsRef.current.offsetHeight
        var advertisementHeight=advertisementRef.current.offsetHeight
        // moveOthers.current.style.transform=`translateY(${isNewsOpen?20:advertisementHeight+20}px`
        window.addEventListener("resize",()=>{
            // moveOthers.current.style.transform=`translateY(${isNewsOpen?20:advertisementHeight+20}px`
        })
    },[isNewsOpen])
    let others=
    [
        [others1,"The Journal of Economic Sciences: Theory and Practice № 2"],
        [others2,'“UNEC Ekspert” jurnalı № 9-10'],
        [others3,""],
        [others4,"“Azərbaycan Dövlət İqtisad Universitetinin Elmi Xəbərləri” № 4"],
        [others5,"ECONOMIC HERITAGE OF HEYDAR ALIYEV"],
        [others6,"Connect with rector"]
    ]
    let b_news=
    [
        [b_news1,"UNEC-də “Rəqəmsal İqtisadiyyat: Müasir Çağırışlar və Real İmkanlar” adlı II Beynəlxalq Konfrans keçiriləcək"],
        [b_news2,"UNEC ilə Koreya Beynəlxalq Əməkdaşlıq Agentliyi əməkdaşlıq edəcək"],
        [b_news3,"Yeni təhsil standartlarının tətbiqi ilə bağlı müzakirələr aparılıb"],
        [b_news4,"UNEC ilə “Xəzər Media Mərkəzi” arasında memorandum imzalanıb"]
    ]
    let advertisement=
    [
        '“Fövqəladə hallarla mübarizədə yeni texnologiyaların tədbiqi” mövzusunda IX elmi-praktik konfrans keçiriləcək',
        'ARDNF “Məzun Təhlilçi” təcrübə proqramı elan edir',
        'UNEC-də ümummilli lider Heydər Əliyevin anadan olmasının 99-cu ildönümünə həsr olunan konfrans keçiriləcək',
        'Polşanın WSB Universitetinin Non-Erasmus mübadilə proqramına qəbul elan olunur'
    ]
    others=others.map((el,i)=>{
        return (
            <div key={i} className="other-grid-element">
                <a href="#">
                    <img style={{width:el[1]===""?"100%":"155px"}} src={el[0]}/>
                    <p style={{display:el[1]===""?"none":""}}>{el[1]}</p>
                </a>
            </div>
        )
    })
    advertisement=advertisement.map((el,i)=>{
        return (
            <div key={i}>
                <a href="#">{el}</a>
            </div>
        )
    })
    b_news=b_news.map((el,i)=>{
        return (
            <div key={i} className={`news-${i}`}>
                <a href="#">
                    <img src={el[0]} />
                </a>
                <div>
                    <a href="#">{el[1]}</a>
                </div>
            </div>
        )
    })
    return (
        <section className="news">
            <div className="news-wrapper">
                <div className="news-menu">
                    <div className="select-content">
                        <span onClick={()=>handleNewsOpen(true)}>SON XƏBƏRLƏR</span>
                        <span onClick={()=>handleNewsOpen(false)}>ELANLAR</span>
                    </div>
                    <div className="select-all-content">
                        <span>BÜTÜN XƏBƏRLƏR</span>
                    </div>
                </div>
                <div className="news-content">
                    <div ref={breakingNewsRef} className={`breaking-news ${isNewsOpen?`open`:`close`}`}>
                        <div className="left-breaking-news">
                            {b_news[0]}
                            {b_news[1]}
                        </div>
                        <div className="right-breaking-news">
                            {b_news[2]}
                            {b_news[3]}
                        </div>
                    </div>
                    <div ref={advertisementRef} className={`advertisement ${isNewsOpen?`close`:`open`}`}>
                        <div className="left-advertisement">
                            {advertisement[0]}
                            {advertisement[1]}
                        </div>
                        <div className="right-advertisement">
                            {advertisement[2]}
                            {advertisement[3]}
                        </div>
                    </div>
                    <div ref={moveOthers} className={`others ${isNewsOpen?`news-open`:`news-close`}`}>
                        <div className="others-grid">
                            {others}
                        </div>
                        <div className="graduates">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}