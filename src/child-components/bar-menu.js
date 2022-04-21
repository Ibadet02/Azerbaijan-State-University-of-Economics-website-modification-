import React from "react";
import '../child-styles/bar-menu.css'
export const AdditionalBar=({main_menu_links,secondary_menu_links,isOpen})=>{
    return (
        <div className={`add-bar-wrapper ${isOpen?`open`:`close`}`}>
            <div className="add-bar-box">
                <div className="add-main-links">
                    {main_menu_links}
                </div>
                <div className="add-secondary-links">
                    {secondary_menu_links}
                </div>
            </div>
        </div>
    )
}