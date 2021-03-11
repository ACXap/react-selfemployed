import React from "react";
import PreviewItem from "./PreviewItem";

export default class PreviewCheck extends React.PureComponent {
    render() {
        const listP = this.props.list.map((el, index) => <PreviewItem key={index} item={el} />);

        return (
            <div className="p-2">
                <h5 className="text-center">Предварительный обзор данных для обработки (первые 10 записей)</h5>
                <div className="container">
                    <div className="row border">
                        <div className="col-10">ИНН</div>
                    </div>
                    {listP}
                </div>
            </div>
        );
    }
}