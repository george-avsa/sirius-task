import { AppDispatch, RootState } from "App/store/store";
import { setFilter } from "Entities/Filter/store/filter.store";
import { Lesson } from "Entities/Lesson/store/lesson.store";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowIcon from './../assets/arrow.svg';
import CloseIcon from './../assets/close.svg';

type Filter = {
    id: string,
    name: string,
}

function Select() {

    const [isVisible, setIsVisible] = useState(false);
    const handleOptionClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        dispatch(setFilter(e.currentTarget.innerText));
        setIsVisible(false);
    }


    const lessons = useSelector((state: RootState) => state.lesson.lessons);

    const filters = useMemo(() => {
        return lessons.reduce((acc: Filter[], lesson: Lesson) => {
            let flag = true;
            acc.forEach(savedLesson => {
                if (savedLesson.name === lesson.name) {
                    flag = false;
                }
            })
            if (flag) {
                acc.push({id: lesson.id, name: lesson.name})
            }
            return acc;
        }, []);
    }, [lessons]);

    const filter = useSelector((state: RootState) => state.filter);
    
    const dispatch = useDispatch<AppDispatch>();

    const handleSelectClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsVisible(true);
    }

    const handleCloseClick = (e: React.MouseEvent<SVGAElement>) => {
        e.stopPropagation();
        setIsVisible(false);
        dispatch(setFilter(''));
    }

    return (
        <div className="custom-select" onClick={handleSelectClick}>
            <span>{filter ? filter : 'Выбрать предмет'}</span>
            {filter ? <CloseIcon onClick={handleCloseClick} /> : <ArrowIcon />}
            {isVisible ? (
                <div className="custom-select__dropdown">
                    {filters.map(filter => (
                        <div 
                            className="custom-select__option" 
                            key={filter.id}
                            onClick={handleOptionClick}
                        >
                                {filter.name}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default Select;