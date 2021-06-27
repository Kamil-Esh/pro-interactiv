import React, {useState, useEffect} from 'react';
import {cardItems} from '../../../cardItems'
import Card from "./Card";
import './Catalog.scss'
import MobileOrder from "./MobileOrder";


const Catalog = () => {
    const [show, setShow] = useState(false)
    const [cards, setCards] = useState(cardItems)
    const [sortType, setSortType] = useState('По убыванию')
    const [obj, setObj] = useState([])
    const [btn, setBtn] = useState('')
    const [object, setObject] = useState({})
    useEffect(() => {
        const sortArray = type => {
            const types = {
                lower: 'price',
                high: 'price',
            };
            const sortProperty = types[type];
            const sorted = cards.sort(function (a, b) {
                if (a[sortProperty] > b[sortProperty]) {
                    return -1
                }
                if (a[sortProperty] < b[sortProperty]) {
                    return -1
                }
            })
            setCards(sorted);
        };

        sortArray(sortType);
    }, [sortType]);
    return (
        <section className="catalog">
            <div className="container catalog__container">
                <h2 className="catalog__title">Фотобудки</h2>
                <div className="catalog__sort">
                    <span className="catalog__subtitle">Сортировка:</span>
                    <select
                        onChange={(e)=> setSortType(e.target.value)}
                        id="price" className="catalog__select">
                        <option className="price__option" value="По умолчанию" selected disabled hidden>По умолчанию
                        </option>
                        <option value="lower">По возрастанию</option>
                        <option value="high">По убыванию</option>
                    </select>
                </div>
                {
                    cards.slice(0, 3).map(el => (
                        <Card
                            el={el}
                            setShow={setShow}
                            show={show}
                            setObj={setObj}
                            obj={obj}
                            btn={btn}
                            setBtn={setBtn}
                            object={object}
                            setObject={setObject}
                            key={el.id}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Catalog;