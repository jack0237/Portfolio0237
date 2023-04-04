import React from "react";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import cv from './cv.pdf'



const Services =  () => {
    return (
        <div className="services">
            <div className="awasome">
                <span>My</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <br /> Saepe nobis minima maiores esse quasi itaque officia soluta est.
                </span>
                <a href={cv} download>
                   <button className="button s-button" >Download CV</button> 
                </a>
                
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="cards">
               
               <div style={{ left: '14rem' }}>
                <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {'lol, lol banana apple react xd'}
                />
               </div>

               <div style={{ top: '12rem', left: '-4rem' }}>
                <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {'Html, Css Javascript  react xd'}
                />
               </div>

               <div style={{ left: '12rem', top: '19rem' }}>
                <Card
                    emoji = {Humble}
                    heading = {'Design'}
                    detail = {'lol, lol banana apple react xd'}
                />
               </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

            </div>
        </div>
    )
}

export default Services