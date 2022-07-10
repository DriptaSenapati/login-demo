import { policy } from './password_manger';
var util = require('util');

const createMessage = (exp) => {
    const msg = `
        1. ${util.format(exp[0].message, ...exp[0].format)}\n
        2. ${util.format(exp[2].message, ...exp[2].format)}\n
    `
    return (
        <div>
            <h3>Password Policy</h3>
            <ol>
                <li>{util.format(exp[0].message, ...exp[0].format)}</li>
                <li>{util.format(exp[2].message, ...exp[2].format)}</li>
                <ul>
                    {
                        exp[2].items.map((val) => (
                            <li>
                                {val.message}
                            </li>
                        ))
                    }
                </ul>
                <li>{util.format(exp[3].message, ...exp[3].format)}</li>
            </ol>
        </div>
    )
}

const validatePassword = (password) => {
    const p = policy.check(password)
    if(!p){
        var explained = policy.explain();
        console.log(explained);
        return {
            valid: false,
            exp: createMessage(explained)
        }
    }else{
        return {
            valid: true
        }
    }
}

export default validatePassword;