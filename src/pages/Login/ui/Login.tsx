import LoginForm from "Entities/LoginForm/ui/LoginForm";
import Button from "Shared/Button/ui/Button";
import Checkbox from "Shared/Checkbox/ui/Checkbox";
import InputText from "Shared/Input/ui/Input";

function Login() {
    return (
        <div className="login">
            <LoginForm></LoginForm>
        </div>
    );
}

export default Login;