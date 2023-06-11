import React from "react";
import "./header.css";

const Header = ()=> {
    return (
        <header className="main-width">
            <div className="tartile-brand">
                <h1>لوكو ترتيل</h1>
                <p>طريقك إلى التلاوة الصحيحة</p>
            </div>
            <div>
                <a href="#contact" role="button">تواصل معنا</a>
            </div>
        </header>
    );
}

export default Header;