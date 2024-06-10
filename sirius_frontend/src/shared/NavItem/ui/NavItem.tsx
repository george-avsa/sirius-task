import { Link } from "react-router-dom";

function NavItem({Icon, children, active, isAllowed, slug,}: {
    children: string,
    slug: string,
    active?: boolean,
    isAllowed: boolean
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
}) {

    // прошу понять и простить
    return slug ? (
        <Link to={slug} className="nav-item-link">  
            <div className={`nav-item ${active ? 'nav-item--active' : ''} ${!isAllowed ? 'nav-item--not-allowed' : ''}`}>
                <div className="nav-item__back"></div>
                <div className="nav-item__content">
                    <Icon />
                    <span>{children}</span>
                </div>
            </div>
        </Link>
    ) : (
        <div className={`nav-item ${active ? 'nav-item--active' : ''} ${!isAllowed ? 'nav-item--not-allowed' : ''}`}>
            <div className="nav-item__back"></div>
            <div className="nav-item__content">
                <Icon />
                <span>{children}</span>
            </div>
        </div>
    );
}

export default NavItem;