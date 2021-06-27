import React, {useState} from 'react';
import './Video.scss'

const Video = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <section className="video">
            <div className="container video__container">
                <div className="video__wrapper">
                    <svg className="video__dots-svg" width="83" height="44" viewBox="0 0 83 44" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="3.15405" cy="3.13376" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="3.15399" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="3.15399" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="3.15399" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="3.15399" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="12.616" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="12.616" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="12.616" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="12.616" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="12.616" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="22.0779" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="22.0779" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="22.0779" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="22.0779" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="22.0779" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="31.5399" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="31.5399" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="31.5399" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="31.5399" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="31.5399" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="41.0019" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="50.4639" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="59.9258" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="69.3878" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="78.8497" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="41.0019" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="50.4639" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="59.9258" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="69.3878" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="78.8497" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="41.0019" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="50.4639" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="59.9258" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="69.3878" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="78.8497" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="41.0019" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="50.4639" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="59.9258" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="69.3878" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="78.8497" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="41.0019" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="50.4639" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="59.9258" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="69.3878" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                        <ellipse cx="78.8497" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                    </svg>
                    <div className="video__box">
                        <a
                            onClick={() => setIsActive(true)}
                            href="#" className="video__play-btn">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.0833 17L12.75 8.5V25.5L24.0833 17Z" fill="#EE3D48" stroke="#EE3D48"
                                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <div className={`video__play ${isActive && `show-video`}`}>
                            <svg
                                onClick={() => setIsActive(false)}
                                className="video__close" width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="2" fill="black" fillOpacity="0.24"/>
                                <g opacity="0.48">
                                    <path
                                        d="M12.7188 11.2812L11.2812 12.7188L18.5625 20L11.2812 27.2812L12.7188 28.7188L20 21.4375L27.2812 28.7188L28.7188 27.2812L21.4375 20L28.7188 12.7188L27.2812 11.2812L20 18.5625L12.7188 11.2812Z"
                                        fill="white"/>
                                </g>
                            </svg>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                                    title="YouTube video player" frameBorder="0" allow="autoplay"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <svg className="video__circle-svg" width="164" height="185" viewBox="0 0 164 185" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path
                                d="M134 88.5C134 123.018 106.018 151 71.5 151C36.9822 151 9 123.018 9 88.5C9 53.9822 36.9822 26 71.5 26C106.018 26 134 53.9822 134 88.5ZM34 88.5C34 109.211 50.7893 126 71.5 126C92.2107 126 109 109.211 109 88.5C109 67.7893 92.2107 51 71.5 51C50.7893 51 34 67.7893 34 88.5Z"
                                fill="#EE3D48"/>
                        </g>
                        <defs>
                            <filter id="filter0_d" x="-21" y="0" width="185" height="185" filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="15"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.933333 0 0 0 0 0.239216 0 0 0 0 0.282353 0 0 0 0.5 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

        </section>
    );
};

export default Video;