import { AppDispatch, RootState } from "App/store/store";
import { fetchLessonByMonth } from "Entities/Lesson/store/lesson.store";
import { generateGrid } from "Entities/Schedule/store/schedule.store";
import Button from "Shared/Button/ui/Button";
import Select from "Shared/Select/ui/Select";
import Calendar from "Widgets/Calendar/ui/Calendar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Schedule() {

    const activeStudent = useSelector((state: RootState) => state.student.activeStudent);

    const dispatch = useDispatch<AppDispatch>();

    const lessonState = useSelector((state: RootState) => state.lesson);

    const activeMonth = useSelector((state: RootState) => state.lesson.date);

    useEffect(() => {
        if (activeStudent) {
            dispatch(fetchLessonByMonth(activeStudent));
        }
    }, [activeStudent, activeMonth]);

    useEffect(() => {
        dispatch(generateGrid({
            date: lessonState.date, 
            lessons: lessonState.lessons
        }))
    }, [lessonState]);

    return (
        <div className="schedule">
            <div className="schedule__header">
                <Select></Select>
                <Button additionalClass="schedule__change-button">Изменить расписание</Button>
            </div>
            <div className="schedule__calendar">
                <Calendar></Calendar>
            </div>
        </div>
    );
}

export default Schedule;