export const db_url = "https://tltm.herokuapp.com/";
// export const db_url = "http://localhost:8000/";
export const fetchDbPost = async (url, token, payload) => {
    try {
        return fetch(`${db_url}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(payload),
        })
            .then((res) => res.json())
            .catch((error) => error);
    } catch (error) {
        throw error;
    }
};

export const fetchDbGet = async (url, token) => {
    return fetch(`${db_url}${url}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + token,
        },
    }).then((res) => res.json());
};
