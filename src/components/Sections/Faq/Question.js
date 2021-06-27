import React, {useState} from 'react';

const Question = ({el}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div
            onClick={() => setIsActive(!isActive)}
            className={`faq__text-dropdown ${isActive && `faq__text-dropdown-active`}`}>
            <p className="faq__question">{el.question}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 16C11.7663 16.0005 11.5399 15.9191 11.36 15.77L5.35997 10.77C5.15575 10.6003 5.02733 10.3564 5.00295 10.0919C4.97857 9.8275 5.06023 9.56422 5.22997 9.36C5.39971 9.15578 5.64362 9.02736 5.90805 9.00298C6.17247 8.9786 6.43575 9.06026 6.63997 9.23L12 13.71L17.36 9.39C17.4623 9.30694 17.58 9.2449 17.7063 9.20747C17.8326 9.17004 17.9651 9.15795 18.0962 9.17189C18.2272 9.18582 18.3542 9.22552 18.4698 9.2887C18.5854 9.35187 18.6874 9.43727 18.77 9.54C18.8616 9.64282 18.9309 9.76345 18.9737 9.89432C19.0165 10.0252 19.0318 10.1635 19.0187 10.3006C19.0055 10.4376 18.9642 10.5705 18.8973 10.6909C18.8304 10.8112 18.7394 10.9165 18.63 11L12.63 15.83C12.4449 15.9555 12.2231 16.0154 12 16Z"
                        fill="#EE3D48"/>
                </svg>
            </p>
            <p className="faq__answer">
                {el.answer}
            </p>
        </div>
    );
};

export default Question;