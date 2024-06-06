import { useState } from 'react';
import EyeIcon from './../assets/eye.svg'
import EyeHiddenIcon from './../assets/eyeHidden.svg'

type InputType = 'text' | 'password';

function InputText({
    placeholder, type, additionalClass
}: {placeholder: string, type: InputType, additionalClass?: string}) {

    const classes = additionalClass ? additionalClass : '';

    // local state
    const [typeToShow, setTypeToShow] = useState<InputType>(type === 'password' ? 'password' : 'text');

    const handlePasswordVisibility = () => {
        setTypeToShow(typeToShow === 'password' ? 'text' : 'password');
    };

    return (
        <div className={`input-text ${classes}`}>
            <input type={typeToShow} placeholder={placeholder} />
            {type === 'password' && (
                <div className="input-text--pas-visibility" onClick={handlePasswordVisibility}>
                    {typeToShow === 'password' ? (
                        <EyeHiddenIcon></EyeHiddenIcon>
                    ) : (
                        <EyeIcon></EyeIcon>
                    )}
                </div>
            )}
        </div>
    );
}

export default InputText;