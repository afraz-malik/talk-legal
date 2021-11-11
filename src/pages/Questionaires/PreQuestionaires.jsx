import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../components/Spinner/Spinner";
import { gettingFormStart } from "../../redux/data/data.action";
import { currentFormSelector } from "../../redux/data/data.selector";
import Questionaires from "./Questionaires";
const PreQuestionaires = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(gettingFormStart());
    }, [dispatch]);
    const currentForm = useSelector((state) => currentFormSelector(state));
    return <div>{currentForm ? <Questionaires /> : <Spinner />}</div>;
};

export default PreQuestionaires;
