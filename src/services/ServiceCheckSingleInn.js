export default class ServiceCheckSingleInn {
    _repository = null;
    _lastInn = "";
    _lastResultInn = null;

    constructor(repository) {
        this._repository = repository;
    }

    async check(inn) {
        if (!inn) return { result: null, error: "ИНН пустой" };

        this._lastInn = inn;
        try {
            this._lastResultInn = await this._repository.checkListInn([this._lastInn], this._name);

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