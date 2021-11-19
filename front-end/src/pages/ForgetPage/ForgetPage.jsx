import React from "react";
import LoginBoxmodel from "../../components/LoginBoxmodel/LoginBoxmodel";
import ForgetPassword from "../../components/ForgetPassword/ForgetPassword";
const ForgetPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <LoginBoxmodel>
            <ForgetPassword />
        </LoginBoxmodel>
    );
};

export default ForgetPage;
