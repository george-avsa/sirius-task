import { FormTypes, LoginSlice } from "../model/loginReducer";

function hasValueError(loginForm: LoginSlice, id: FormTypes) {
    const {value, matchString} = loginForm[id];
    const matchRegexp = new RegExp(matchString, 'g');
    const mathes = value.match(matchRegexp);
    return mathes?.length !== 1;
}

export default hasValueError;