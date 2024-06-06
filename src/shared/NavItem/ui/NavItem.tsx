function NavItem({Icon, children, active}: {
    children: string,
    active?: boolean,
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
}) {
    return (
        <div className={`nav-item ${active ? 'nav-item--active' : ''}`}>
            <div className="nav-item__back"></div>
            <div className="nav-item__content">
                <Icon />
                <span>{children}</span>
            </div>
        </div>
    );
}

export default NavItem;