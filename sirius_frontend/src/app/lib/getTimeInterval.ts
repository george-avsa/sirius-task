export function getTimeInterval(startsAt:string, endsAt:string):string {
    const startHours = `${new Date(startsAt).getHours()}`.padStart(2, '0');
    const startMinutes = `${new Date(startsAt).getMinutes()}`.padStart(2, '0');
    const endsHours = `${new Date(endsAt).getHours()}`.padStart(2, '0');
    const endsMinutes = `${new Date(endsAt).getMinutes()}`.padStart(2, '0');
    return `${startHours}:${startMinutes}-${endsHours}:${endsMinutes}`;
}