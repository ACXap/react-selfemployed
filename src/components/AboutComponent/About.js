import React from "react";
import AboutSimpleText from "./AboutSimpleText";

export default class About extends React.PureComponent {
    render() {
        return (
            <div className="container p-5 shadow-lg overflow-auto" style={{ maxHeight: "1080px" }}>
                <AboutSimpleText header="Проверка ИНН">
                    <p className="lead"></p>
                </AboutSimpleText>

                <AboutSimpleText header="Корректный ИНН">
                    <p className="lead"></p>
                </AboutSimpleText>

                <AboutSimpleText header="Проверка ИНН по файлу">
                    <p className="lead">На главной страничке проекта можно проверить ИНН по файлу.
                    Для добавления файла следует воспользоваться соответствующей вкладкой. Файл можно выбрать при помощи стандартного диалога выбора,
                а так же просто перетащить его на форму.<br />Поддерживаемый формат: txt, csv.
                Возможная кодировка UTF-8 или windows-1251 (определяется автоматически)<br />
                Файл может содержать (заголовки не нужны): "ИНН" <br /></p>
                    <table className="table table-bordered table-sm text-center">
                        <thead>
                            <tr>
                                <th scope="col">Только ИНН</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ИНН</td>
                            </tr>
                            <tr>
                                <td>ИНН</td>
                            </tr>
                            <tr>
                                <td>ИНН</td>
                            </tr>
                        </tbody>
                    </table>
                </AboutSimpleText>

                <AboutSimpleText header="Проверка ИНН по буферу обмена">
                    <p className="lead">На главной страничке проекта так же можно проверить ИНН из буфера данных<br />
                        Данные должны иметь формат как и в предыдущем пункте, где мы проверяли ИНН из файла</p>
                </AboutSimpleText>

                <AboutSimpleText header="История">
                    <p className="lead">В разделе "История" можно просмотреть все свои проверки файлов и буфера обмена, проверить их статус и скачать завершенные задачи</p>
                </AboutSimpleText>

                <AboutSimpleText header="API">
                    <h5>Проверка одиночного ИНН - это GET запрос на адрес /api/1.0/check-inn?inn={`{требуемый ИНН}`}</h5>
                    <p className="lead">И в ответ будет уникальный GIUD задачи, пример: deb74f17-d553-45ed-b45c-24cd5c9c3406.<br />
            Тело запроса при этом:</p>

                    <div className="form-floating mx-5">
                        <textarea className="form-control p-1" style={{ height: "110px", width: "800px" }} defaultValue={`[
        "123123123123"
]`} /></div>

                    <h5>Орпонизация списка ИНН - это POST запрос на адрес /api/1.0/check-inn</h5>
                    <p className="lead">И в ответ будет уникальный GIUD задачи, пример: deb74f17-d553-45ed-b45c-24cd5c9c3406.<br />
            Тело запроса при этом:</p>

                    <div className="form-floating mx-5">
                        <textarea className="form-control p-1" style={{ height: "110px", width: "800px" }} defaultValue={`[
        "123123123123", "324234234234"
]`} /></div>

                    <h5>Получить статус выполняемой задачи - это GET запрос на адрес /api/1.0/check-inn/status?id=&#123;уникальный GUID
            полученный ранее&#125; </h5>
                    <div className="form-floating mx-5">
                        <textarea className="form-control p-1" style={{ height: "130px", width: "800px" }} defaultValue={`{
    "message":"Я все завершил. Я КрасафчеГ!",
    "status":"COMPLETED",
    "dateStatus":"2021-02-07T07:44:38.768+00:00"
}`} />
                    </div>

                    <h5>Получить результат выполняемой задачи - это GET запрос на адрес /api/1.0/check-inn/result?id=&#123;уникальный
                    GUID полученный
            ранее&#125; </h5>
                    <div className="form-floating mx-5">
                        <textarea className="form-control p-1" style={{ height: "470px", width: "800px" }} defaultValue={`[{
        "inn": "123321123",
        "checkDate":"2021-02-07T07:44:38.768+00:00"
        "status":null,
        "error": "Inn not correct"
}]`} />
                    </div>
                </AboutSimpleText>
            </div>
        )
    }
}