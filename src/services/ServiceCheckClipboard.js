import ServiceCheckInn from "./ServiceCheckInn";

export default class ServiceCheckClipboard extends ServiceCheckInn {
    _name = "Буфер обмена";

    initListInn(data) {
        return this._initList(data);
    }
}