import { RootState } from "App/store/store";
import Button from "Shared/Button/ui/Button";
import { useSelector } from "react-redux";

function LessonsBalance() {

    const lessonsStats = useSelector((state: RootState) => state.stats.stats);

    return (
        <div className="lessons-balance">
            <h6 className="lessons-balance__title">Баланс занятий</h6>
            <div className="lessons-balance__stats">
                {Object.keys(lessonsStats).map(name => (
                    <div className="lessons-balance__item">
                        <span className="lessons-balance__name">{name}</span>
                        <div className="lessons-balance__count">{lessonsStats[name]}</div>
                    </div>
                ))}
            </div>
            <Button additionalClass="lessons-balance__button">Button</Button>
        </div>
    );
}

export default LessonsBalance;