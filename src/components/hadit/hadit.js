import React, { useEffect } from "react";

const Hadit = ()=> {
    useEffect(()=>{
        document.querySelector(".hadit-text").classList.add("hadit-text-show");
    }, [])
    return (
        <div className="hadit">
            <div className="cover-bg">
                <div 
                    className="hadit-text main-width"
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