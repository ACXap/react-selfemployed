import React from "react";

export default class PreviewItem extends React.PureComponent {
    render() {
        const { inn, isValidInn } = this.props.item;
        const titleInn = isValidInn ? "" : "ИНН не должен быть пустым";

        return (
            <div className="row border">
                <div className={`col-12 ${isValidInn || " bg-danger"}`} title={titleInn}>{inn}</div>
            </div>
        );
    }
}