import { monthDictionary } from "../constants/monthDictionary";

export function getFormattedDate(date: string): string {
    const dateTime = new Date(date);
    return `${dateTime.getDate()} ${monthDictionary[dateTime.getMonth()]}`;
};