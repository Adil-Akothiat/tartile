import React from "react";
import "./courses.css";

const Courses = () => {
    const courses = [
        {
            name:"الحفظ والتفسير مع أحكام التجويد",
            details:"دروس مكثفة في مادة التفسير والتجويد، مع مواكبة الحفظ بالطريقة الصحيحة."
        },
        {
            name:"دروس تحسين التلاوة",
            details:"دروس في علم المقامات  مع التطبيقات لتحسين التلاوة، والقراءة بالطريقة الصحيحة"
        },
        {
            name:"جميع الأعمار",
            details:"حصص خاصة بالرجال، وحصص للأطفال، وحصص للنساء أيضاً."
        }
    ]

    return (
        <div className="courses">
            <div className="main-width">
                <div
                    className="welcom-tartile main-width"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <h2>دورات منصة ترتيل</h2>
                </div>
                <div className="courses-gr">
                    {
                        courses.map(({name, details}, i)=> (
                            <div 
                                key={"key-"+i}
                                data-aos="fade-up"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                            >
                                <span>0{i+1}</span>
                                <h3>{name}</h3>
                                <p>{details}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Courses;