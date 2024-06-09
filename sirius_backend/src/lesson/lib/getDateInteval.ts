function getDateInteval(date: Date): Date[] {
    let firstDate = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0);

    while (firstDate.getDay() !== 1) {
        firstDate.setDate(firstDate.getDate() - 1);
    }

    return [firstDate, lastDate];
}

export default getDateInteval;