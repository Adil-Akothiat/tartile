const isValidName = (name)=> {
    if (name.length >= 2 && name.length <= 25) {
        return true;
    } else {
        return false;
    }
}
const isValidPhone = (phone)=> {
    if (/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone)) {
        return true;
    } else {
        return false;
    }
}
const isValidCountry = (country)=> {
    if (country.length >= 2 && country.length <= 20) {
        return true;
    } else {
        return false;
    }
}
const isValidAge = (age)=> {
    if (+age >= 4 && +age <= 99) {
        return true;
    } else {
        return false;
    }
}
const isValidLevel = (level)=> {
    if(level==="") {
        return false;
    }else {
        return true;
    }
}
const isValidEmail = (email)=> {
    if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)) {
        return true;
    }else {
        return false;
    }
}
const isValidMessage = (message)=> {
    if (message.length>=10 && message.length<=250) {
        return true;
    }else {
        return false;
    }
}
const isValidHizb = (hizb)=> {
    if(hizb==="") {
        return false;
    }else {
        return true;
    }
}

const validation = {
    isValidName,
    isValidPhone,
    isValidCountry,
    isValidAge,
    isValidLevel,
    isValidEmail,
    isValidMessage,
    isValidHizb
}

export default validation;