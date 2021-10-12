import React, { useState } from "react";
import Form1 from "../../components/QuestionairesForm/Form1";
import Form2 from "../../components/QuestionairesForm/Form2";
import Form3 from "../../components/QuestionairesForm/Form3";
import Form4 from "../../components/QuestionairesForm/Form4";
import HardCopy from "../../components/QuestionairesForm/HardCopy";
import QCss from "./Questionaires.module.scss";
import Logo from "../../components/NavBar/Logo";

import { useDispatch, useSelector } from "react-redux";
import { currentFormSelector } from "../../redux/data/data.selector";
import { InsideSpinner, Spinner } from "../../components/Spinner/Spinner";
import Preview from "../../components/Preview/Preview";
import { savingForm } from "../../redux/data/data.action";
import { currentUserSelector } from "../../redux/user/user.selector";
import { useHistory } from "react-router";
import NewForm from "../../components/QuestionairesForm/NewForm";
import update from "react-addons-update"; // ES6

const Questionaires = () => {
    const formSelector = useSelector((state) => currentFormSelector(state));
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [formSelector]);
    const currentUser = useSelector((state) => currentUserSelector(state));
    const history = useHistory();
    const dispatch = useDispatch();

    const total_pages = formSelector.pages.length;
    const [state, setstate] = useState({
        percent: 100 / total_pages,
        currentPage: 0,
    });
    const [currentForm, setcurrentForm] = useState(formSelector);
    const [toggle, settoggle] = useState(false);
    const handleForm = (page, data, preview) => {
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
            } else {
                if (preview) {
                    settoggle(true);
                }
            }
        }
    };
    const submitForm = () => {
        dispatch(savingForm({ currentForm }));
        if (currentUser) {
            history.push("/plans");
        } else {
            history.push({ pathname: "/register", form: true });
        }
    };
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
                            currentPage={state.currentPage}
                            lastPage={
                                state.currentPage === total_pages - 1
                                    ? true
                                    : false
                            }
                        />
                    </div>
                    <div
                        className={QCss.hardCopy}
                        style={{
                            backgroundImage: "url(images/TLTM.png)",
                        }}
                    >
                        <div className={QCss.content}>
                            <HardCopy currentForm={currentForm} />
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
                        <HardCopy currentForm={currentForm} values={true} />
                    </div>
                </Preview>
            ) : null}
        </div>
    );
};

export default Questionaires;
