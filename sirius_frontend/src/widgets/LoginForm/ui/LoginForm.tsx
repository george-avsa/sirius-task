import { AppDispatch, RootState } from "App/store";
import Button from "Shared/Button/ui/Button";
import Checkbox from "Shared/Checkbox/ui/Checkbox";
import InputText from "Shared/Input/ui/Input";
import Link from "Shared/Link/ui/Link";
import { useDispatch, useSelector } from "react-redux";
import { changeValue, loginAuth } from "../model/loginReducer";
import { axiosClassic, axiosWithAuth } from "App/api/interceptors";
import { authService } from "App/api/auth.service";

function LoginForm() {

    const loginForm = useSelector((state:RootState) => state.loginForm);

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginAuth());
    }

    const handleExampleClick = async () => {
        const res = await axiosWithAuth.get('http://localhost:4200/api/lesson/29ea17a5-e33f-4a8f-8ed7-4a67479b6cbc/2024-06-07T14:51:33.094Z')
        console.log(res.data);
    }

    const handleExample2Click = async () => {
        const res = await authService.logout();
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <InputText
                id="email"
                error="неправильный email"
                value={loginForm.email} 
                type="text" 
                placeholder="Email" 
                handleChange={handleChange}
                additionalClass="login-form__text-input" 
                />
            <InputText 
                id="password"
                error="пароль должен быть не менее 8 символов"
                value={loginForm.password}
                type="password"
                placeholder="Password" 
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