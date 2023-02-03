
export const message = data => {
    let message = '';
    message = message + Math.round(data.length / 1024) + " kb\n";
    message = message + data.length + " rows\n";
    message = message + data.columns.length + " columns\n";
    return message;
}