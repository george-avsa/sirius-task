import NavItem from "Shared/NavItem/ui/NavItem";
import HomeIcon from "./../assets/home.svg";

function Navigation() {
    return (
        <nav className="navigation">
            <NavItem Icon={HomeIcon}>Главная</NavItem>
            <NavItem Icon={HomeIcon} active>Главная</NavItem>
            <NavItem Icon={HomeIcon}>Главная</NavItem>
            <NavItem Icon={HomeIcon}>Главная</NavItem>
            <NavItem Icon={HomeIcon}>Главная</NavItem>
            <NavItem Icon={HomeIcon}>Главная</NavItem>
            <NavItem Icon={HomeIcon}>Главная</NavItem>
            <NavItem Icon={HomeIcon}>Главная</NavItem>
            <NavItem Icon={HomeIcon}>Главная</NavItem>
        </nav>
    );
}

export default Navigation;