import { AppDispatch } from "App/store";
import Button from "Shared/Button/ui/Button";
import Checkbox from "Shared/Checkbox/ui/Checkbox";
import InputText from "Shared/Input/ui/Input";
import Link from "Shared/Link/ui/Link";
import { useDispatch, useSelector } from "react-redux";
import { FormTypes, changeValue, loginAuth, setError } from "../model/loginReducer";
import { axiosWithAuth } from "App/api/interceptors";
import { authService } from "App/api/auth.service";
import { RootState } from "App/store/store";
import hasValueError from "../lib/hasValueError";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

function LoginForm() {

    const loginForm = useSelector((state:RootState) => state.loginForm);

    const navigate = useNavigate();
    
    useEffect(() => {
        if (loginForm.authSuccess && !loginForm.authError) {
            navigate('/', {replace: true});
        }
    }, [loginForm])


    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const inputElement = e.currentTarget;
        if (inputElement) {
            dispatch(changeValue({
                id: inputElement.getAttribute('id') || '',
                value: inputElement.value,
            }))
        }
    };

    const handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
        const inputElement = e.currentTarget as HTMLInputElement;
        const id = inputElement.getAttribute('id') as FormTypes;
        const hasError = hasValueError(loginForm, id);
        if (hasError) {
            dispatch(setError(id));
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputTypes: FormTypes[] = ['email', 'password'];
        let noError: boolean = true;
        inputTypes.forEach(type => {
            const inputHasError = hasValueError(loginForm, type);
            if (inputHasError) {
                noError = false;
                dispatch(setError(type));
            }
        });
        if (noError) {
            dispatch(loginAuth());
        }
    }

    const handleExampleClick = async () => {
        const res = await axiosWithAuth.get('http://3073383-ca55064.twc1.net:90/api/lesson/29ea17a5-e33f-4a8f-8ed7-4a67479b6cbc/2024-06-07T14:51:33.094Z')
    }

    const handleExample2Click = async () => {
        const res = await authService.logout();
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <InputText
                id="email"
                value={loginForm.email.value} 
                error={loginForm.email.error}
                type="text" 
                placeholder="Email" 
                additionalClass="login-form__text-input" 
                handleBlur={handleBlur}
                handleChange={handleChange}
            />
            <InputText 
                id="password"
                error={loginForm.password.error}
                value={loginForm.password.value}
                type="password"
                placeholder="Password" 
                handleBlur={handleBlur}
                handleChange={handleChange}
                additionalClass="login-form__text-input login-form__password"
                />
            <Checkbox additionalClass="login-form__checkbox" label='Запомнить меня'></Checkbox>
            <Button additionalClass="login-form__button">
                Войти
            </Button>

            <div className="login-form__links" onClick={handleExampleClick}>
                <Link>Забыли пароль?</Link>
                <Link>Войти как тренер</Link>
            </div>

            <div className="login-form__registration" onClick={handleExample2Click}>
                <span>Нет аккаунта?</span>
                <Link>Зарегистрироваться</Link>
            </div>
        </form>
    );
}

export default LoginForm;