import React from 'react';
import './Marquee.css';
import AleviaWellness from "../../assets/trusted-companies/alevia-wellness.png";
import Amorfume from "../../assets/trusted-companies/Amorfume.png";
import Bettermind from "../../assets/trusted-companies/bettermindlabs.png";
import BiryaniBar from "../../assets/trusted-companies/biryani-bar.png";
import Cyberkalki from "../../assets/trusted-companies/cyberkalki.png";
import MaavisProjects from "../../assets//trusted-companies/Maavis-Projects.png";
import TheHausCo from "../../assets//trusted-companies/thehausco-studio.png";
import BediGroup from "../../assets//trusted-companies/the-bedi-group.png";
import Uniekart from "../../assets//trusted-companies/uniekart.png";
import NehaSavara from "../../assets/trusted-companies/healwithneha.png";
import Verifiers from "../../assets/trusted-companies/verifiers.png";

const MarqueeLogo = () => {
    return (
        <>
          <div className="slider my-5">
                <div className="slide-track">
                    <div className="slide"><img src={Uniekart} alt="" /></div>
                    <div className="slide"><img src={Amorfume} alt="" /></div>
                    <div className="slide"><img src={TheHausCo} alt="" /></div>
                    <div className="slide"><img src={MaavisProjects} alt="" /></div>
                    <div className="slide"><img src={Cyberkalki} alt="" /></div>
                    <div className="slide"><img src={AleviaWellness} alt="" /></div>
                    <div className="slide"><img src={NehaSavara} alt="" /></div>
                    <div className="slide"><img src={BediGroup} alt="" /></div>
                    <div className="slide"><img src={Verifiers} alt="" /></div>
                    <div className="slide"><img src={BiryaniBar} alt="" /></div>
                    {/* <!-- Duplicate slides for seamless loop --> */}
                    <div className="slide"><img src={Uniekart} alt="" /></div>
                    <div className="slide"><img src={Amorfume} alt="" /></div>
                    <div className="slide"><img src={TheHausCo} alt="" /></div>
                    <div className="slide"><img src={MaavisProjects} alt="" /></div>
                    <div className="slide"><img src={Cyberkalki} alt="" /></div>
                    <div className="slide"><img src={AleviaWellness} alt="" /></div>
                    <div className="slide"><img src={NehaSavara} alt="" /></div>
                    <div className="slide"><img src={BediGroup} alt="" /></div>
                    <div className="slide"><img src={Verifiers} alt="" /></div>
                    <div className="slide"><img src={BiryaniBar} alt="" /></div>
                </div>
            </div>
        </>
        )
    }

    
export default MarqueeLogo;