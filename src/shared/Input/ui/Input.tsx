import { useState } from 'react';
import EyeIcon from './../assets/eye.svg'
import EyeHiddenIcon from './../assets/eyeHidden.svg'

type InputType = 'text' | 'password';

function InputText({
    placeholder, type
}: {placeholder: string, type: InputType}) {

    // local state
    const [typeToShow, setTypeToShow] = useState<InputType>(type === 'password' ? 'password' : 'text');

    const handlePasswordVisibility = () => {
        setTypeToShow(typeToShow === 'password' ? 'text' : 'password');
    };

    return (
        <div className="input-text">
            <input type={typeToShow} placeholder={placeholder} />
            {type === 'password' && (
                <button className="input-text--pas-visibility" onClick={handlePasswordVisibility}>
                    {typeToShow === 'password' ? (
                        <EyeHiddenIcon></EyeHiddenIcon>
                    ) : (
                        <EyeIcon></EyeIcon>
                    )}
                </button>
            )}
        </div>
    );
}

export default InputText;