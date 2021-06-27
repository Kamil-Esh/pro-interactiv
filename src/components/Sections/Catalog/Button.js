import React from 'react';
import classnames from 'classnames';

const Button = ({el, setIsActive, isActive, setBtn}) => {
    const result = classnames('card__time', 'card__time-active')
    const handleClick = () => {
        setBtn(el.time)
        setIsActive(el.id)
    }

    return (
        <button
            onClick={handleClick}
            className={`${isActive === el.id ? result : 'card__time'}`}>{el.time}</button>
    );
};

export default Button;