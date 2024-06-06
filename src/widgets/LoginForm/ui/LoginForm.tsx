import Button from "Shared/Button/ui/Button";
import Checkbox from "Shared/Checkbox/ui/Checkbox";
import InputText from "Shared/Input/ui/Input";
import Link from "Shared/Link/ui/Link";

function LoginForm() {
    return (
        <form className="login-form">
            <InputText 
                type="text" 
                placeholder="Email" 
                additionalClass="login-form__text-input" 
            />
            <InputText 
                type="password"
                placeholder="Password" 
                additionalClass="login-form__text-input login-form__password"
            />
            <Checkbox additionalClass="login-form__checkbox" label='Запомнить меня'></Checkbox>
            <Button additionalClass="login-form__button">
                Войти
            </Button>

            <div className="login-form__links">
                <Link>Забыли пароль?</Link>
                <Link>Войти как тренер</Link>
            </div>

            <div className="login-form__registration">
                <span>Нет аккаунта?</span>
                <Link>Зарегистрироваться</Link>
            </div>
        </form>
    );
}

export default LoginForm;