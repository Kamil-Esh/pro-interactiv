import React from 'react';
import "./Contacts.scss"
const Contacts = () => {
    return (
        <section className="contacts">
            <div className="container contacts__container">
                <p className="section__subtitle">Мы всегда доступны для вас</p>
                <h3 className="section__title contacts__heading">Контакты</h3>
                <div className="contacts__content">
                    <div className="contacts__item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.6973 16.6507C21.8573 16.6307 20.8 16.5813 20.132 16.464C19.4093 16.336 18.54 16.088 17.928 15.8973C17.448 15.748 16.9253 15.88 16.5693 16.2347L13.6133 19.1733C11.5707 18.0973 9.93467 16.844 8.54933 15.4507C7.156 14.0653 5.90267 12.4293 4.82667 10.3867L7.76534 7.42933C8.12 7.07333 8.252 6.55067 8.10267 6.07067C7.91334 5.46 7.664 4.59067 7.53733 3.868C7.41867 3.2 7.37067 2.14267 7.34934 1.30267C7.332 0.576 6.74 0 6.01334 0H1.33333C0.749334 0 0 0.437334 0 1.33333C0 7.38533 2.45333 13.1653 6.62133 17.3787C10.8347 21.5467 16.6147 24 22.6667 24C23.5627 24 24 23.2507 24 22.6667V17.9867C24 17.26 23.424 16.668 22.6973 16.6507L22.6973 16.6507Z"
                                fill="#EE3D48"/>
                        </svg>
                        <div className="contacts__box">
                            <p className="contacts__title">Телефон</p>
                            <a href="tel: +7 495 123 45 67" className="contacts__desc">+7 495 123 45 67</a>
                        </div>
                    </div>
                    <div className="contacts__item">
                        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 0.666626C4.84536 0.666626 0.666687 4.84529 0.666687 9.99996C0.666687 16.6666 10 27.3333 10 27.3333C10 27.3333 19.3334 16.6666 19.3334 9.99996C19.3334 4.84529 15.1547 0.666626 10 0.666626ZM10 13.3333C8.15869 13.3333 6.66669 11.8413 6.66669 9.99996C6.66669 8.15863 8.15869 6.66663 10 6.66663C11.8414 6.66663 13.3334 8.15863 13.3334 9.99996C13.3334 11.8413 11.8414 13.3333 10 13.3333Z"
                                fill="#EE3D48"/>
                        </svg>
                        <div className="contacts__box">
                            <p className="contacts__title">Адрес</p>
                            <p className="contacts__desc">109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине
                                только с
                                улицы Люблинская</p>
                        </div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__box">
                            <p className="contacts__title">Почта</p>
                            <a href="mailto: Info@test.ru" className="contacts__desc"><u>Info@test.ru</u></a>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.43049564883665!2d37.734885857736074!3d55.67388362616899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab442a98eeeeb%3A0x1e24ffd86456122a!2z0L_RgC4g0JXQs9C-0YDRjNC10LLRgdC60LjQuSwgMtCQINGB0YLRgNC-0LXQvdC40LUgMTAsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMDkzODI!5e0!3m2!1sru!2skg!4v1624557891618!5m2!1sru!2skg"
                        width="360" height="360" style={{border: 0}} allowFullScreen="" loading="lazy">
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Contacts;