import React from "react";
import { RiFilePaper2Fill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { HiStatusOnline } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";

const Features = ()=> {
    return (
        <div className="features main-width my-grid">
            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <RiFilePaper2Fill />
                <h3>دورات متعددة</h3>
                <p>نمكنك من أن تصير مرتلا من خلال دورات حفظ سور القرآن الكريم مع التفسير وقواعد التجويد، أحكاماً وتطبيقات، ودورات لتعلم اللغة العربية وتدريب النطق الصحيح.</p>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <RiTeamFill />
                <h3>أستاذة متمكنون</h3>
                <p>نمكنك من أن تصير مرتلا من خلال أساتذة متخصصين في تحفيظ القرآن الكريم، وتعليم أحكام التجويد، واللغة العربية مع مدربين مختصين في تحسين الصوت والتلاوة.</p>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <HiStatusOnline />
                <h3>دروس أونلاين, بدون اختلاط</h3>
                <p>نمكنك من أن تصير مرتلا من خلال برنامج تعليمي متقن في بوابة خاصة عن بعد مع الحرص على مواكبة الحفظ من منزلك والالتزام بالنظام التعليمي.</p>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <FaUserGraduate />
                <h3>شهادات و إنجازات</h3>
                <p>نتوج مجهوداتك في الحفظ والاتقان بشواهد وإجازات وأسانيد متصلة إلى رسول الله ﷺ</p>
            </div>
        </div>
    );
}

export default Features;