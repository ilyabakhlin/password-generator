import {Password as PasswordInterface} from "../Interfaces/Password";

export class Password implements PasswordInterface {
    public setLowercase(): boolean {
        return true;
    }

}
