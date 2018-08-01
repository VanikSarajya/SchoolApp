export function change(event){
    return {
        type: "CHANGE",
        event
    }
}

export function login(email,password){
}

export function isValid(email, password) {
    return email.length >= 6 && email.length<=45 && password.length>=6;
}