function Checkbox({label, additionalClass}: {label: string, additionalClass?: string}) {

    const classes = additionalClass ? additionalClass : '';

    return (
        <label className={`container ${classes}`}>
            <input type="checkbox" />
            {label}
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;