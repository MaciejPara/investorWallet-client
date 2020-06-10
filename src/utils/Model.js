class Model {
    constructor({ name, plural, sort, categoryName }) {
        this._name = name;
        this._plural = plural;
        this._fetchPending = false;
        this._data = [];
        this._sort = sort;
        this._categoryName = categoryName;
        this._allUrl = `/${this._plural}`;
        this._shouldRefresh = true;
    }

    setRefresh(state = false) {
        this._shouldRefresh = state;
    }

    shouldRefresh() {
        return this._shouldRefresh;
    }

    getAllUrl() {
        return this._allUrl;
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
