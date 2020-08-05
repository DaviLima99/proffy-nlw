import React from 'react';

import logoImg from "../../assets/images/logo.svg";
import heroImage from "../../assets/images/landing.svg";

import { Link } from "react-router-dom";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proff"/>
                    <h2>Sua platafroma de estudos online.</h2>
                </div>

                <img src={heroImage} alt="" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Dar aulas
                    </Link>

                </div>
                <span className="total-connections">
                    Total de 20 conexões ralizadas. <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    );
}

export default Landing;