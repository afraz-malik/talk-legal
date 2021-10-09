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
            const keys = Object.keys(state);
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                console.log(key);
                const el = document.querySelectorAll(`.preview .${key}`);
                if (el.length > 0) {
                    for (let j = 0; j < el.length; j++) {
                        el[j].innerHTML = state[key];
                    }
                }
            }
        }
    }, [mutualForm]);

    return <div className={`${FormCss.page} hardcopy`}>{}</div>;
};

export default HardCopy;
