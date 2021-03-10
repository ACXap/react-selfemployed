export default class Api {
    constructor(url) {
        this.BASE_URL = url;
    }

    async apiCheckSingleInn(inn) {
        const response = await fetch(this.BASE_URL + "check-inn?inn=" + inn);
        return this._getJson(response);
    }

    async apiCheckListInn(listInn) {
        const response = await fetch(this.BASE_URL + "check-inn", {
            method: 'POST',
            headers: this._getHeadersPost(),
            body: JSON.stringify(listInn)
        });
        return this._getText(response);
    }

    async apiGetStatusTask(id) {
        const response = await fetch(this.BASE_URL + "inn/status?id=" + id);
        return this._getJson(response);
    }

    async apiGetResultTask(id) {
        const response = await fetch(this.BASE_URL + "inn/result?id=" + id);
        return this._getJson(response);
    }

    async _getJson(response) {
        if (response.status == 200) {
            return await response.json();
        }

        const resultError = await response.json();
        console.log(resultError);
        throw new Error(`${resultError.error}  ${resultError.message}`);
    }

    async _getText(response) {
        if (response.status == 200) {
            return await response.text();
        }

        const resultError = await response.json();
        console.log(resultError);
        throw new Error(`${resultError.error}  ${resultError.message}`);
    }

    _getHeadersPost() {
        return {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Encoding': 'gzip, deflate, br'
        };
    }
}