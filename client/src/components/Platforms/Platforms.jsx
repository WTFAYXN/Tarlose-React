import React from "react";
import "./platform.css";
import AdobeIllustrator from "../../assets/Platforms/Adobe-Illustrator.svg";
import AdobePhotoshop from "../../assets/Platforms/Adobe-Photoshop.svg";
import PremierePro from "../../assets/Platforms/Adobe-PremierePro.svg";
import Canva from "../../assets/Platforms/CANVA.svg";
import CorelDraw from "../../assets/Platforms/Corel-Draw.svg";
import Docker from "../../assets/Platforms/Docker.svg";
import Figma from "../../assets/Platforms/Figma.svg";
import Framer from "../../assets/Platforms/Framer.svg";
import Freepik from "../../assets/Platforms/Freepik.svg";
import Godaddy from "../../assets/Platforms/Godaddy.svg";
import Heroku from "../../assets/Platforms/Heroku.svg";
import Hostinger from "../../assets/Platforms/Hostinger.svg";
import Linux from "../../assets/Platforms/Linux.svg";
import OpenAi from "../../assets/Platforms/Open-AI.svg";
import Webflow from "../../assets/Platforms/Webflow.svg";
import Vercel from "../../assets/Platforms/Vercel.svg";
import Wix from "../../assets/Platforms/Wix.svg";
import Wordpress from "../../assets/Platforms/Wordpress.svg";



const Platforms = () => {

    return(
        <>
        
        <div className="container">
                <p className="text-center eco">Our Eco-system</p>
                <h2 className="text-center eco-sub-cont">platforms we use to enhance <br/> <span className="eco-sub">our
                        capabilities.</span></h2>
                <div className=" skill-container">

                    <div className="row skill-row  my-5 gap-2">
                        <div className="col   skill-cell-group low-cell">
                            <div className="col-img-cont">
                                <img src={AdobeIllustrator} alt=""/>
                            </div>
                            <div className="col-img-cont mid-box">
                                <img src={AdobePhotoshop} alt=""/>
                            </div>
                            <div className="col-img-cont">
                                <img src={PremierePro} alt=""/>
                            </div>
                        </div>
                        <div className="col  skill-cell-group">
                            <div className="col-img-cont">
                                <img src={Canva} alt=""/>
                            </div>
                            <div className="col-img-cont mid-box">
                                <img src={CorelDraw} alt=""/>
                            </div>
                            <div className="col-img-cont">
                                <img src={Figma} alt=""/>
                            </div>
                        </div>
                        <div className="col  skill-cell-group low-cell">
                            <div className="col-img-cont">
                                <img src={Framer} alt=""/>
                            </div>
                            <div className="col-img-cont mid-box">
                            <img src={Docker} alt=""/>
                            </div>
                            <div className="col-img-cont">
                                <img src={Freepik} alt=""/>
                            </div>
                        </div>
                        <div className="col  skill-cell-group">
                            <div className="col-img-cont">
                                <img src={Godaddy} alt=""/>
                            </div>
                            <div className="col-img-cont mid-box">
                                <img src={Heroku} alt=""/>
                            </div>
                            <div className="col-img-cont">
                            <img src={Hostinger} alt=""/>
                            </div>
                        </div>
                        <div className="col  skill-cell-group low-cell">
                            <div className="col-img-cont ">
                                <img src={Linux} alt=""/>
                            </div>
                            <div className="col-img-cont mid-box">
                                <img src={OpenAi} alt=""/>
                            </div>
                            <div className="col-img-cont">
                                <img src={Vercel} alt=""/>
                            </div>
                        </div>
                        <div className="col  skill-cell-group">
                            <div className="col-img-cont">
                                <img src={Webflow} alt=""/>
                            </div>
                            <div className="col-img-cont  mid-box">
                                <img src={Wordpress} alt="" />
                            </div>
                            <div className="col-img-cont">
                                <img src={Wix} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Platforms;