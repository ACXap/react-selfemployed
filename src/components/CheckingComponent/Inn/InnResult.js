import React from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InnResultItem from "./InnResultItem";

export default class InnResult extends React.PureComponent {
    handleClickCopy = () => {
        navigator.clipboard.writeText(`ИНН: ${this.props.result.inn} Статус: ${this.props.result.status}`);
    }

    render() {
        const { inn, checkdate, status, error } = this.props.result;
        const header = error ? "ИНН проверен c ошибками" : "ИНН проверен";
        const cn = error ? "text-danger" : "text-success";

        return (
            <div className="container border p-3 mt-2">
                <div className="row">
                    <div className="row">
                        <div className="col-sm-11 text-center"> <h3 className={cn}>{header}</h3></div>
                        {error === "" && <div className="col-sm-1">
                            <FontAwesomeIcon color="green" icon={faCopy} size="2x" cursor="pointer" title="Скопировать результат" onClick={this.handleClickCopy} />
                        </div>}
                    </div>

                    <InnResultItem value={inn} title="Инн" className="col-sm-3 py-1" />
                    {error === "" && <InnResultItem value={status} title="Статус" className="col-sm-6 py-1" />}
                    <InnResultItem value={new Date(checkdate).toLocaleString()} title="Дата проверки" className="col-sm-3 py-1" />
                    {error !== "" && <InnResultItem value={error} title="Ошибка" className="col-sm-6 py-1" />}
                </div>
            </div>
        );
    }
}