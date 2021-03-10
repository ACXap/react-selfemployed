export default class ServiceCheckSingleInn {
    _api = null;
    _lastInn = "";
    _lastResultInn = null;

    constructor(api) {
        this._api = api;
    }

    async check(inn) {
        if (!inn) return { result: null, error: "ИНН пустой" };

        this._lastInn = inn;
        try {
            this._lastResultInn = await this._api.apiCheckSingleInn(inn);
            return { result: this.getLastResult(), error: "" };
        } catch (e) {
            this._lastResultInn = null;
            return { result: null, error: e.message };
        }
    }

    getLastInn() {
        return this._lastInn;
    }

    getLastResult() {
        return this._lastResultInn;
    }
}