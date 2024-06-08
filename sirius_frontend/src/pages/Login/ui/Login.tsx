import LoginForm from "Widgets/LoginForm/ui/LoginForm";
import LogoIcon from "App/assets/Logo.svg";

function Login() {
    return (
        <div className="login">
            <LogoIcon></LogoIcon>
            <h2 className="login__title">
                Вход в Sirius Future
            </h2>
            <LoginForm></LoginForm>
            <div className="language-switcher">
                <span className="language-switcher__item language-switcher__item--active">RU</span>
                <span className="language-switcher__item">EN</span>
            </div>
        </div>
    );
}

export default Login;