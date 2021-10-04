export const db_url = "https://tltm.herokuapp.com/";

export const fetchDbPost = async (url, token, payload) => {
    let data = { val: null, error: null };
    await fetch(`${db_url}${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(payload),
    })
        .then((res) => res.json())
        .then((res) => (data = { ...data, val: res }))
        .catch((err) => (data = { ...data, error: err.message }));
    return data;
};
export const fetchDbGet = async (url, token) => {
    let data = { val: null, error: null };
    await fetch(`${db_url}${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + token,
        },
    })
        .then((res) => res.json())
        .then((res) => (data = { ...data, val: res }))
        .catch((err) => (data = { ...data, error: err.message }));
    return data;
};
