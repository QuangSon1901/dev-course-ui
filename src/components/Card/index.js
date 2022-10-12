import Button from '../Button';

const Card = ({ children }) => {
    return <div className="card">{children}</div>;
};

const CardItem = () => {
    return (
        <div className="card__item">
            <div className="card__item__picture">
                <img
                    src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/4zEEr4FUkSQ7U1UgVPPCHB/d4c2b2a0df97251f8c64a4e1b248f313/data_engineer_catalog_image.jpg?fm=webp&q=100&w=300"
                    alt=""
                />
            </div>
            <div className="card__item__body">
                <div className="card__item__body__brand">
                    <i className="bx bx-signal-5"></i>
                    <span className="card__item__body__brand__span">Beginner</span>
                </div>
                <div className="card__item__body__title">
                    <h2 className="card__item__body__title__span">Data Engineer</h2>
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
                <Button primary>Xem chi tiết</Button>
            </div>
        </div>
    );
};

export { CardItem };
export default Card;
