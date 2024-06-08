function getMonthGrid(date: Date): Date[] {
    let firstDate = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0);

    const gridResult = [];

    while (firstDate.getDay() !== 1) {
        firstDate.setDate(firstDate.getDate() - 1);
    }

    while (+firstDate <= +lastDate) {
        gridResult.push(new Date(firstDate));
        firstDate.setDate(firstDate.getDate() + 1);
    }

    return gridResult;
}

export default getMonthGrid;