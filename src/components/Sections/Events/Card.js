import React from 'react';

const Card = ({el, setIsActive}) => {

    return (
        <div
            onClick={() => setIsActive(true)}
            className="events__card">
            <div className="events__img">
                <img src={el.image} alt="" />
                <svg width="36" height="30" viewBox="0 0 36 30" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0L35.3205 30H0.679491L18 0Z" fill="#FAFAFA"/>
                </svg>
            </div>
            <p className="events__subtitle">Услуги</p>
            <h3 className="events__title">{el.name}</h3>
            <p className="events__desc">
                {el.desc}
            </p>
            <p className="events__time">
                <time>{el.date}</time>
            </p>
        </div>
    );
};

export default Card;