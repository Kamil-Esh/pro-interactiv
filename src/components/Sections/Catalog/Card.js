import React, {useEffect, useState} from 'react';
import {buttons} from "../../../buttons";
import DetailsCard from "./DetailsCard";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import '../../../assets/css/swiper.css'
import SwiperCore, {Navigation, Pagination} from "swiper/core";
import Button from "./Button";
import {cardDetails} from "../../../cardDetails";
SwiperCore.use([Navigation, Pagination]);

const Card = ({el, setShow, show, setObj, obj, btn, setBtn, object, setObject}) => {
    const [isActive, setIsActive] = useState(null)
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            spaceBetween: 16,
            width: 296,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        })
    }, [])

    const handleClick = () => {
        setObject({
            ...object,
            title: el.name,
            value: el.price
        })
        setShow(true)
    }
    return (
        <div className='card'>
            <div className="card__img">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={el.image} alt="" /></div>
                        <div className="swiper-slide"><img src={el.image} alt="" /></div>
                        <div className="swiper-slide"><img src={el.image} alt="" /></div>
                        <div className="swiper-slide"><img src={el.image} alt="" /></div>
                        <div className="swiper-slide"><img src={el.image} alt="" /></div>
                    </div>
                    <div className="swiper-pagination">
                    </div>
                    <div className="swiper-button-prev">
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
                    <div className="swiper-button-next">
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
            </div>
            <h3 className="card__title">
                {el.name}
            </h3>
            <p className="card__size">
                Размер:
                <span>{el.size}</span>
            </p>
            <div className="options">
                <span className="options__title">Доп. опции</span>
                <div className="options__items">
                    {
                        cardDetails.map(el => (
                            <DetailsCard
                                setShow={setShow}
                                show={show}
                                setObj={setObj}
                                obj={obj}
                                btn={btn}
                                object={object}
                                key={el.id}
                                el={el}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="card__rent">
                <p className="card__rent-time">Укажите время аренды</p>
                {
                    buttons.map(el => (
                        <Button
                            btn={btn}
                            setBtn={setBtn}
                            el={el}
                            isActive={isActive}
                            setIsActive={setIsActive}
                            key={el.id}
                        />
                    ))
                }
            </div>
            <div className="card__request">
                <h3 className="card__price">{el.price} ₽</h3>
                <button
                    onClick={handleClick}
                    className="card__btn">
                    Оставить заявку
                </button>
            </div>
        </div>
);
};

export default Card;