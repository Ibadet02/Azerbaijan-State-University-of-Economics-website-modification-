import React from "react";
import '../styles/navbar.css'
import { FaSearch } from "react-icons/fa";
export const Navbar=({myref})=>{
    const [isFormOpen,setIsFormOpen]=React.useState(false)
    const handleInputAnimation=()=>{
        setIsFormOpen(prev=>!prev)
    }
    const main_menu_names=[
        "UNEC News",
        "Universitet",
        "Tədris",
        "Elm",
        "Sosial həyat",
        "Qəbul",
        "E-universitet",
        '"Bir" Tələbə-Könüllü'
    ]
    const secondary_menu_names=[
        "rektorla əlaqə",
        "site map",
        "bank of ideas",
        "contact us",
        "Webmail",
        "corporate image",
        "mobile-application",
        "abiturient-2020",
    ]
    const secondaryLinks=secondary_menu_names.map((el,i)=>{
        return <a key={`${'s-link'+(i+1)}`} className={`s-link ${'s-link'+(i+1)}`} href="#">{el}</a>
    })
    const mainLinks=main_menu_names.map((el,i)=>{
        return (
            <a key={`${'m-link'+(i+1)}`} className={`m-link ${'m-link'+(i+1)}`} href="#">{el}</a>
        )
    })
    return (
        <nav className="navbar" ref={myref}>
            <div className="navbar-content">
            <div className="logo-box">
                    <strong>
                        <a href="#"><span>AZƏRBAYCAN DÖVLƏT</span><span>İQTİSAD UNİVERSİTETİ</span></a>
                    </strong>
                </div>
                <div className="menu-box">
                    <div className="secondary-menu">
                        <div className="secondary-links">
                            {secondaryLinks}
                        </div>
                        {/* <div className="languages"></div> */}
                    </div>
                    <div className="main-menu">
                        <div className={`main-links ${isFormOpen?`closed`:`open`}`}>
                            {mainLinks}
                        </div>
                        {/* <div className={`form-icon-box ${isFormOpen?`open`:`closed`}`}> */}
                            <div className={`form-div ${isFormOpen?`open`:`closed`}`}>
                                <form className={`search`}>
                                    <input id="search-input" type={"text"} placeholder="Axtarış sözünü daxil edin"/>
                                </form>
                            </div>
                            <label htmlFor="search-input" className="search-icon-box">
                                <FaSearch fill="white" size={"25"} className="search-icon" onClick={()=>handleInputAnimation()} />
                            </label>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}