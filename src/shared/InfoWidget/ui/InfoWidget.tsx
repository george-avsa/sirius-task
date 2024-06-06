type WidgetButton = {
    href: string,
    target?: '_blank',
    text: string,
    color?: string,
}

function InfoWidget({
    title,
    description,
    image,
    button,
    additionalClass
}: {
    title: string, 
    description: string, 
    image: string, 
    additionalClass?: string,
    button?: WidgetButton
}) {

    const classes = additionalClass ? additionalClass : '';
    
    return (
        <div className={`info-widget ${classes}`}>
            <h4 className="info-widget__title">{title}</h4>
            <h4 className="info-widget__description">{description}</h4>
            {button && <a className="info-widget__link" href={button.href} target={button.target}>{button.text}</a>}
            <h4 className="info-widget__back">
                <img src={image} className="info-widget__image" alt="" />
            </h4>
        </div>
    );
}

export default InfoWidget;