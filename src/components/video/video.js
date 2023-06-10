import React from "react";

const Video = () => {
    return (
        <div 
            className="tartile-video main-width"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
        >
            <video controls width="250">
                <source src={require("../../assets/video/ramadan.mp4")} type="video/mp4" />
            </video>
            <a href="#subscribe" role="button">
                اشترك الان
            </a>
        </div>
    );
}

export default Video;