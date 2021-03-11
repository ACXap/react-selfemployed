export default class ApiNegative {
    constructor(url) {
        this.BASE_URL = url;
    }

    delay(delay) {
        return new Promise(resolve => setTimeout(resolve, delay));
    }

    async apiCheckSingleInn(inn) {
        throw new Error("apiCheckSingleInn");
    }

    async apiCheckListInn(listInn) {
        throw new Error("apiCheckListInn");
    }

    async apiGetStatusTask(id) {
        throw new Error("apiGetStatusTask");
    }

    async apiGetResultTask(id) {
        throw new Error("apiGetResultTask");
    }
}