import React from "react";
import "./courses.css";

const Courses = () => {
    const courses = [
        {
            name: "الحفظ والتفسير مع أحكام التجويد",
            details: "دروس مكثفة في مادة التفسير والتجويد، مع مواكبة الحفظ بالطريقة الصحيحة."
        },
        {
            name: "دروس تحسين التلاوة",
            details: "دروس في علم المقامات  مع التطبيقات لتحسين التلاوة، والقراءة بالطريقة الصحيحة"
        },
        {
            name: "جميع الأعمار",
            details: "حصص خاصة بالرجال، وحصص للأطفال، وحصص للنساء أيضاً."
        },
        {
            name: "",
            details: ""
        }
    ]
    return (
        <div className="courses">
            <div 
                className="main-width"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <div 
                    className="cr"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <h3>دورة حزب عــم وسبح</h3>
                    <p>من هنا يمكنك التسجيل في الدورات المتاحة</p>
                    <a href="#contact" role="button">تسجيل الان</a>
                </div>
                <div 
                    className="my-gr"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <div>
                        <img src={require("../../assets/courses/quran.webp")} alt="tartile courses" />
                    </div>
                    <div className="courses-gr">
                        {
                            courses.map(({ name, details }, i) => (
                                <div
                                    key={"key -" + i}
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                >
                                    <span>0{i + 1}</span>
                                    <h3>{name}</h3>
                                    <p>{details}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;