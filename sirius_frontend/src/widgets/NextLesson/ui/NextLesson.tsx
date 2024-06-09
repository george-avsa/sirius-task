import { RootState } from "App/store/store";
import Button from "Shared/Button/ui/Button";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function getLeftDateString(timestampLeft: number): React.ReactNode {
    const date = new Date(timestampLeft);
    return (
        <>
            {`${date.getDate()}`.padStart(2, '0')} <span>д</span> 
            {`${date.getHours()}`.padStart(2, '0')} <span>ч</span> 
            {`${date.getMinutes()}`.padStart(2, '0')} <span>мин</span>
        </>
    );
}

function NextLesson() {

    const lessons = useSelector((state: RootState) => state.stats.lessons);

    const [timeLeft, setTimeLeft] = useState<number>(0);

    useEffect(() => {
        if (lessons[0] && lessons[0].startsAt) {
            const dateTimeNext = new Date(lessons[0].startsAt);
            setTimeLeft((+dateTimeNext) - (+new Date()));
        }
    }, [lessons]);

    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        function decrementTime() {
            if (timeLeft) {
                setTimeLeft((prevState) => (prevState - 1 * 60 * 1000));
            }
        }

        timeoutRef.current = setTimeout(decrementTime, 60000);

        return () => {
            clearTimeout(timeoutRef.current);
        }
        
    }, [timeLeft]);

    return (
        <div className="widget-next-lesson">
            <h6 className="widget-next-lesson__title">Следующее занятие начнется через:</h6>
            <p className="widget-next-lesson__time-left">
                {getLeftDateString(timeLeft)}    
            </p>
            <Button additionalClass="widget-next-lesson__button">Button</Button>
        </div>
    );
}

export default NextLesson;