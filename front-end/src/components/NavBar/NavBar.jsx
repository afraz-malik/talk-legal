import React from "react";
import { Link } from "react-router-dom";
import NavBarCss from "./NavBar.module.scss";
import { currentUserSelector } from "../../redux/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
import { signOutStart } from "../../redux/user/user.action";
import { LoadingSelector } from "../../redux/user/user.selector";
import { Spinner } from "../Spinner/Spinner";
const NavBar = ({ currentPage }) => {
    const currentUser = useSelector((state) => currentUserSelector(state));
    const dispatch = useDispatch();
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
    const [state, setstate] = React.useState(
        document.documentElement.clientWidth < 930 ? false : true
    );
    const [active, setactive] = React.useState("home");
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
    const loading = useSelector((state) => LoadingSelector(state));
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
                            display: !state ? "flex" : null,
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
                                    active === "pricing"
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
                                    active === "dashboard"
                                        ? NavBarCss.selected
                                        : null
                                }
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className={
                                    active === "profile"
                                        ? NavBarCss.selected
                                        : null
                                }
                            >
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={NavBarCss.right}>
                    <ul>
                        {currentUser ? (
                            <li onClick={() => dispatch(signOutStart())}>
                                Log Out
                            </li>
                        ) : (
                            <Link to="/register">
                                <li>Get Started</li>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
            {loading ? <Spinner /> : null}
        </div>
    );
};

export default NavBar;
