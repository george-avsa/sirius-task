import Button from "Shared/Button/ui/Button";
import Calendar from "Widgets/Calendar/ui/Calendar";

function Schedule() {
    return (
        <div className="schedule">
            <div className="schedule__header">
                <Button additionalClass="schedule__change-button">Изменить расписание</Button>
            </div>
            <div className="schedule__calendar">
                <Calendar></Calendar>
            </div>
        </div>
    );
}

export default Schedule;