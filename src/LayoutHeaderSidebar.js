import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";
import React, {useState} from "react";
import {Outlet} from "react-router-dom";

const LayoutHeaderSidebar = () => {
    // Стан, що вказує, чи активний додатковий клас для елементу main-wrapper
    const [isMainWrapperActive, setIsMainWrapperActive] = useState(false);

    // Функція обробника події, яка переключає стан isMainWrapperActive
    const handleBurgerIcoClick = () => {
        // Зміна стану на протилежний
        setIsMainWrapperActive(!isMainWrapperActive);
    }

    // Генеруємо список класів для елементу main-wrapper на основі стану isMainWrapperActive
    const mainWrapperClasses = `main-wrapper ${isMainWrapperActive ? 'toggled' : ''}`;
    return (
        <div id="main-wrapper" className={mainWrapperClasses}>
            <Header onBurgerIcoClick={handleBurgerIcoClick}/>
            <SideBar/>
            <div id="app-content">
                <div className="app-content-area">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default LayoutHeaderSidebar;