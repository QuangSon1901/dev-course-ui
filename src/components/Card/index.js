import { Link } from 'react-router-dom';
import Button from '../Button';

const Card = ({ children }) => {
    return <div className="card">{children}</div>;
};

const CardItem = (props) => {
    let Comp = 'div';
    const propsComp = {};

    if (props.to) {
        propsComp.to = props.to;
        Comp = Link;
    }
    return (
        <Comp className="card__item" {...propsComp}>
            <div className="card__item__picture">
                <img src={process.env.REACT_APP_BASE_URL_FILE_UPLOAD + props.image} alt="" />
            </div>
            <div className="card__item__body">
                <div className="card__item__body__brand">
                    <i className="bx bx-signal-5"></i>
                    <span className="card__item__body__brand__span">Beginner</span>
                </div>
                <div className="card__item__body__title">
                    <h2 className="card__item__body__title__span">{props.name}</h2>
                </div>
                <div className="card__item__body__rate">
                    <ul className="card__item__body__rate__stars-icon">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                    </ul>
                    <div className="card__item__body__rate__star-core">4.6</div>
                    <div className="card__item__body__rate__comments">(1762)</div>
                </div>
                <span className="card__item__body__more">5 months at 5-10 hrs/week</span>
            </div>
        </Comp>
    );
};

export { CardItem };
export default Card;
