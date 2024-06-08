function Link({
    children, target, additionalClass
}: {children: string, target?: '_blank', additionalClass?: string}) {

    const classes = additionalClass ? additionalClass : '';

    return (
        <a 
            href="#" 
            className={`link ${classes}`} 
            target={target}
        >
            {children}
        </a>
    );
}

export default Link;