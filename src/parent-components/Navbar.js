import React from "react";
import '../parent-styles/navbar.css'
import { FaSearch, FaBars } from "react-icons/fa";
import {AdditionalBar} from "../child-components/bar-menu";
export const Navbar=({myref1,myref2})=>{
    const [isAdditionalBarOpen,setIsAdditionalBarOpen]=React.useState(false)
    const [searchIconArrange,setSearchIconArrange]=React.useState()
    // const navbarContentRef=React.useRef(null)
    const formDivRef=React.useRef(null)
    const handleAdditionalBar=()=>{
        setIsAdditionalBarOpen(prev=>!prev)
    }
    React.useEffect(()=>{
        setSearchIconArrange((myref1.current.clientWidth-myref2.current.clientWidth)/2)
        window.addEventListener("resize",()=>{
            if(myref1.current.clientWidth-myref2.current.clientWidth>0){
                if(window.innerWidth>1180){
                    setSearchIconArrange((myref1.current.clientWidth-myref2.current.clientWidth)/2)
                }
            }
            if(window.innerWidth>960){
                setIsFormOpen(prev=>{
                    return prev.input?{mainLinks:true,input:true}:{...prev}
                })
            }
        })
    },[])
    const [isFormOpen,setIsFormOpen]=React.useState(
        {
            mainLinks: false, // OPEN
            input: false // CLOSE
        }
    )
    const handleInputAnimation=()=>{
        setIsFormOpen(prev=>{
            return window.innerWidth>960?{mainLinks:!prev.mainLinks,input:!prev.input}:
            {mainLinks:false,input:!prev.input}
        })
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
        return <a key={`${'m-link'+(i+1)}`} className={`m-link ${'m-link'+(i+1)}`} href="#">{el}</a>
    })
    return (
        <React.Fragment>
            <nav className="navbar" ref={myref1}>
                <div className="navbar-content" ref={myref2}>
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
                            <div className={`main-links ${isFormOpen.mainLinks?`closed`:`open`}`}>
                                {mainLinks}
                            </div>
                            <div className="bar-box">
                                <FaBars className="bar" size={"25"} fill={"white"} onClick={()=>handleAdditionalBar()} />
                            </div>
                            {/* <div className={`form-icon-box ${isFormOpen?`open`:`closed`}`}> */}
                                <div ref={formDivRef} style={{right:searchIconArrange+"px"}} className={`form-div ${isFormOpen.input?`open`:`closed`}`}>
                                    <form className={`search`}>
                                        <input id="search-input" type={"text"} placeholder="Axtarış sözünü daxil edin"/>
                                    </form>
                                </div>
                                <label htmlFor="search-input" className="search-icon-box">
                                    <FaSearch fill="white" size={"25"} style={{right:searchIconArrange+"px"}} className="search-icon" onClick={()=>handleInputAnimation()} />
                                </label>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <AdditionalBar main_menu_links={mainLinks} secondary_menu_links={secondaryLinks} isOpen={isAdditionalBarOpen}/>
            </nav>
            {/* <AdditionalBar add_main_menu_names={main_menu_names} add_secondary_menu_names={secondary_menu_names} isOpen={isAdditionalBarOpen} /> */}
        </React.Fragment>
    )
}