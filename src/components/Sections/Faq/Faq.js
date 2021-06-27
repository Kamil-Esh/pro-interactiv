import React from 'react';
import './Faq.scss'
import {questions} from '../../../questions'
import Question from "./Question";

const Faq = () => {
    return (
        <section className="faq">
            <div className="container faq__container">
                <p className="section__subtitle">Почему выбирают нас?</p>
                <h3 className="section__title">FAQ</h3>
                {
                    questions.map(el => (
                        <Question el={el} key={el.id} />
                    ))
                }

            </div>
        </section>
    );
};

export default Faq;