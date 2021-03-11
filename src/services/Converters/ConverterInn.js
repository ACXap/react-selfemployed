const convertStringToInn = (data) => {
    const list = [];

    if (data) {
        const rows = data.split(/\r\n|\n/);

        for (const row of rows) {
            list.push(row?.trim());
        }
    }

    return list;
}

const convertInnInfoToString = (innInfo) => {
    const data = ["inn;checkdate;status;error"];
    innInfo.forEach(el => {
        data.push(`${el.inn};${el.checkdate};${el.status ?? ""};${el.error ?? ""}`);
    });

    return data;
}

export { convertStringToInn, convertInnInfoToString }