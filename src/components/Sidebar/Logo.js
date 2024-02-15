import {Link} from "react-router-dom";

const Logo = () => {

    return (
        <Link className="navbar-brand" to="/" >
            <img src="/images/logo.png" alt="Learn English" className="reset-styles" />
                <div className="logo">
                    <span>Learn</span><span className="danger">English</span>
                </div>
        </Link>
    );
}
export default Logo;