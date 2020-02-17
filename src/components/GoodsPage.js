import React from 'react';
import { Link, Redirect } from 'react-router-dom';



const GoodsPage = (props) => {
  const {goods, match: {params}, handleAddToCart} = props;
  const {id} = params;
  const item = goods.filter( (i) => i.id === id )[0];
  if (item === undefined) return <Redirect to="/" />;
  const {name, price, cover, description} = item;
  return (
    <>
      <div className="goods-page">
        <div>
          <Link to="/"><div className="goods-page-back-btn">← назад</div></Link>
          <div className="goods-page-image">
            <img src={`/images/${cover}.jpg`} alt="Фото сломалоось(" />
          </div>
        </div>
        <div className="goods-page-description-wrapper">
          <div className="goods-page-name">{name}</div>
          <div className="goods-page-description">{description}</div>
          <div className="goods-page-price">{price} руб.</div>
          <div className="goods-page-buy-btn" onClick={handleAddToCart(id)}>Добавить в корзину</div>
        </div>
      </div>
    </>
  );
}

export default GoodsPage;