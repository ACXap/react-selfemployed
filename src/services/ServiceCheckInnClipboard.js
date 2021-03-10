import ServiceCheckInn from "./ServiceCheckInn";

export default class ServiceCheckInnClipboard extends ServiceCheckInn {
    _name = "Буфер обмена";

    initListInn(data) {
        return this._initList(data);
    }
}