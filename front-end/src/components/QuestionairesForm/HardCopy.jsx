import React from "react";
import FormCss from "./Form.module.scss";

import $ from "jquery";
const HardCopy = ({ mutualForm }) => {
    React.useEffect(() => {
        var $log = $(".hardcopy"),
            html = $.parseHTML(mutualForm);
        $log.append(html);
    }, [mutualForm]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={`${FormCss.page} hardcopy`} id="muahdlkf">
            {}
        </div>
    );
};

export default HardCopy;
