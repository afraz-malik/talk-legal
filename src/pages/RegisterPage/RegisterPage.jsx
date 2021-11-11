import React from "react";
import { withRouter } from "react-router";
import LoginBoxmodel from "../../components/LoginBoxmodel/LoginBoxmodel";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
const RegisterPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <LoginBoxmodel>
            <RegisterForm />
        </LoginBoxmodel>
    );
};

export default withRouter(RegisterPage);
