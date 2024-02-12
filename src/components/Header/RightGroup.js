import BlackWhiteThemeSwitcher from "./BlackWhiteThemeSwitcher"
import Notifications from "./Notifications";
import UserGroup from "./UserGroup";
import LoginButton from "./LoginButton";
const RightGroup = () => {

    return (
        <ul className="navbar-nav navbar-right-wrap ms-lg-auto d-flex nav-top-wrap align-items-center ms-4 ms-lg-0">
            <BlackWhiteThemeSwitcher />
            <Notifications />
            <UserGroup />
            {/*<LoginButton />*/}
        </ul>
    );
}
export default RightGroup;