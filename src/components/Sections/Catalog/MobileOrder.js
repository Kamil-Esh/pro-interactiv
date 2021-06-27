import React, {useState} from 'react';
import InputMask from 'react-input-mask'

const MobileOrder = ({setShow, show, obj, btn, object}) => {
    return (
        <div className={`mobile-wrapper ${show && `mobile-wrapper__show`}`}>
            <form className="mobile-form">
                <svg
                    onClick={() => setShow(false)}
                    className="mobile-form__svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7188 11.2812L11.2812 12.7188L18.5625 20L11.2812 27.2812L12.7188 28.7188L20 21.4375L27.2812 28.7188L28.7188 27.2812L21.4375 20L28.7188 12.7188L27.2812 11.2812L20 18.5625L12.7188 11.2812Z" fill="#6A6A6A"/>
                </svg>
                <h2 className="mobile-form__title">
                    Ваша заявка
                </h2>
                <div className="mobile-form__top">
                    <div className="mobile-form__table">
                        <h6 className="mobile-form__subtitle">{object.title}</h6>
                        <p className="mobile-form__size">Размер: <span>2м x 1.5м x 2 м</span></p>
                    </div>
                    <p className="mobile-form__price">{object.value} ₽</p>
                </div>
                <select
                    defaultValue={btn}
                    value={btn}
                    className="mobile-form__time">
                    <option value="1 час">1 час</option>
                    <option value="2 часа">2 часа</option>
                    <option value="3 часа">3 часа</option>
                    <option value="5 часов">5 часов</option>
                    <option value="выставка 2 дня">2 дня</option>
                    <option value="выставка 3 дня">3 дня</option>
                </select>
                {
                    obj.map(el => (
                        <div key={el.id} className="mobile-form__item">
                            <h6 className="mobile-form__subtitle">{el.name}</h6>
                            <p className="mobile-form__price">{el.price} ₽</p>
                        </div>
                    ))
                }
                <div className="mobile-form__bottom">
                    <h3 className="mobile-form__total">Итого:</h3>
                    <h2 className="mobile-form__heading">
                        {object.value + obj.reduce((acc,rec) => {
                            return acc + rec.price
                        }, 0)} ₽</h2>
                </div>
                <div className="mobile-form__phone">
                    <InputMask mask="+7 (999) 999 99 99" type="text" placeholder='+7 (000) 000 00 00'/>
                    <select>
                        <option value="Позвоните мне" selected>Позвоните мне</option>
                        <option value="Позвоните мне">Позвоните мне</option>
                        <option value="Позвоните мне">Позвоните мне</option>
                    </select>
                </div>
                <button className="mobile-form__btn">
                    Отправить заявку
                </button>
            </form>


        </div>
    );
};

export default MobileOrder;