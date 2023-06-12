import React from "react";
import "./contact.css";
import Form from "./form";

const Contact = ()=> {
    return (
        <div className="contact main-width">
            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <h2 id="contact">املأ الاستمارة</h2>
            </div>
            <div 
                className="contact-content"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <div>
                    <img src={require("../../assets/contact/quran.webp")} alt="tartile quran"/>
                </div>
                <div>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default Contact;