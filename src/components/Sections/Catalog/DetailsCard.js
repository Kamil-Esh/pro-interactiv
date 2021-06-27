import React, {useState} from 'react';
import _uniqueId from 'lodash/uniqueId';
import MobileOrder from "./MobileOrder";

const DetailsCard = ({el, setShow, show, setObj, obj, btn, object}) => {
    const [id] = useState(_uniqueId('prefix-'));
    const handleChange = (e) => {
        if (e.target.checked) {
            setObj([...obj, {name: el.develop, price: el.develop_price}])
        } else {
            setObj([...obj.filter(item => item.name !== el.develop)])
        }
    }
    return (
        <div className="options__item">
            <div className="options__img">
                <img src={el.develop_image} alt="" />
            </div>
            <div className="options__develop">
                <h4 className="options__subtitle">{el.develop}</h4>
                <div>
                    <input
                        onChange={handleChange}
                        type="checkbox" id={id} />
                    <label
                        htmlFor={id}>
                    </label>
                </div>
                <p className="options__price">от {el.develop_price} ₽</p>
            </div>
            <MobileOrder
                object={object}
                btn={btn}
                obj={obj}
                setShow={setShow}
                show={show}
                key={el.id}
            />
        </div>
    );
};

export default DetailsCard;