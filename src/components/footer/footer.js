import React from "react";
import "./footer.css";
import { BsTiktok } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { AiFillYoutube } from "react-icons/ai";

const Footer = ()=> {
    const socials = [
        {
            name:"tiktok",
            url:"https://www.tiktok.com/@tartel.quran?lang=fr"
        },
        {
            name:"instagram",
            url:"https://www.instagram.com/tartil_alquran_/"
        },
        {
            name:"facebook",
            url:"https://www.facebook.com/profile.php?id=100093255886692"
        },
        {
            name:"youtube",
            url:"https://www.youtube.com/channel/UCzqOtfFzjsckgfSsZIEoxcA"
        }
    ]
    return (
        <div className="footer">
            <div className="main-width">
                <div className="tartile-brand">
                    <h1>لوكو ترتيل</h1>
                    <p>طريقك إلى التلاوة الصحيحة</p>
                </div>
                <div className="socials-media">
                    {
                        socials.map(({name, url}, i)=> <a 
                            key={"key-"+i} 
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={name}
                        >{
                            name==="tiktok"?<BsTiktok />:
                            name==="instagram"?<AiOutlineInstagram />:
                            name==="facebook"?<CgFacebook />:<AiFillYoutube />
                        }</a>)
                    }
                </div>
            </div>
            <div className="copy-right">
                <p>جميع الحقوق محفوظة لمنصة ترتيل 
                    - {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
}

export default Footer;