import React from "react";
import '../parent-styles/info.css'
import s1 from '../assets/b-img1.jpg'
import s2 from '../assets/b-img2.jpg'
import s3 from '../assets/b-img3.jpg'
import s4 from '../assets/b-img4.jpg'
import s5 from '../assets/b-img5.jpg'
import s6 from '../assets/b-img6.jpg'
export const Info=()=>{
    let left_boxes=
    [
        ["İMTAHAN KOLLOKVİUM, ONLINE-SINAQ",s1,"orange"],
        ["MÜƏLLİMİN KABİNETİ",s2,"blue"],
        ["FAKÜLTƏLƏR",s3,"red"]
    ]
    let right_boxes=
    [
        ["UNEC BİZNES MƏKTƏBİ (MBA)",s4,"yellow"],
        ["TƏLƏBƏNİN KABİNETİ",s5,"lightblue"],
        ["KAFEDRALAR",s6,"brown"]
    ]
    left_boxes=left_boxes.map((el,i)=>{
        return (
        <div key={i} className={`left-img-link ${el[2]}`}>
            <div className="box-name">
                <span>
                    <a href="#">{el[0]}</a>
                </span>
            </div>
            <div className="box-img">
                <img src={`${el[1]}`}/>
            </div>
        </div>
        )
    })
    right_boxes=right_boxes.map((el,i)=>{
        return (
        <div key={i} className={`right-img-link ${el[2]}`}>
            <div className="box-name">
                <a href="#">
                    <span>{el[0]}</span>
                </a>
            </div>
            <div className="box-img">
                <img src={`${el[1]}`}/>
            </div>
        </div>
        )
    })
    return (
        <section className="info">
            <div className="info-wrapper">
                <div className="why-unec">
                    <h2>Niyə UNEC?</h2>
                    <p>Regionda iqtisad elmini dərindən öyrədən fundamental tədris mərkəzidir;
                       Tədris prosesi və kadr hazırlığı Amerika və Avropa təhsil sisteminə uyğundur;
                       İxtisaslar bakalavr, magistr və doktorantura təhsil pillələri üzrə
                       azərbaycan, ingilis, rus və türk dillərində tədris edilir;
                       Auditoriyada mərkəz nöqtəsi tələbədir;
                       Tələbə universiteti iki və daha çox ixtisasla (dual major) bitirə bilər;
                       Tələbələrin müxtəlif mübadilə proqramlarında iştirak etmək imkanı vardır;
                       Universitetdə 10 fakültə və 23 kafedra fəaliyyət gös­tərir;
                       403 professor və dosent çalışır.
                    </p>
                </div>
                <div className="info-boxes-wrapper">
                    <div className="left-info-boxes">
                        {left_boxes}
                    </div>
                    <div className="right-info-boxes">
                        {right_boxes}
                    </div>
                </div>
            </div> 
        </section>
    )
}