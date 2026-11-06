import { message } from "antd"

window.toastify = (msg, type) => {
    return message[type](msg)
}

window.isValidEmail = (email)=> {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
}
