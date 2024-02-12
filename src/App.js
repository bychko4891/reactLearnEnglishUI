import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";
import React, { useState } from "react";

const App = () => {
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
        {/*<div id="main-wrapper" className="main-wrapper">*/}
            <Header onBurgerIcoClick={handleBurgerIcoClick} />
            <SideBar/>
            <main id="app-content">
                <div className="app-content-area">

                </div>
            </main>

        </div>
    );
}


export default App;
