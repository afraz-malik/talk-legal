import React from "react";
//Components
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import OurPlans from "../../components/OurPlans/OurPlans";
import OurPromise from "../../components/OurPromise/new/OurPromise";
import OurServices from "../../components/OurServices/OurServices";
import Trusters from "../../components/Trusters/Trusters";
import Footer from "../../components/Footer/Footer";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const HomePage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <NavBar />
            <Header />
            <Slide left>
                <OurServices />
            </Slide>
            <Fade bottom>
                <OurPromise />
            </Fade>
            <Fade right>
                <OurPlans />
            </Fade>
            <Trusters />
            <Footer />
        </div>
    );
};

export default HomePage;
