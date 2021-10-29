import React from "react";
import LoginBoxmodel from "../../components/LoginBoxmodel/LoginBoxmodel";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
const ChangePasswordPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <LoginBoxmodel>
            <ChangePassword />
        </LoginBoxmodel>
    );
};

export default ChangePasswordPage;
