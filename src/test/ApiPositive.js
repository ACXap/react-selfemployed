export default class ApiPositive {
    constructor(url) {
        this.BASE_URL = url;
    }

    delay(delay) {
        return new Promise(resolve => setTimeout(resolve, delay));
    }

    async apiCheckSingleInn(inn) {
        return (1000 - 0.5 + Math.random() * (10000 - 1000 + 1)).toString();
    }

    async apiCheckListInn(listInn) {
        return (1000 - 0.5 + Math.random() * (10000 - 1000 + 1)).toString();
    }

    async apiGetStatusTask(id) {
        return { status: "COMPLETED", message: "Завершено", dateStatus: new Date() }
    }

    async apiGetResultTask(id) {
        return [{ inn: "123321123321123", checkdate: new Date(), status: true, error: "" },
        { inn: "123", checkdate: new Date(), status: null, error: "Inn not correctly" }];
    }
}