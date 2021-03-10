import React from "react";

export default class PreviewItem extends React.PureComponent {
    render() {
        const { Inn, Id, isValidInn, isValidId } = this.props.item;
        const titleId = isValidId ? "" : "Идентификатор должен быть числом";
        const titleInn = isValidInn ? "" : "ИНН не должен быть пустым";

        return (
            <div className="row border">
                <div className={`col-2 border-end ${isValidId || " bg-danger"}`} title={titleId}>{Id}</div>
                <div className={`col-10 ${isValidInn || " bg-danger"}`} title={titleInn}>{Inn}</div>
            </div>
        );
    }
}