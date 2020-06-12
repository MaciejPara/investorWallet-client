class Model {
    constructor({ name, plural, sort, categoryName }) {
        this._name = name;
        this._plural = plural;
        this._fetchPending = false;
        this._data = [];
        this._sort = sort;
        this._categoryName = categoryName;
        this._shouldRefresh = true;
        this._baseUrl = `/${this._plural}`;
    }

    setRefresh(state = false) {
        this._shouldRefresh = state;
    }

    shouldRefresh() {
        return this._shouldRefresh;
    }

    getAllUrl(base) {
        return `${this._baseUrl}?filter=${JSON.stringify({
            base: base,
        })}&sort=${JSON.stringify({ createdAt: "desc" })}&limit=1`;
    }

    getCategoryName() {
        return this._categoryName;
    }

    getName() {
        return this._name;
    }

    getPlural() {
        return this._plural;
    }
}

export default Model;
