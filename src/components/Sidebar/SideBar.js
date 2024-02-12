import Logo from "./Logo";
const SideBar = () => {

    return (
        <div className="app-menu">
            <div className="navbar-vertical navbar nav-dashboard">
                <div className="h-100" data-simplebar>
                    <Logo />
                    <div className="sidebar navbar-nav flex-column">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;