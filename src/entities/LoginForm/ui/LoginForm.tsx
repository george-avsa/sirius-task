import Button from "Shared/Button/ui/Button";
import Checkbox from "Shared/Checkbox/ui/Checkbox";
import InputText from "Shared/Input/ui/Input";

function LoginForm() {
    return (
        <form className="login-form">
            <InputText placeholder="Email" type="text"></InputText>
            <InputText placeholder="Password" type="password"></InputText>
            <Checkbox label='Запомнить меня'></Checkbox>
            <Button>Войти</Button>
        </form>
    );
}

export default LoginForm;