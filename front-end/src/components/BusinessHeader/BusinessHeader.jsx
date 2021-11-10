import React from "react";
import BHeaderCss from "./BusinessHeader.module.scss";

const BusinessHeader = () => {
    return (
        <div className={BHeaderCss.container}>
            <div className={BHeaderCss.row}>
                <div className={BHeaderCss.col}>
                    <h2>
                        Keep your <span>business</span>
                        <br />
                        running <span>smoothly.</span>
                    </h2>
                    <p>
                        Affordable and accessible legal tools to help build your
                        business. Get the legal help you need from lawyers
                        without the expensive fees.
                    </p>
                </div>
                <div className={BHeaderCss.col}>
                    <img alt="" src="images/Group1000001452.png" />
                    <img
                        alt=""
                        src="images/Capa 1.png"
                        className={BHeaderCss.capa}
                    />
                </div>
            </div>
        </div>
    );
};

export default BusinessHeader;
