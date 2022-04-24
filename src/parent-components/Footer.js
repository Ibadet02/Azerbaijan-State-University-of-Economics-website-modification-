import React from "react";
import '../parent-styles/footer.css'
export const Footer=()=>{
    let links=
    [
        ["FAQ","KARYERA MƏRKƏZİ","İNKLÜZİV TƏHSİL MƏRKƏZİ","MÜBADİLƏ PROQRAMLARI"],
        ["KORPORATİV STİL","REYTINQ 100","24/7 KITABXANA","NƏŞRİYYAT"],
        ["İNNOVATİV BİZNES İNKUBATOR","MUZEY","YADDAŞ QEYDİ","QAYNAR XƏTT"],
        ["FACEBOOK","YOUTUBE","TWITTER","LINKEDIN"]
    ]
    links=links.map((el,i)=>{
        return (
            <div className="footer-box">
                {el.map((e,i)=><a href="#">{e}</a>)}
            </div>
        )
    })

    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="top-footer">
                    {links}
                </div>
                <div className="bottom-footer">
                    <span>All rights reserved.© 2022 UNEC</span>
                    <span>Site created by Ibadet</span>
                </div>
            </div>
        </footer>
    )
}