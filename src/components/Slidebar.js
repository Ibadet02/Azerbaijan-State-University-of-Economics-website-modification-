import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import '../styles/slidebar.css'
export const Slidebar=()=>{
    return (
        <section>
            <FaAngleRight icon="fa-solid fa-angle-right" />
            <FaAngleLeft icon="fa-solid fa-angle-left" />
        </section>
    )
}