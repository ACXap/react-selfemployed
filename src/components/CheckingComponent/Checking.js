import React from "react";

import TabControl from "./Tab/TabControl";
import FormInn from "./Inn/FormInn";
import FormFile from "./FormFile.js";
import FormClipboard from "./FormClipboard";
import History from "./History/History";
import HeaderPage from "../HeaderPage";

export default class Checking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastTab: window.localStorage.getItem("lastTabNameCheckInn") ?? "tab-check-inn"
        }

        this.notifyError = props.notifyError;
    }

    changeTab = (e) => {
        this.setState({ lastTab: e });
        window.localStorage.setItem("lastTabNameCheckInn", e);
    }

    render() {
        const lt = this.state.lastTab;
        return (
            <div className="container p-5 shadow-lg">
                <HeaderPage header="Проверка ИНН" />

                <div className="container border border-primary mt-5">
                    <div className="tab-panel p-2">
                        <TabControl onChangeTab={this.changeTab} lastTab={lt} />
                        <FormInn notifyError={this.notifyError} hidden={lt !== "tab-check-inn"} />
                        <FormFile notifyError={this.notifyError} hidden={lt !== "tab-check-file"} />
                        <FormClipboard notifyError={this.notifyError} hidden={lt !== "tab-check-clipboard"} />
                        <History notifyError={this.notifyError} hidden={lt !== "tab-check-history"} />
                    </div>
                </div>
            </div>
        );
    }
}