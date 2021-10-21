import React from "react";
import NavBarCss from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { currentUserSelector } from "../../redux/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
import { signOutStart } from "../../redux/user/user.action";

const NavBar = ({ currentPage }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => currentUserSelector(state));
    React.useEffect(() => {
        if (currentPage) {
            setactive(currentPage);
        }
        if (document.documentElement.clientWidth < 930) {
            setstate(false);
            window.addEventListener("mouseup", clickEvent);
        }
        window.addEventListener("resize", resizeEvent);
        return () => {
            window.removeEventListener("mouseup", clickEvent);
            window.removeEventListener("resize", resizeEvent);
        };
        // eslint-disable-next-line
    }, []);

    // toggleNavbar
    const [state, setstate] = React.useState(
        document.documentElement.clientWidth < 930 ? false : true
    );
    const toggle = () => {
        setstate(!state);
    };
    const resizeEvent = () => {
        const cwidth = document.documentElement.clientWidth;
        if (cwidth > 930) {
            setstate(true);
            window.removeEventListener("mouseup", clickEvent);
        } else if (cwidth <= 930) {
            window.addEventListener("mouseup", clickEvent);
            setstate(false);
        }
    };
    const clickEvent = (e) => {
        var container = document.getElementById("center");
        if (!container.contains(e.target)) {
            if (document.documentElement.clientWidth < 930) {
                setstate(false);
            }
        }
    };
    // currentpage
    const [active, setactive] = React.useState("home");
    //toggleProfile
    const [profile, setprofile] = React.useState(false);

    return (
        <div className={NavBarCss.navbar}>
            <div className={NavBarCss.inside_nav}>
                <div className={NavBarCss.left}>
                    <Link to="/">
                        <h3>
                            <img alt="" src="images/Full-Trans 2.svg" />
                        </h3>
                    </Link>
                </div>
                <div className={NavBarCss.center} id="center">
                    <i
                        className="fa fa-bars"
                        onClick={() => toggle()}
                        style={{
                            transform: state ? "rotate(-90deg)" : "unset",
                        }}
                    ></i>
                    <ul style={{ display: state ? "flex" : "none" }}>
                        <li>
                            <Link
                                to="/"
                                className={
                                    active === "home"
                                        ? NavBarCss.selected
                                        : null
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/plans"
                                className={
                                    active === "plans"
                                        ? NavBarCss.selected
                                        : null
                                }
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/business"
                                className={
                                    active === "business"
                                        ? NavBarCss.selected
                                        : null
                                }
                            >
                                Documents
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className={
                                    active === "about"
                                        ? NavBarCss.selected
                                        : null
                                }
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard"
                                className={
                                    active === "contact"
                                        ? NavBarCss.selected
                                        : null
                                }
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className={
                                    active === "dummy"
                                        ? NavBarCss.selected
                                        : null
                                }
                            >
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={NavBarCss.right}>
                    <ul>
                        {currentUser ? (
                            <li>
                                <div className={NavBarCss.dropdown}>
                                    <div
                                        className={NavBarCss.profile}
                                        onClick={() => setprofile(!profile)}
                                    >
                                        <img src="images/19.png" alt="" />
                                        <img
                                            src="images/downarrow.png"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className={NavBarCss.dropdownContent}
                                        style={{
                                            display: profile ? "block" : "none",
                                        }}
                                    >
                                        <Link
                                            to="/dashboard"
                                            className={NavBarCss.a}
                                        >
                                            {" "}
                                            Dashboard
                                        </Link>
                                        <Link
                                            to="/dashboard"
                                            className={NavBarCss.a}
                                        >
                                            {" "}
                                            Profile
                                        </Link>
                                        <div
                                            className={NavBarCss.a}
                                            onClick={() =>
                                                dispatch(signOutStart())
                                            }
                                        >
                                            Log out
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ) : (
                            <Link to="/register">
                                <li>Get Started</li>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
