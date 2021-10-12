import React from "react";
import FormCss from "./Form.module.scss";

import $ from "jquery";
const HardCopy = ({ currentForm, values }) => {
    let state = {};
    React.useEffect(() => {
        window.scrollTo(0, 0);
        var $log = $(".hardcopy"),
            html = $.parseHTML(currentForm.discreption);
        $log.append(html);
        fuck();
        if (values) {
            const keys = Object.keys(state);
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                const el = document.querySelectorAll(`.preview .${key}`);
                if (el.length > 0) {
                    for (let j = 0; j < el.length; j++) {
                        el[j].innerHTML = state[key];
                    }
                }
            }
        }
        // eslint-disable-next-line
    }, [currentForm, values]);
    console.log(currentForm);
    const fuck = () => {
        currentForm.pages.map((page) =>
            page.feilds.map((field) => {
                return (state = { ...state, [field.name]: field.value });
            })
        );
    };
    return <div className={`${FormCss.page} hardcopy`}>{}</div>;
};

export default HardCopy;
