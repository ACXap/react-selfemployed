const validationPreviewListInn = (list) => {

    const result = list.map(a => {
        const inn = { inn: a };
        inn.isValidInn = a ? true : false;
        return inn;
    });

    return result;
}

export default validationPreviewListInn;