import { useState } from 'react';
import EyeIcon from './../assets/eye.svg'
import EyeHiddenIcon from './../assets/eyeHidden.svg'

type InputType = 'text' | 'password';

type InputTextType = {
    placeholder: string, 
    type: InputType, 
    additionalClass?: string, 
    value: string, 
    id: string,
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void,
    error?: string | null,
}

function InputText({
    placeholder, type, additionalClass, value, id, handleChange, error
}: InputTextType) {

    const classes = additionalClass ? additionalClass : '';

    // local state
    const [typeToShow, setTypeToShow] = useState<InputType>(type === 'password' ? 'password' : 'text');

    const handlePasswordVisibility = () => {
        setTypeToShow(typeToShow === 'password' ? 'text' : 'password');
    };

    return (
        <div className={`input-text input-text--error ${classes}`}>
            <input type={typeToShow} placeholder={placeholder} value={value} id={id} onChange={handleChange} />
            {type === 'password' && (
                <div className="input-text--pas-visibility" onClick={handlePasswordVisibility}>
                    {typeToShow === 'password' ? (
                        <EyeHiddenIcon></EyeHiddenIcon>
                    ) : (
                        <EyeIcon></EyeIcon>
                    )}
                </div>
            )}
            {error && (
                <div className='input-text__error-message'>
                    {error}
                </div>
            )}
        </div>
    );
}

export default InputText;