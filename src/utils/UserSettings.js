import FetchClient from "./FetchClient";

class UserSettings {
    constructor(props) {
        this._options = props || {};
        this._baseUrl = "/user";
    }
    async changeBase(base) {
        const { id } = this._options;

        localStorage.setItem(
            "investorWalletUserSettings",
            JSON.stringify({ base })
        );

        this._options.base = base;

        return await FetchClient.update({
            url: `${this._baseUrl}/${id}`,
            body: { "settings.base": base },
        });
    }
    async changeFavourites(favourites) {
        const { id } = this._options;

        return await FetchClient.update({
            url: `${this._baseUrl}/${id}`,
            body: { favourites },
        });
    }

    setOptions(options) {
        this._options = { ...this._options, ...options };
    }

    getBase() {
        return this._options.base;
    }
}

export default UserSettings;
