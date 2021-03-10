import React from "react";
import TabItem from "./TabItem";

export default class TabControl extends React.PureComponent {
    onChangeTab = () => { console.warn("no listener onChangeTab") };

    tabInn = "tab-check-inn";
    tabFile = "tab-check-file";
    tabClipboard = "tab-check-clipboard";
    tabHistory = "tab-check-history";

    render() {
        return (
            <div className="tab-panel-tabs p-2">
                <TabItem name="Проверка ИНН" title="Проверка одиночного ИНН"
                    onClick={this.props.onChangeTab} tabName={this.tabInn} isActiveTab={this.props.lastTab === this.tabInn} />
                <TabItem name="Файл" title="Проверка выбранного файла"
                    onClick={this.props.onChangeTab} tabName={this.tabFile} isActiveTab={this.props.lastTab === this.tabFile} />
                <TabItem name="Буфер обмена" title="Проверка текстовых данных из буфера обмена"
                    onClick={this.props.onChangeTab} tabName={this.tabClipboard} isActiveTab={this.props.lastTab === this.tabClipboard} />
                <TabItem name="История" title="Отслеживать свои работы"
                    onClick={this.props.onChangeTab} tabName={this.tabHistory} isActiveTab={this.props.lastTab === this.tabHistory} />
            </div>
        );
    }
}