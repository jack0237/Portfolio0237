import React from "react";
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import jason from '../../img/jason.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { useContext } from "react";



const transition = {duration: 2, type: 'spring'}


const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Salut je suis</span>
                    <span>Ngueguim Jason</span>
                    <span>
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Atque nisi illum ea? Labore,
                        consequuntur error.
                    </span>
                </div>
                <button className="button i-button">Contacte</button>

                <div className="i-icons">
                    <a href="http://github.com/jack0237">
                        <img src={Github} alt="" />
                    </a>
                    <a href=""></a>
                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>

            </div>
            <div className="i-right">

                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={jason} alt="" />
                <img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                src={glassesimoji} alt="" />
                <div className="pose">
                    <FloatingDiv image={Crown} text1='Web' text2='Developer' />
                </div>
                <div className="pose1">
                    <FloatingDiv image={thumbup} text1='Best design' text2='Award' />
                </div>
                <div className="blur"
                    style={{ background: "rgb(238, 210, 255)" }}>   </div>
                <div className="blur"
                    style={{
                        background: '#C1F5FF',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-9rem'
                    }}>
                </div>

            </div>
        </div>
    )
}

export default Intro