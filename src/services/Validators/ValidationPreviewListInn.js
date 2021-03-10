const validationPreviewListInn = (list) => {

    const result = list.map(a => {
        a.isValidId = parseInt(a.Id) ? true : false;
        a.isValidInn = a.Inn ? true : false;
        return a;
    });

    return result;
}

export default validationPreviewListInn;