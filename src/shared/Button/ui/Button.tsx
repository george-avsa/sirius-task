function Button({
    children, fullWidth
}: {children: string, fullWidth?: boolean}) {
    return (
        <button className="button">
            {children}
        </button>
    );
}

export default Button;