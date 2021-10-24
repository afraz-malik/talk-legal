import React from "react";
import LoginBoxmodel from "../../components/LoginBoxmodel/LoginBoxmodel";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
const ResetPasswordPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <LoginBoxmodel>
            <ResetPassword />
        </LoginBoxmodel>
    );
};

export default ResetPasswordPage;
