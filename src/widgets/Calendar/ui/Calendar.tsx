import CalendarSwitcher from "Features/CalendarSwitcher/ui/CalendarSwitcher";
import Button from "Shared/Button/ui/Button";
import HelpIcon from "./../assets/help.svg";
import getMonthGrid from "../lib/getMonthGrid";

function Calendar() {
    return (
        <div className="calendar">
            <div className="calendar__controller">
                <CalendarSwitcher></CalendarSwitcher>
                <div className="calendar__buttons">
                    <Button additionalClass="calendar__today-button">Сегодня</Button>
                    <HelpIcon className="calendar__help-button" />
                </div>
            </div>
            <div className="calendar__header">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((u, i) => (
                    <div className="calendar-item calendar-item--header">{u}</div>
                ))}
            </div>
            <div className="calendar__grid">
                {getMonthGrid(new Date()).map((date, day) => (
                    <div className="calendar-item">
                        <span className="calendar-item__day">{date.getDate()}</span>
                        <div className="calendar-item__lessons">
                            <div className="lesson"></div>  
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar;