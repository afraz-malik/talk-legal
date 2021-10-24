import React from "react";
import LoginBoxmodel from "../../components/LoginBoxmodel/LoginBoxmodel";
import LoginForm from "../../components/LoginForm/LoginForm";
const LoginPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <LoginBoxmodel>
            <LoginForm />
        </LoginBoxmodel>
    );
};

export default LoginPage;
