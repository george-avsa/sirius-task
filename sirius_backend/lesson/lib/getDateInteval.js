"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDateInteval(date) {
    let firstDate = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0);
    while (firstDate.getDay() !== 1) {
        firstDate.setDate(firstDate.getDate() - 1);
    }
    return [firstDate, lastDate];
}
exports.default = getDateInteval;
//# sourceMappingURL=getDateInteval.js.map