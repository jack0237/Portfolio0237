import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazone from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";



const Works = () => {
    return (
        <div className="works">
            <div className="awasome">
                <span>My different acheivements</span>
                <span>Services projects</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Saepe nobis minima maiores esse quasi itaque officia soluta est.
                    <br /> Saepe nobis minima maiores esse quasi itaque officia soluta est.
                    <br /> Saepe nobis minima maiores esse quasi itaque officia soluta est.
                </span>

                <button className="button s-button" >Download CV</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="w-right">
                <div className="w-maincircle">

                </div>
            </div>
            
        </div>
    )
}

export default Works