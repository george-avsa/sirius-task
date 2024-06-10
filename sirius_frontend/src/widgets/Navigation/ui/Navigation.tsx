import { AppDispatch, RootState } from "App/store/store";
import NavItem from "Shared/NavItem/ui/NavItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setActibeBySlug } from "../store/menuItems";


function Navigation() {

    const menuItems = useSelector((state: RootState) => state.menuItems);

    const href = useLocation();

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setActibeBySlug(href.pathname));
    }, [href]);

    return (
        <nav className="navigation">
            {menuItems.map(menuItem => (
                <NavItem 
                    key={menuItem.text}
                    slug={menuItem.slug}
                    Icon={menuItem.icon} 
                    active={menuItem.active} 
                    isAllowed={menuItem.isAllowed}
                >{menuItem.text}</NavItem>
            ))}
        </nav>
    );
}

export default Navigation;