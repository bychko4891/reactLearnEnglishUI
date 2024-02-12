import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import 'simplebar-react/dist/simplebar.min.css';
const Notifications = () => {
            return (
                <li className="dropdown stopevent ms-2">

                    <a className="btn btn-ghost btn-icon rounded-circle" href="#!" role="button"
                       id="dropdownNotification" data-bs-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">
                        <img className="colored-svg reset-styles ms-auto" src="/images/bell-alert.svg"
                             alt="profile" width="25" height="25"/>
                    </a>

                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end"
                         aria-labelledby="dropdownNotification">
                        <div>
                            <div
                                className="border-bottom px-3 pt-2 pb-3 d-flex justify-content-between align-items-center">
                                <p className="mb-0 text-dark fw-medium fs-4">Notifications</p>
                                <a href="#!" className="text-muted">
                            <span>
                                <i className="me-1 icon-xs" data-feather="settings"></i>
                            </span>
                                </a>
                            </div>

                            <SimpleBar style={{height: '250px'}}>
                                <ul className="list-group list-group-flush notification-list-scroll">
                                    {[...Array(50)].map((x, i) =>

                                        <p key={i} className="odd">Some content</p>
                                    )}
                                </ul>
                            </SimpleBar>
                            {/*<div data-simplebar style="height: 250px;">*/}
                            {/*<ul className="list-group list-group-flush notification-list-scroll">*/}
                            {/*        <li className="list-group-item bg-light">*/}
                            {/*            <a href="#!" className="text-muted">*/}
                            {/*                <h5 className=" mb-1">Rishi Chopra</h5>*/}
                            {/*                <p className="mb-0">*/}
                            {/*                    Mauris blandit erat id nunc blandit, ac eleifend dolor pretium.*/}
                            {/*                </p>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*                <li className="list-group-item">*/}
                            {/*                    <a href="#!" className="text-muted">*/}
                            {/*                        <h5 className=" mb-1">Neha Kannned</h5>*/}
                            {/*                        <p className="mb-0">*/}
                            {/*                            Proin at elit vel est condimentum elementum id in ante. Maecenas et*/}
                            {/*                            sapien metus.*/}
                            {/*                        </p>*/}
                            {/*                    </a>*/}
                            {/*                </li>*/}
                            {/*                <li className="list-group-item">*/}
                            {/*                    <a href="#!" className="text-muted">*/}
                            {/*                        <h5 className=" mb-1">Nirmala Chauhan</h5>*/}
                            {/*                        <p className="mb-0">*/}
                            {/*                            Morbi maximus urna lobortis elit sollicitudin sollicitudieget elit*/}
                            {/*                            vel pretium.*/}
                            {/*                        </p>*/}
                            {/*                    </a>*/}
                            {/*                </li>*/}
                            {/*                <li className="list-group-item">*/}
                            {/*                    <a href="#!" className="text-muted">*/}
                            {/*                        <h5 className=" mb-1">Sina Ray</h5>*/}
                            {/*                        <p className="mb-0">*/}
                            {/*                            Sed aliquam augue sit amet mauris volutpat hendrerit sed nunc eu*/}
                            {/*                            diam.*/}
                            {/*                        </p>*/}
                            {/*                    </a>*/}


                            {/*                </li>*/}
                            {/*            </ul>*/}
                            {/*</div>*/}
                            {/*        <div className="border-top px-3 py-2 text-center">*/}
                            {/*            <a href="#!" className="text-inherit ">*/}
                            {/*                View all Notifications*/}
                            {/*            </a>*/}
                            {/*        </div>*/}
                        </div>
                    </div>

                </li>
            );
    }
export default Notifications;
