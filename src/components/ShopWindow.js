import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom'; 


const Slide = (props) => {
  const { name, price, cover } = props.item;
  return (
    <div className="goods">
      <div className="goods-image">
        <img src={`images/${cover}.jpg`} alt="Фото сломалось(" />
      </div>
      <div className="goods-description">
        <div className="goods-name">{name}</div>
        <div className="goods-price">{price} руб.</div>
      </div>
    </div>
  );
}

const ShopWindow = (props) => {
  const { sliderItems, handleSliderBtn } = props;
  const sliderItemsToShow = sliderItems.length > 3 ? sliderItems.slice(0, 3) : sliderItems;
  const btnClasses = cn({
    'shop-window-btn': true,
    'hidden': sliderItems.length <= 3,
  }); 
  return (
    <>
      {props.children}
      <div className="shop-window">
        <div className={btnClasses} onClick={handleSliderBtn('left')}><i className="arrow arrow-left" /></div>
        <div className="shop-window-content">
          <Slider items={sliderItemsToShow} />
        </div>
        <div className={btnClasses} onClick={handleSliderBtn('right')}><i className="arrow arrow-right"></i></div>
      </div>
    </>
  );
}

const Slider = (props) => {
  const { items } = props;
  return (
    <>
      {items.map( (item) =>  <Link key={item.id} to={`goods/${item.id}`}><Slide item={item}/></Link>)}
    </>
  );
}

export default ShopWindow;