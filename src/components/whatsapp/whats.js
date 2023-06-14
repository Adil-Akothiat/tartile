import React from "react";
import "./whats.css";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Whatsapp = () => {
    return (
        <div className="whats">
            <a 
                href="https://wa.me/+447846325320" 
                role="button"
                target="_blank"
                rel="noreferrer"
            >
                <AiOutlineWhatsApp />
            </a>
        </div>
    )
}

export default Whatsapp;