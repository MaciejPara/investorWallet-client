import FetchClient from "./FetchClient";

class Model {
    constructor({ name, plural }) {
        this._name = name;
        this._plural = plural;
        this._fetchPending = false;
        this._data = [];
    }

    async _fetchData() {
        try {
            const result = await FetchClient.get({ url: `${this._plural}` });

            this._fetchPending = false;

            this._data = result;
        } catch (e) {
            console.error(e);
        }
    }

    getData() {
        if (this._data.length === 0 && !this._fetchPending) this._fetchData();

        return this._data;
    }
}

export default Model;
