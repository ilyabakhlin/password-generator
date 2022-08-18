import {Password} from "../source/TypeScript/Classes/Password";

test("Test Something", (): void => {
    const password = new Password();
    expect(password.setLowercase()).toBe(true);
});
