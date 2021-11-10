import React from "react";
import BusinessForms from "../../components/BusinessForms/BusinessForms";
import BusinessHeader from "../../components/BusinessHeader/BusinessHeader";
import Footer from "../../components/Footer/Footer";
import Info from "../../components/Info/Info";
import NavBar from "../../components/NavBar/NavBar";
import BusinessOpPageCss from "./BusinessOpPage.module.scss";
const BusinessOpPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <NavBar currentPage="business" />
            <BusinessHeader />
            <div className={BusinessOpPageCss.container}>
                <h5>Select Your Categories</h5>
                <div className={BusinessOpPageCss.categories}>
                    <div className={BusinessOpPageCss.category}>
                        <div className={BusinessOpPageCss.img}>
                            <img alt="" src="images/Profile.png" />
                            <p>Influencer Market</p>
                        </div>
                        <button>See all Documents</button>
                    </div>
                    <div className={BusinessOpPageCss.category}>
                        <div className={BusinessOpPageCss.img}>
                            <img alt="" src="images/Profile.png" />
                        </div>
                        <p>Photographer & Videographer</p>
                        <button>See all Documents</button>
                    </div>
                </div>
            </div>
            <BusinessForms />
            <Info />
            <Footer />
        </div>
    );
};

export default BusinessOpPage;
