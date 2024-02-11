import BurgerIco from "./BurgerIco";

function Header() {
    return (
        <header>
            <div className="header">
                <div className="navbar-custom navbar navbar-expand-lg">
                    <div className="container-fluid px-0">
                        <BurgerIco/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;