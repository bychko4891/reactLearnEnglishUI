export const UserGroup = () => {
    return (

        <li className="dropdown ms-2">
            <a className="rounded-circle" href="#!" role="button" id="dropdownUser" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="avatar avatar-md avatar-indicators avatar-online">

                    <img id="userAvatar"  src="/avatar/avatarName"  alt="User avatar" className="rounded-circle"/>

                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">

                <div className="px-4 pb-0 pt-2">
                    <div className="lh-1 ">
                        <h5 className="mb-1"> John E. Grainger</h5>
                        <a href="#!" className="text-inherit fs-6">View my profile</a>
                    </div>
                    <div className=" dropdown-divider mt-3 mb-2"></div>
                </div>

                <ul className="list-unstyled">

                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="#!">
                            <i className="me-2 icon-xxs dropdown-item-icon" data-feather="user"></i>
                            Edit Profile
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#!">
                            <i className="me-2 icon-xxs dropdown-item-icon" data-feather="activity"></i>
                            Activity Log
                        </a>


                    </li>


                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="#!">

                            <i className="me-2 icon-xxs dropdown-item-icon" data-feather="settings"></i>
                            Settings
                        </a>
                    </li>
                    <li>

                        <form className="dropdown-item" action="/logout" method="post">
                            <button className="reset-styles" type="submit">
                                <i className="me-2 icon-xxs dropdown-item-icon" data-feather="power"></i>
                                Вихід
                            </button>
                        </form>
                    </li>
                </ul>

            </div>
        </li>
    )
}

export default UserGroup;