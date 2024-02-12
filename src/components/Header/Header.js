import BurgerIco from "./BurgerIco";
import LogoM from "./LogoM";
import RightGroup from "./RightGroup";
// import React, { useState } from "react";

const  Header = ({ onBurgerIcoClick }) => {

    return (
        <header>
            <div className="header">
                <div className="navbar-custom navbar navbar-expand-lg">
                    <div className="container-fluid px-0">
                        <BurgerIco onClick={onBurgerIcoClick} />
                        <LogoM />
                        <RightGroup />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;