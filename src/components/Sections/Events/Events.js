import React, {useEffect, useState} from 'react';
import './Events.scss'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import {eventsCard} from '../../../eventsCard'
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Card from "./Card";
SwiperCore.use([Navigation, Pagination]);
const Events = () => {
    const [isActive, setIsActive] = useState(false)
    const [count, setCount] = useState(Math.min(eventsCard.length, 3))
    useEffect(() => {
        const swiperModal = new Swiper('.modal-container', {
            // Optional parameters
            loop: true,
            width: 320,
            // If we need pagination
            pagination: {
                el: '.modal-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.modal-button-next',
                prevEl: '.modal-button-prev',
            },

        })
    }, [])
    return (
        <section className="events">
            <div className="container events__container">
                <p className="section__subtitle">Почему выбирают нас?</p>
                <h3 className="section__title">Новости</h3>
                {
                    eventsCard.slice(0, count).map(el => (
                        <Card el={el} key={el.id} setIsActive={setIsActive} />
                    ))
                }

                <div className={`modal ${isActive && `modal__show`}`}>
                    <div className="modal__wrapper">
                        <div className="modal__img">
                            <div className="modal-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide"><img src="./images/modal.png" alt="" /></div>
                                    <div className="swiper-slide"><img src="./images/modal.png" alt="" /></div>
                                    <div className="swiper-slide"><img src="./images/modal.png" alt="" /></div>
                                    <div className="swiper-slide"><img src="./images/modal.png" alt="" /></div>
                                    <div className="swiper-slide"><img src="./images/modal.png" alt="" /></div>
                                </div>
                                <div className="modal-pagination">
                                </div>
                                <div className="modal-button-prev">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="2" fill="black" fillOpacity="0.24"/>
                                        <g opacity="0.48">
                                            <path
                                                d="M23.0312 8.28125L12.0312 19.2812L11.3438 20L12.0312 20.7188L23.0312 31.7188L24.4688 30.2812L14.1875 20L24.4688 9.71875L23.0312 8.28125Z"
                                                fill="white"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="modal-button-next">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="2" fill="black" fillOpacity="0.24"/>
                                        <g opacity="0.48">
                                            <path
                                                d="M16.9688 8.28125L15.5312 9.71875L25.8125 20L15.5312 30.2812L16.9688 31.7188L27.9688 20.7188L28.6562 20L27.9688 19.2812L16.9688 8.28125Z"
                                                fill="white"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <svg
                                onClick={() => setIsActive(false)}
                                className="modal__close" width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="2" fill="black" fillOpacity="0.24"/>
                                <g opacity="0.48">
                                    <path
                                        d="M12.7188 11.2812L11.2812 12.7188L18.5625 20L11.2812 27.2812L12.7188 28.7188L20 21.4375L27.2812 28.7188L28.7188 27.2812L21.4375 20L28.7188 12.7188L27.2812 11.2812L20 18.5625L12.7188 11.2812Z"
                                        fill="white"/>
                                </g>
                            </svg>
                        </div>
                        <div className="modal__item">
                            <div className="modal__top">
                                <p className="modal__subtitle">Фотобудка</p>
                                <p className="events__time">
                                    <time>20 Марта 2021</time>
                                </p>
                            </div>
                            <h3 className="modal__title">Название события</h3>
                            <p className="modal__desc">
                                Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span>, sed do eiusmod
                                tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                        </div>
                    </div>
                </div>
                <button
                    onClick={() => setCount(count + 3)}
                    className={`events__show ${count === 21 && `events__hide`}`}>
                    Показать еще
                </button>
            </div>
        </section>
    );
};

export default Events;