import React from "react";
import "./services.css"
import { AiFillCheckCircle } from "react-icons/ai";

const Services = ()=> {
    const services = [
        "حفظ القرأن للصغار والكبار",
        "دروس التجويد",
        "السيرة النبوية",
        "قصص الأنبياء"
    ]
    return (
        <div 
            className="services main-width my-grid"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
        >
            {
                services.map((service,i)=> (
                    <div key={"key-"+i}>
                        <span><AiFillCheckCircle /></span>
                        <span>{service}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default Services;