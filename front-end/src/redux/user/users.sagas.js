import { takeLatest, put, select } from "redux-saga/effects";
import { fetchDbGet, fetchDbPost } from "../../backend/backend";
import { toast } from "react-toastify";

import {
    forgetPasswordFailed,
    forgetPasswordSuccess,
    passwordResetFailed,
    passwordResetSuccess,
    signInFailed,
    signInSuccess,
    signOutFailed,
    signOutSuccess,
    signUpFailed,
    signUpSuccess,
    subscribePlanFailed,
    subscribePlanSuccess,
} from "./user.action";

// ----------------------------------------------------------
// Helper Functions
function* puttingUser(uid, token, local) {
    const response = yield fetchDbGet(
        `api/user/get-subscription-plan/${uid}`,
        token
    );
    const user = response.data[0];
    yield put(
        signInSuccess({
            user,
            token,
        })
    );
    yield sessionStorage.setItem(
        "currentUser",
        JSON.stringify({
            user,
            token,
        })
    );
    if (local) {
        yield localStorage.setItem(
            "currentUser",
            JSON.stringify({
                user,
                token,
            })
        );
    }
    toast.success("Logged in Successfully");
}
// ----------------------------------------------------------

function* gettingCurrentUserStart() {
    const currentUserFromStorage = yield JSON.parse(
        localStorage.getItem("currentUser")
    );
    const currentUserFromSession = yield JSON.parse(
        sessionStorage.getItem("currentUser")
    );
    if (currentUserFromSession) {
        yield put(
            signInSuccess({
                user: currentUserFromSession.user,
                token: currentUserFromSession.token,
            })
        );
    } else if (currentUserFromStorage) {
        yield put(
            signInSuccess({
                user: currentUserFromStorage.user,
                token: currentUserFromStorage.token,
            })
        );
    } else {
        console.log("No User found");
    }
}
export function* gettingCurrentUser() {
    yield takeLatest("GETTING_USER", gettingCurrentUserStart);
}

export function* signUpStart({ payload }) {
    try {
        const response = yield fetchDbPost("api/register", null, payload);
        if (response.user) {
            toast.success("Register SuccessFully, Kindly Login");
            yield put(signUpSuccess());
            // yield puttingUser(user.id, access_token.plainTextToken, true);
        } else if (response.error) {
            for (const key in response.error) {
                if (response.error.hasOwnProperty(key)) {
                    // console.log(`${key}: ${response.error[key]}`)
                    console.log(response.error[key][0]);
                    toast.error(response.error[key][0]);
                }
            }
            yield put(signUpFailed(response.error));
        }
    } catch (err) {
        yield put(signUpFailed(err.message));
    }
}
export function* signUp() {
    yield takeLatest("SIGN_UP_START", signUpStart);
}
// ----------------------------------------------------------

export function* signInStart({ payload }) {
    try {
        const response = yield fetchDbPost("api/login", null, {
            email: payload.email,
            password: payload.password,
        });
        if (response.user) {
            // Getting user from getsubplan
            if (payload.keepLogin) {
                yield puttingUser(
                    response.user.id,
                    response.access_token.plainTextToken,
                    true
                );
            } else {
                yield puttingUser(
                    response.user.id,
                    response.access_token.plainTextToken,
                    false
                );
            }
        } else if (response.message) {
            toast.error(response.message);
            yield put(signInFailed(response.message));
        } else {
            toast.error(response);
            yield put(signInFailed(response));
        }
    } catch (error) {
        yield put(signInFailed(error));
    }
}
export function* signIn() {
    yield takeLatest("SIGN_IN_START", signInStart);
}
// ----------------------------------------------------------

function* signOutStart() {
    const state = yield select();
    const token = state.userReducer.token;
    try {
        localStorage.removeItem("currentUser");
        sessionStorage.removeItem("currentUser");
        toast.success("Logout Successfully");
        yield put(signOutSuccess());
        if (token) {
            yield fetchDbPost("api/logout", token, null);
        }
    } catch (error) {
        yield put(signOutFailed(error));
        yield put(signOutSuccess());
        localStorage.removeItem("currentUser");
        sessionStorage.removeItem("currentUser");
        toast.success("Logout Successfully");
    }
}
export function* signOut() {
    yield takeLatest("SIGN_OUT_START", signOutStart);
}
// ----------------------------------------------------------

function* forgetPasswordStart({ payload }) {
    try {
        const response = yield fetchDbPost(
            "api/forgot-password",
            null,
            payload
        );
        if (response.response === "200") {
            toast.success(response.status);
            yield put(forgetPasswordSuccess());
        } else if (response.response === "500") {
            toast.warn(response.message);
            yield put(forgetPasswordFailed(response.message));
        } else {
            toast.error("No Email Found");
            yield put(forgetPasswordFailed());
        }
    } catch (error) {
        yield put(forgetPasswordFailed(error));
    }
}
export function* forgetPassword() {
    yield takeLatest("FORGET_PASSWORD_START", forgetPasswordStart);
}
// ----------------------------------------------------------

function* passwordResetStart({ payload }) {
    try {
        const response = yield fetchDbPost("api/reset-password", null, payload);
        if (response.response === "500") {
            toast.error("Link Has been expired, Kindly Request a New Link");
            yield put(passwordResetFailed(response.message));
        } else {
            yield put(passwordResetSuccess());
        }
    } catch (error) {
        yield put(passwordResetFailed(error));
    }
}
export function* passwordReset() {
    yield takeLatest("PASSWORD_RESET_START", passwordResetStart);
}
// ----------------------------------------------------------
function* subscribePlanStart({ payload }) {
    const state = yield select();
    const token = state.userReducer.token;
    const uid = state.userReducer.currentUser.id;
    try {
        const response = yield fetchDbGet(
            `api/user/subscribe-plan/${uid}/${payload.pid}`,
            token
        );
        if (response.response === "200") {
            toast.success("Plan Has Been Updated !");
            yield puttingUser(uid, token, false);
            yield put(subscribePlanSuccess());
        } else {
            yield put(subscribePlanFailed());
        }
    } catch (error) {
        yield put(subscribePlanFailed(error));
    }
}
export function* subscribePlan() {
    yield takeLatest("SUBSCRIBE_PLAN_START", subscribePlanStart);
}
// ----------------------------------------------------------
