function Button({
    children, additionalClass
}: {children: string, additionalClass?: string}) {

    const clases = additionalClass ? additionalClass : '';

    return (
        <button className={`button ${clases}`}>
            {children}
        </button>
    );
}

export default Button;