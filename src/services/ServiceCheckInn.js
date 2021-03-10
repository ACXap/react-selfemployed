import validationPreviewListInn from "./Validators/ValidationPreviewListInn";
import { convertStringToInn, convertInnInfoToString } from "./Converters/ConverterInn";
import { createPlainTextFile } from "./WorkFiles/CreateFiles";

export default class ServiceCheckInn {
    _repository;
    _listInn = [];
    _previewList = [];
    _result = "";
    _name = "";

    constructor(repository) {
        this._repository = repository;
    }

    async check() {
        this._result = "";
        let error = "";

        const result = await this._repository.checkListInn(this._listInn, this._name);

        if (result.data) {
            try {
                const list = convertInnInfoToString(result.data);
                const dataFile = createPlainTextFile(list);

                this._result = dataFile;
            } catch (e) {
                error = e.message;
            }
        }

        this._previewList = [];
        error = result.error;

        return { error: error, countRow: this._listInn.length, previewList: this._previewList, data: this._result }
    }

    _initList(data) {
        try {
            this._listInn = convertStringToInn(data);
            this._previewList = validationPreviewListInn(this._listInn.slice(0, 9));
            return { count: this._listInn.length, error: "", previewList: this._previewList, name: this._name };
        } catch (e) {
            this._restartState();
            return { count: this._listInn.length, error: e.message, previewList: this._previewList, name: this._name };
        }
    }

    _restartState() {
        this._listInn = [];
        this._previewList = [];
        this._result = "";
    }

    getResult() {
        return this._result;
    }
    getCountRow() {
        return this._listInn.length;
    }
    getListInn() {
        return this._listInn;
    }
    getPreviewList() {
        return this._previewList;
    }
    getName() {
        return this._name;
    }
}