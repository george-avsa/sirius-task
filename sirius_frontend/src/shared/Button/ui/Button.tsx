function Button({
    children, additionalClass, handleClick
}: {
    children: string, 
    additionalClass?: string,
    handleClick?: (e: React.FormEvent<HTMLButtonElement>) => void,
}) {

    const clases = additionalClass ? additionalClass : '';

    return (
        <button className={`button ${clases}`} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;