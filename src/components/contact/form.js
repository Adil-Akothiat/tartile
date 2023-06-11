import React, { useState } from "react";

const Form = ()=> {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    // const [level, setLevel] = useState("");

    // const valid = ()=> {
    //     let isValid = [];
    //     if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)) {
    //         isValid.push({name:"phone", valid: true});
    //     }else {
    //         isValid.push({name:"phone", valid: false});
    //     }
    //     if(name.length>=2 && name.length <= 25) {
    //         isValid.push({name:"name", valid:true});
    //     }else {
    //         isValid.push({name:"name", valid:false});
    //     }
    //     if(country.length>=2 && country.length>=20) {
    //         isValid.push({name:"country", valid:true});
    //     }else {
    //         isValid.push({name:"country", valid:true});
    //     }
    //     if(+age>=4 && +age<=99) {
    //         isValid.push({name:"age", valid:true});
    //     }else {
    //         isValid.push({name:"age", valid:true});
    //     }
    //     if(level!=="" || level!=="المستوى") {
    //         isValid.push({name:"level", valid:true});
    //     }else {
    //         isValid.push({name:"level", valid:false});
    //     }
    //     return isValid;
    // }
    const sendEmail = (e)=> {
        e.preventDefault();
        // console.log()
    }
    return (
        <form onSubmit={sendEmail}>
            <input 
                type="text" 
                name="name"
                id="name"
                placeholder="الاسم"
                value={name}
                onChange={({target})=> setName(target.value)}
                required
            />
            <input 
                type="email" 
                name="mail"
                id="mail"
                placeholder="البريد الالكتروني"
                value={email}
                onChange={({target})=> setEmail(target.value)}
                required
            />
            <input 
                type="number" 
                name="phone"
                id="phone"
                placeholder="رقم الهاتف"
                value={phone}
                onChange={({target})=> setPhone(target.value)}
                required
            />
            <input 
                type="text" 
                name="country"
                id="country"
                placeholder="البلد"
                value={country}
                onChange={({target})=> setCountry(target.value)}
                required
            />
            <input 
                type="number" 
                name="age"
                id="age"
                placeholder="السن"
                maxLength="2"
                value={age}
                onChange={({target})=> setAge(target.value)}
                required
            />
            <select
                defaultValue="المستوى"
                // onChange={(e) => setLevel(e.target.value)}
            >
                <option value="">المستوى</option>
                <option value="مبتدئ">مبتدئ</option>
                <option value="متوسط">متوسط</option>
                <option value="ماهر">ماهر</option>
            </select>
            <textarea 
                placeholder="النص"
                maxLength="250"
                value={message}
                onChange={({target})=> setMessage(target.value)}
            />
            <button type="submit">إرسال</button>
        </form>
    );
}

export default Form;