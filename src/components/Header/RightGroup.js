import BlackWhiteThemeSwitcher from "./BlackWhiteThemeSwitcher"
import Notifications from "./Notifications";
import UserGroup from "./UserGroup";
const RightGroup = () => {

    return (
        <ul className="navbar-nav navbar-right-wrap ms-lg-auto d-flex nav-top-wrap align-items-center ms-4 ms-lg-0">
            <BlackWhiteThemeSwitcher />
            <Notifications />
            <UserGroup />
        </ul>
    );
}
export default RightGroup;