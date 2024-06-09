function SmallWidget({
    title, Icon, color
}: {title: string, Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>, color: string}) {
    return (
        <div className="small-widget" style={{background: color}}>
            <h6 className="small-widget__title">
                {title}
            </h6>
            <div className="small-widget__icon">
                <Icon />
            </div>
        </div>
    );
}

export default SmallWidget;