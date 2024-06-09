import ArrowIcon from './../assets/arrow.svg';

function Icon({
    image,
    arrow,
    notifications,
    additionalClass,
    handleIconClick,
}: {
    image: {
        type: 'img' | 'svg',
        img: React.FunctionComponent<React.SVGAttributes<SVGElement>> | string
    },
    arrow?: boolean,
    notifications?: number,
    additionalClass?: string,
    handleIconClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
}) {

    const classes = additionalClass ? additionalClass : '';

    return (
        <div className={`icon-wrapper ${classes}`} onClick={handleIconClick}>
            <div className="icon">
                {(image.type === 'img') ? (
                    <div className='icon__image'>
                        <img src={image.img as string} alt="" />
                    </div>
                ) : (
                    <image.img />
                )}
                {(notifications !== undefined) && (
                    <div className="icon__notifications">
                        <span>{notifications}</span>
                    </div>
                )}
            </div>
            {arrow && (
                <ArrowIcon/>
            )}
        </div>
    );
}

export default Icon;