import React, { useState } from "react";
import Form1 from "../../components/QuestionairesForm/Form1";
import Form2 from "../../components/QuestionairesForm/Form2";
import Form3 from "../../components/QuestionairesForm/Form3";
import Form4 from "../../components/QuestionairesForm/Form4";
import HardCopy from "../../components/QuestionairesForm/HardCopy";
import QCss from "./Questionaires.module.scss";
import Logo from "../../components/NavBar/Logo";

import { useDispatch, useSelector } from "react-redux";
import { mutualFormSelector } from "../../redux/data/data.selector";
import { InsideSpinner } from "../../components/Spinner/Spinner";
import Preview from "../../components/Preview/Preview";
import { savingForm } from "../../redux/data/data.action";
import { currentUserSelector } from "../../redux/user/user.selector";
import { useHistory } from "react-router";

const Questionaires = () => {
    const mutualForm = useSelector((state) => mutualFormSelector(state));
    const currentUser = useSelector((state) => currentUserSelector(state));
    const history = useHistory();
    const dispatch = useDispatch();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [mutualForm]);
    const [state, setstate] = useState({ value: 25 });
    const [toggle, settoggle] = useState(false);
    const handleForm = (data) => {
        if (state.value < 100) {
            setstate({ ...state, ...data, value: state.value + 25 });
        } else {
            setstate({ ...state, ...data });
        }
    };
    const submitForm = () => {
        dispatch(savingForm({ form: mutualForm, state }));
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
                        style={{ width: `${state.value}%` }}
                    ></div>
                </div>
                <div className={QCss.progress_percent}>
                    {" "}
                    {state.value}% Complete
                </div>
                <div className={QCss.body}>
                    <div className={QCss.form}>
                        {state.value === 25 ? (
                            <Form1 handleForm={handleForm} />
                        ) : null}
                        {state.value === 50 ? (
                            <Form2 handleForm={handleForm} />
                        ) : null}
                        {state.value === 75 ? (
                            <Form3 handleForm={handleForm} />
                        ) : null}
                        {state.value === 100 ? (
                            <Form4
                                handleForm={handleForm}
                                settoggle={settoggle}
                                submitForm={submitForm}
                            />
                        ) : null}
                    </div>
                    <div
                        className={QCss.hardCopy}
                        style={{ backgroundImage: "url(images/TLTM.png)" }}
                    >
                        <div className={QCss.content}>
                            {mutualForm ? (
                                <HardCopy mutualForm={mutualForm} />
                            ) : (
                                <InsideSpinner />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <img alt="" className={QCss.jellyimg} src="images/jelly.png" />
            {toggle ? (
                <Preview position="fixed">
                    <div
                        className={`${QCss.hc} preview`}
                        style={{ backgroundImage: "url(images/TLTM.png)" }}
                    >
                        <img
                            className={QCss.hcimg}
                            alt=""
                            src="images/x-circle.png"
                            onClick={() => settoggle(false)}
                        />

                        {mutualForm ? (
                            <HardCopy mutualForm={mutualForm} state={state} />
                        ) : (
                            <InsideSpinner />
                        )}
                    </div>
                </Preview>
            ) : null}
        </div>
    );
};

export default Questionaires;
