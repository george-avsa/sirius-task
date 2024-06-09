import StudentDropdown from "Shared/StudentDropdown/ui/StudentDropdown";
import Icon from "./Icon";
import { useEffect, useRef, useState } from "react";

function AvatarIcon() {
    
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleIconClick = (e:React.MouseEvent<HTMLDivElement>) => {
        setIsVisible(true);
    }

    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    
    return (
        <div className="avatar-icon" ref={ref}>
            {isVisible && (
                <StudentDropdown></StudentDropdown>
            )}
            <Icon
                image={{type: 'img', img: '/avatars/avatar1.png'}}
                arrow
                handleIconClick={handleIconClick}
            ></Icon>
        </div>
    );
}

export default AvatarIcon;