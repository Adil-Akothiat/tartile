import React from "react";
import { Link } from "react-router-dom";

const Header = ()=> {
    return (
        <header className="main-width">
            <div className="tartile-brand">
                <h1>لوكو ترتيل</h1>
                <p>طريقك إلى التلاوة الصحيحة</p>
            </div>
            <div>
                <Link to="/contact" role="button">تواصل معنا</Link>
            </div>
        </header>
    );
}

export default Header;