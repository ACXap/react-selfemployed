import React from "react";
import { serviceCheckSingleInn } from "../../../init";

import InnResult from "./InnResult";
import ProcessingCheck from "../../ProcessingCheck";

export default class FormInn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultInn: serviceCheckSingleInn.getLastResult() ?? "",
            requestInn: serviceCheckSingleInn.getLastInn() ?? "",
            processing: false
        }

        this.notifyError = props.notifyError;
        this.getResult = (adr) => serviceCheckSingleInn.check(adr);
        this.inputInn = React.createRef();
    }

    componentDidUpdate() {
        this.inputInn.current.focus();
    }
    componentDidMount() {
        this.inputInn.current.focus();
    }

    handleClickKey = (e) => {
        if (e.keyCode != 13) return;
        e.preventDefault();
        this.checking();
    }

    checking = async () => {
        if (this.state.processing) return;

        const inn = this.state.requestInn;
        if (inn) {
            this.setState({ processing: true });

            const json = await this.getResult(inn);
            if (json.error) this.notifyError(json.error, "Ошибка проверки ИНН");

            this.setState({ processing: false, resultInn: json.result });
        }
    }

    setInn = (e) => {
        this.setState({ requestInn: e.target.value });
    }

    render() {
        return (
            <div hidden={this.props.hidden}>
                <div className="input-group p-5">
                    <input className="form-control" disabled={this.state.processing} placeholder="ИНН" value={this.state.requestInn} ref={this.inputInn}
                        onKeyDown={this.handleClickKey}
                        onChange={this.setInn} />
                    <button className="btn btn-primary" disabled={this.state.processing}
                        onClick={this.checking}>Проверь меня полностью</button>
                </div>
                {this.state.processing && <ProcessingCheck message="Обработка запроса..." />}
                {this.state.resultInn && <InnResult result={this.state.resultInn} />}
            </div>
        );
    }
}