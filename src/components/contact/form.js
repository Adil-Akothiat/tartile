import React from "react";

const Form = ()=> {
    return (
        <form>
            <input 
                type="text" 
                name="name"
                id="name"
                placeholder="الاسم"
                required
            />
            <input 
                type="email" 
                name="mail"
                id="mail"
                placeholder="البريد الالكتروني"
                required
            />
            <input 
                type="number" 
                name="name"
                id="name"
                placeholder="رقم الهاتف"
                required
            />
            <input 
                type="text" 
                name="name"
                id="name"
                placeholder="البلد"
                required
            />
            <input 
                type="number" 
                name="name"
                id="name"
                placeholder="السن"
                maxLength="2"
                required
            />
            <select className="select">
                <option id="default" value="">المستوى</option>
                <option value="مبتدئ">مبتدئ</option>
                <option value="متوسط">متوسط</option>
                <option value="ماهر">ماهر</option>
            </select>
            <textarea 
                placeholder="النص"
                maxLength="250"
            />
            <button type="submit">إرسال</button>
        </form>
    );
}

export default Form;