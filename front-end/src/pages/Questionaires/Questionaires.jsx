import React, { useState } from "react";
import HardCopy from "../../components/QuestionairesForm/HardCopy";
import QCss from "./Questionaires.module.scss";
import Logo from "../../components/NavBar/Logo";
import { useDispatch, useSelector } from "react-redux";
import { currentFormSelector } from "../../redux/data/data.selector";
import Preview from "../../components/Preview/Preview";
import { savingForm } from "../../redux/data/data.action";
import { currentUserSelector } from "../../redux/user/user.selector";
import { useHistory } from "react-router";
import NewForm from "../../components/QuestionairesForm/NewForm";
import update from "react-addons-update"; // ES6
import $ from "jquery";
const Questionaires = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => currentUserSelector(state));
    const formSelector = useSelector((state) => currentFormSelector(state));
    const total_pages = formSelector.pages.length;
    const [currentForm, setcurrentForm] = useState(formSelector);
    const [toggle, settoggle] = useState(false);
    const [state, setstate] = useState({
        percent: 100 / total_pages,
        currentPage: 0,
    });
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [formSelector]);

    const handleForm = (page, data) => {
        if (page < total_pages) {
            setcurrentForm(
                update(currentForm, {
                    pages: {
                        [page]: {
                            $set: {
                                ...currentForm.pages[page],
                                feilds: [...data],
                            },
                        },
                    },
                })
            );
            if (page < total_pages - 1) {
                setstate({
                    percent: state.percent + 100 / total_pages,
                    currentPage: state.currentPage + 1,
                });
            }
        }
    };
    const submitForm = () => {
        // dispatch(savingForm(currentForm));
        if (currentUser) {
            if (currentUser.subscription_plan) history.push("/checkout");
            else history.push("/plans");
        } else {
            history.push("/register?redirect=plans");
        }
    };
    const pageHandler = (currentPage) => {
        setstate({
            percent: state.percent - 100 / total_pages,
            currentPage,
        });
    };

    if (toggle) {
        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                settoggle(false);
            }
        });
    }
    return (
        <div className={QCss.container}>
            <div className={QCss.container2}>
                <Logo />
                <div className={QCss.progress_bar}>
                    <div
                        className={QCss.progress_complete}
                        style={{ width: `${state.percent}%` }}
                    ></div>
                </div>
                <div className={QCss.progress_percent}>
                    {" "}
                    {state.percent}% Complete
                </div>
                <div className={QCss.body}>
                    <div className={QCss.form}>
                        <NewForm
                            newForm={currentForm.pages[state.currentPage]}
                            handleForm={handleForm}
                            pageHandler={pageHandler}
                            currentPage={state.currentPage}
                            lastPage={
                                state.currentPage === total_pages - 1
                                    ? true
                                    : false
                            }
                            settoggle={settoggle}
                        />
                    </div>
                    <div
                        className={QCss.hardCopy}
                        style={{
                            backgroundImage: "url(images/TLTM.png)",
                        }}
                    >
                        <div className={QCss.content}>
                            <HardCopy />
                        </div>
                    </div>
                </div>
            </div>
            <img alt="" className={QCss.jellyimg} src="images/jelly.png" />
            {toggle ? (
                <Preview position="fixed">
                    <div
                        className={`${QCss.hc} preview`}
                        style={{
                            backgroundImage: "url(images/TLTM.png)",
                        }}
                    >
                        <img
                            className={QCss.hcimg}
                            alt=""
                            src="images/x-circle.png"
                            onClick={() => settoggle(false)}
                        />
                        <HardCopy values={currentForm} />
                    </div>
                </Preview>
            ) : null}
        </div>
    );
};

export default Questionaires;
