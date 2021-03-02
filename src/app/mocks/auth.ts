import loginJson from './json/auth.login.json';
import meJson from './json/auth.me.json';
import registerJson from './json/auth.register.json';
export const auth = [

    {
        url: /authenticate/,
        method: 'post',
        response: (config: any)=>{
            return loginJson
        }
    }, {
        url: /auth\/register/,
        method: 'post',
        response: (config: any)=>{
            return registerJson
        }
    }, {
        url: /auth\/me/,
        method: 'post',
        response: (config: any)=>{
            return meJson
        }
    }, {
        url: /auth\/logout/,
        method: 'post',
        response: (config: any)=>{
            return {}
        }
    }
]