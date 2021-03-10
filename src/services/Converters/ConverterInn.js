const convertStringToInn = (data) => {
    const list = [];

    if (data) {
        const rows = data.split(/\r\n|\n/);

        if (rows[0].split(";").length > 1) {
            for (const row of rows) {
                const items = row.split(";");
                list.push({ Id: items[0], Inn: items[1]?.trim() });
            }
        } else {
            let index = 1;
            for (const row of rows) {
                list.push({ Id: index++, Inn: row?.trim() });
            }
        }
    }

    return list;
}

const convertInnInfoToString = (innInfo) => {
    const data = ["id;inn;checkdate;status;error"];
    innInfo.forEach(el => {
        data.push(`${el.Id};${el.inn};${el.checkdate};${el.status ?? ""};${el.error ?? ""}`);
    });

    return data;
}

export { convertStringToInn, convertInnInfoToString }