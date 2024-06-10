import CalendarSwitcher from "Features/CalendarSwitcher/ui/CalendarSwitcher";
import Button from "Shared/Button/ui/Button";
import HelpIcon from "./../assets/help.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "App/store/store";
import { ScheduleDay } from "Entities/Schedule/store/schedule.store";
import Lesson from "Shared/Lesson/ui/Lesson";
import { getFormattedDate } from "../lib/getFormattedDate";
import { weekdays } from "../constants/weekDay";
import { setTodayDate } from "Entities/Lesson/store/lesson.store";
import Loader from "Shared/Loader/ui/Loader";

function Calendar() {

    const schedule = useSelector((state: RootState) => state.schedule);

    const filter = useSelector((state: RootState) => state.filter);

    const dispatch = useDispatch<AppDispatch>();

    const isLoading = useSelector((state: RootState) => state.lesson.isLoading);

    const screenWidth = window.innerWidth;
    
    return (
        <div className="calendar">
            {isLoading && <Loader></Loader>}
            <div className="calendar__controller">
                <CalendarSwitcher></CalendarSwitcher>
                <div className="calendar__buttons">
                    <Button 
                        handleClick={() => dispatch(setTodayDate())}
                        additionalClass="calendar__today-button"
                    >Сегодня</Button>
                    <HelpIcon className="calendar__help-button" />
                </div>
            </div>
            <div className="calendar__header">
                {weekdays.map((u, i) => (
                    <div key={i} className="calendar-item calendar-item--header">{u}</div>
                ))}
            </div>
            <div className="calendar__grid"
                style={{gridTemplateRows: screenWidth > 768 ? `repeat(${Math.ceil(schedule.length / 7)}, 1fr)` : ''}}
            >
                {schedule.map((day: ScheduleDay) => {
                    return (
                        <div className={`calendar-item ${(!day.lessons.length) ? 'calendar-item--empty' : ''}`} key={day.date}>
                            <span className="calendar-item__day" style={{opacity: !day.isAnotherMonth ? 1 : 0.5}}>
                                {getFormattedDate(day.date)}
                            </span>
                            <div className="calendar-item__lessons">
                                {day.lessons.map(lesson => {
                                    return (!filter || filter === lesson.name) ? (
                                        <Lesson
                                            key={lesson.id}
                                            name={lesson.name}
                                            endsAt={lesson.endsAt}
                                            startsAt={lesson.startsAt}
                                            isPast={day.isPast}
                                        ></Lesson>
                                    ) : null;
                                })}
                            </div>
                        </div>
                )})}
            </div>
        </div>
    );
}

export default Calendar;