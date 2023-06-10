import React from "react";
import "./welcom.css";

const Welcom = ()=> {
    return (
        <div 
            className="welcom-tartile main-width"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
        >
            <h2>مرحبا بكم في منصة ترتيل</h2>
            <p>لتعليم القرآن الكريم وعلومـــه اطلع الآن على برامجنا التعليمية ومواعيـد الحصص.</p>
        </div>
    );
}

export default Welcom;