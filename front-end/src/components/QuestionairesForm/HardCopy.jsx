import React from "react";
import FormCss from "./Form.module.scss";

import $ from "jquery";
const HardCopy = ({ mutualForm, state }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        var $log = $(".hardcopy"),
            html = $.parseHTML(mutualForm);
        $log.append(html);
        if (state) {
            const company1name =
                document.getElementsByClassName("company1name");
            const company2name =
                document.getElementsByClassName("company2name");
            const company1address =
                document.getElementsByClassName("company1address");
            const company2address =
                document.getElementsByClassName("company2address");
            console.log("yes");
            for (let i = 0; i < company1name.length; i++) {
                company1name[i].innerHTML = "Maqware";
            }
        }
    }, [mutualForm]);

    return <div className={`${FormCss.page} hardcopy`}>{}</div>;
};

export default HardCopy;
