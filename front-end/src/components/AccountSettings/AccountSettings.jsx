import React from "react";
import AddCard from "../DialoguePopup/AddCard";
import DialoguePopup from "../DialoguePopup/DialoguePopup";
import EditProfile from "../DialoguePopup/EditProfile";
import Preview from "../Preview/Preview";
import AccountSettingsCss from "./AccountSettings.module.scss";
const AccountSettings = ({ currentUser }) => {
    const [state, setstate] = React.useState({
        activeCard: "gold",
        user: currentUser,
    });
    const [popup, setpopup] = React.useState({
        editProfile: false,
        editCard: false,
    });
    const closePopup = () => {
        setpopup({ editCard: false, editProfile: false });
    };
    const togglePassword = (val) => {
        var x = document.getElementById(`${val}`);
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };
    return (
        <div className={AccountSettingsCss.container}>
            <div className={AccountSettingsCss.top}>
                <h4>Profile Setting</h4>
                <h5
                    onClick={() =>
                        setpopup({ editCard: false, editProfile: true })
                    }
                >
                    Edit Account ›{" "}
                </h5>
            </div>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do.
            </p>
            <form>
                <div className={AccountSettingsCss.row}>
                    <div className={AccountSettingsCss.col}>
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            defaultValue={state.user.name}
                            disabled
                        />
                    </div>
                    <div className={AccountSettingsCss.col}>
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            defaultValue=""
                            disabled
                        />
                    </div>{" "}
                    <div className={AccountSettingsCss.col}>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            placeholder="Enter Pone Number"
                            defaultValue={state.user.phone}
                            disabled
                        />
                    </div>
                </div>
                <hr />
                <h5>Password Setting</h5>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do.
                </p>
                <div className={AccountSettingsCss.col}>
                    <label>Current Password</label>
                    <input
                        type="password"
                        placeholder="Enter Current Password"
                        defaultValue="Johnfuckingdoe"
                        id="cp"
                    />
                    <img
                        alt=""
                        src="images/Group 1000001848.svg"
                        onClick={() => togglePassword("cp")}
                    />
                </div>
                <div className={AccountSettingsCss.col}>
                    <label>New Password</label>
                    <input
                        type="password"
                        placeholder="Enter New Password"
                        id="np"
                    />
                    <img
                        alt=""
                        src="images/Group 1000001848.svg"
                        onClick={() => togglePassword("np")}
                    />
                </div>
                <div className={AccountSettingsCss.col}>
                    <label>Re-enter Password</label>
                    <input
                        type="password"
                        placeholder="Enter New Password again"
                        id="rp"
                    />
                    <img
                        alt=""
                        src="images/Group 1000001848.svg"
                        onClick={() => togglePassword("rp")}
                    />
                </div>
                <div className={AccountSettingsCss.col}>
                    <input type="submit" value="Change Password" />
                </div>
                <hr />
                <div className={AccountSettingsCss.top}>
                    <h4>Payment Setting</h4>
                    <h5
                        onClick={() =>
                            setpopup({ editCard: true, editProfile: false })
                        }
                    >
                        Add Card ›{" "}
                    </h5>
                </div>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do.
                </p>
                <div className={AccountSettingsCss.ad_ons}>
                    <div className={AccountSettingsCss.ad_on}>
                        <div
                            className={`${AccountSettingsCss.card} ${
                                state.activeCard === "silver"
                                    ? AccountSettingsCss.activeCard
                                    : null
                            }`}
                            onClick={() =>
                                setstate({ ...state, activeCard: "silver" })
                            }
                        >
                            <label className={AccountSettingsCss.container2}>
                                <input
                                    type="radio"
                                    name="activeCard"
                                    value="silver"
                                    checked={state.activeCard === "silver"}
                                    onChange={(e) =>
                                        setstate({
                                            ...state,
                                            activeCard: e.target.value,
                                        })
                                    }
                                />
                                <span
                                    className={AccountSettingsCss.checkmark}
                                ></span>
                            </label>
                            <div className={AccountSettingsCss.top}>
                                <h2>
                                    4756 &#8226;&#8226;&#8226;&#8226;
                                    &#8226;&#8226;&#8226;&#8226; 3847
                                </h2>
                                <img alt="" src="images/path3789.svg" />
                            </div>
                        </div>
                        <div
                            className={`${AccountSettingsCss.card} ${
                                state.activeCard === "gold"
                                    ? AccountSettingsCss.activeCard
                                    : null
                            }`}
                            onClick={() =>
                                setstate({ ...state, activeCard: "gold" })
                            }
                        >
                            <label className={AccountSettingsCss.container2}>
                                <input
                                    type="radio"
                                    name="activeCard"
                                    value="gold"
                                    checked={state.activeCard === "gold"}
                                    onChange={(e) =>
                                        setstate({
                                            ...state,
                                            activeCard: e.target.value,
                                        })
                                    }
                                />
                                <span
                                    className={AccountSettingsCss.checkmark}
                                ></span>
                            </label>
                            <div className={AccountSettingsCss.top}>
                                <h2>
                                    4756 &#8226;&#8226;&#8226;&#8226;
                                    &#8226;&#8226;&#8226;&#8226; 3847
                                </h2>
                                <img alt="" src="images/Group 1000001865.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {popup.editProfile ? (
                <Preview>
                    <DialoguePopup
                        title={"Edit Your Profile"}
                        closePopup={closePopup}
                    >
                        <EditProfile
                            popup={popup}
                            setpopup={setpopup}
                            user={state.user}
                            setstate={setstate}
                        />
                    </DialoguePopup>
                </Preview>
            ) : null}
            {popup.editCard ? (
                <Preview>
                    <DialoguePopup title={"Add Card"} closePopup={closePopup}>
                        <AddCard setpopup={setpopup} popup={popup} />
                    </DialoguePopup>
                </Preview>
            ) : null}
        </div>
    );
};

export default AccountSettings;
