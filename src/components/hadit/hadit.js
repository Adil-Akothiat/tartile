import React from "react";
import "./hadit.css";

const Hadit = ()=> {
    return (
        <div className="hadit">
            <div className="cover-bg  main-width">
                <div 
                    className="hadit-text"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <div>
                        <span>قال رسول الله</span>
                        <span id="symbol">ﷺ</span>
                        <span>:</span>
                    </div>
                    <div>
                        <p>﴿ يُقَالُ لِصَاحِبِ الْقُرْآنِ : اقْرَأْ وَارْتَقِ وَرَتِّلْ ، كَمَا كُنْتَ تُرَتِّلُ فِي الدُّنْيَا ، فَإِنَّ مَنْزِلَكَ عِنْدَ آخِرِ آيَةٍ تَقْرَؤُهَا ﴾</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hadit;