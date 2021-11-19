import React from "react";
import "./Spinner.scss";

export const SpinnerHOC =
    (WrappedComponent) =>
    ({ isLoading, ...otherProps }) =>
        isLoading ? (
            <div className="SpinnerOverlay">
                <div className="SpinnerContainer" />
            </div>
        ) : (
            <WrappedComponent {...otherProps}></WrappedComponent>
        );

export const Spinner = () => {
    return (
        <div className="SpinnerOverlay">
            <div className="SpinnerContainer" />
        </div>
    );
};
export const InsideSpinner = () => {
    return (
        <div className="SpinnerOverlay2">
            <div className="SpinnerContainer" />
        </div>
    );
};
