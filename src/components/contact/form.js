import React, { useState } from "react";
import validation from "./validation";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const [level, setLevel] = useState("");
    const [alert, setAlert] = useState({});


    const sendEmail = (e) => {
        e.preventDefault();
        const {
            isValidName,
            isValidPhone,
            isValidCountry,
            isValidAge,
            isValidLevel,
            isValidEmail,
            isValidMessage
        } = validation;
        if(isValidName(name)&&isValidPhone(phone)&&isValidCountry(country)&&isValidAge(age)&&isValidLevel(level)&&isValidEmail(email)&&isValidMessage) {
            setName("");setPhone("");setCountry("");setAge("");setEmail("");setMessage("");
            document.querySelector("select").children[0].selected="select";
            setAlert({open: true, valid: true, message:"تم التسجيل بنجاح!"});
        }else {
            setAlert({open: true, valid: false, message:"المرجو ملئ الإستمارة بطريقة صحيحة"});
        }
    }
    return (
        <form onSubmit={sendEmail}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="الاسم"
                value={name}
                onChange={({ target }) => {
                    setName(target.value);
                    if (validation.isValidName(target.value)) {
                        target.classList.remove("danger");
                    } else {
                        target.classList.add("danger");
                    }
                }}
                required
            />
            <input
                type="email"
                name="mail"
                id="mail"
                placeholder="البريد الالكتروني"
                value={email}
                onChange={({ target }) => {
                    setEmail(target.value);
                    if (validation.isValidEmail(target.value)) {
                        target.classList.remove("danger");
                    } else {
                        target.classList.add("danger");
                    }
                }}
                required
            />
            <input
                type="number"
                name="phone"
                id="phone"
                placeholder="رقم الهاتف"
                value={phone}
                onChange={({ target }) => {
                    setPhone(target.value);
                    if (validation.isValidPhone(target.value)) {
                        target.classList.remove("danger");
                    } else {
                        target.classList.add("danger");
                    }
                }}
                required
            />
            <input
                type="text"
                name="country"
                id="country"
                placeholder="البلد"
                value={country}
                onChange={({ target }) => {
                    setCountry(target.value);
                    if (validation.isValidCountry(target.value)) {
                        target.classList.remove("danger");
                    } else {
                        target.classList.add("danger");
                    }
                }}
                required
            />
            <input
                type="number"
                name="age"
                id="age"
                placeholder="السن"
                maxLength="2"
                value={age}
                onChange={({ target }) => {
                    setAge(target.value);
                    if (validation.isValidAge(target.value)) {
                        target.classList.remove("danger");
                    } else {
                        target.classList.add("danger");
                    }
                }}
                required
            />
            <select
                defaultValue="المستوى"
                onChange={({ target }) => {
                    setLevel(target.value);
                    if (validation.isValidLevel(target.value)) {
                        target.classList.remove("danger");
                    } else {
                        target.classList.add("danger");
                    }
                }}
            >
                <option value="">المستوى</option>
                <option value="مبتدئ">مبتدئ</option>
                <option value="متوسط">متوسط</option>
                <option value="ماهر">ماهر</option>
            </select>
            <textarea
                name="النص"
                placeholder="النص"
                maxLength="250"
                value={message}
                onChange={({ target }) => {
                    setMessage(target.value);
                    if (validation.isValidMessage(target.value)) {
                        target.classList.remove("danger");
                    } else {
                        target.classList.add("danger");
                    }
                }}
            />
            <button type="submit">إرسال</button>
            {
                alert.open?(
                    <div className={alert.valid?"alert-msg alert-success":"alert-msg  alert-danger"}>
                        <p>
                            {alert.message}
                        </p>
                    </div>
                ):null
            }
        </form>
    );
}

export default Form;