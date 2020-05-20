import Messages from "./Messages";

class FetchClient extends Messages {
    constructor({ apiUrl }) {
        super();

        this._url = apiUrl;
        this._config = {
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": true,
                "Access-Control-Allow-Credentials": true,
            },
            credentials: "include",
        };
    }

    async get({ url }) {
        const response = await fetch(`${this._url}/${url}`, {
            ...this._config,
            method: "get",
        });
        return await response.json();
    }

    async post({ url, body }) {
        const response = await fetch(`${this._url}/${url}`, {
            ...this._config,
            method: "post",
            body: JSON.stringify(body),
        });

        if (response?.status === 401) return this._showUnauthorized();
        if (response?.status === 500) return this._showInternalServerError();

        return await response.json();
    }

    async delete({ url }) {
        const response = await fetch(`${this._url}/${url}`, {
            ...this._config,
            method: "delete",
        });
        return await response.json();
    }
}

export default new FetchClient({
    apiUrl:
        process.env.NODE_ENV === "development"
            ? "http://localhost:8080"
            : "https://investor-wallet.herokuapp.com",
});
