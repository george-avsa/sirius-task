const monthDict = [
    'Январь',
    'Ферваль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]

export function getFormattedMonth(date: string): string {
    const month = new Date(date).getMonth();
    return `${monthDict[month]} ${new Date(date).getFullYear()}`;
}