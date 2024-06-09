import { Lesson } from "Entities/Lesson/store/lesson.store";
import { ScheduleDay } from "../store/schedule.store";

function getMonthGrid(date: Date): string[] {
    let firstDate = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0);

    const gridResult = [];

    while (firstDate.getDay() !== 1) {
        firstDate.setDate(firstDate.getDate() - 1);
    }

    let counter = 0;

    while (+firstDate <= +lastDate) {
        gridResult.push(new Date(firstDate).toISOString());
        firstDate.setDate(firstDate.getDate() + 1);
        counter += 1;
        }
        
    const remains = Math.ceil(counter / 7) * 7;
    while (counter < remains) {
        gridResult.push(new Date(firstDate).toISOString());
        firstDate.setDate(firstDate.getDate() + 1);
        counter += 1;
    }

    return gridResult;
}

export function getScheduleDays(date: string, lessons: Lesson[]) {
    const dateTime = new Date(date);
    const days = getMonthGrid(dateTime);

    const lastDay = new Date(dateTime.getFullYear(), dateTime.getMonth()+1, 0);

    const nowDateTime = new Date();
    const nowDate = new Date(nowDateTime.getFullYear(), nowDateTime.getMonth(), nowDateTime.getDate());

    // O(n^2) ?? (maximum dates = 40) (maximum lessons = ?? (80-100))
    return days.map((day) => {

        const dayObject: ScheduleDay = {
            date: day,
            isPast: nowDate > new Date(day),
            isAnotherMonth: dateTime > new Date(day) || lastDay < new Date(day),
            lessons: [],
        };

        lessons.forEach((lesson: Lesson) => {
            const dateTime = new Date(lesson.startsAt);
            const date = new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate());
            if (date.toISOString() === day) {
                dayObject.lessons.push(lesson);
            }
        });

        return dayObject;
    })
}