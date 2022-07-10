import { PasswordPolicy, charsets } from "password-sheriff";

export const policy = new PasswordPolicy({
    length: { minLength: 10 },
    contains: {
        expressions: [charsets.upperCase, charsets.numbers, charsets.lowerCase, charsets.specialCharacters]
    },
    containsAtLeast: {
        atLeast: 1,
        expressions: [charsets.upperCase, charsets.numbers, charsets.lowerCase, charsets.specialCharacters]
    },
    identicalChars: {
        max: 3
    }
})

