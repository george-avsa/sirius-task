function Checkbox({label}: {label: string}) {
    return (
        <label className="container">
            <input type="checkbox" />
            {label}
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;