import React from "react";
import { serviceCheckClipboard } from "../../init";

import ProcessingCheck from "../ProcessingCheck";
import FileResult from "./FileResult";
import PreviewCheck from "./Preview/PreviewCheck";

export default class FormClipboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            processing: false,
            countRow: serviceCheckClipboard.getCountRow() ?? 0,
            previewList: serviceCheckClipboard.getPreviewList() ?? [],
            resultFile: serviceCheckClipboard.getResult() ?? ""
        }
        this.notifyError = props.notifyError;
        this.getResult = () => serviceCheckClipboard.check();
        this.initListInn = (data) => serviceCheckClipboard.initListInn(data);
    }

    checking = async () => {
        if (this.state.countRow === 0 || this.state.processing) return;

        this.setState({ processing: true });
        const result = await this.getResult();
        if (result.error) this.notifyError(result.error, "Ошибка проверки ИНН");
        this.setState({ resultFile: result.data, previewList: result.previewList, countRow: result.countRow, processing: false });
    }

    initList = async () => {
        if (this.state.processing || !navigator.clipboard) return;

        try {
            const data = await navigator.clipboard.readText();
            if (!data) throw new Error("В буфере обмена нет подходящих данных");
            const result = this.initListInn(data);
            if (result.error) this.notifyError(result.error, "Ошибка обработки полученных данных");
            this.setState({ countRow: result.count, previewList: result.previewList, resultFile: "" });
        } catch (e) {
            this.notifyError(e.message, "Ошибка получения данных из буфера");
        }
    }

    render() {
        return (
            <div hidden={this.props.hidden}>
                <div className="d-flex p-5">
                    <button className="btn btn-primary" disabled={this.state.processing}
                        onClick={this.initList}>Вставить данные из буфера обмена</button>
                    <button className="btn btn-primary ms-auto" disabled={this.state.processing}
                        onClick={this.checking}>Проверь меня полностью</button>
                </div>
                <div className="px-2">Всего записей: {this.state.countRow}</div>

                { this.state.processing && <ProcessingCheck message="Обработка запроса..." />}
                { this.state.resultFile && <FileResult result={this.state.resultFile} nameDownload="clipboard.csv" />}
                { this.state.previewList.length > 0 && <PreviewCheck list={this.state.previewList} />}
            </div>
        )
    }
}