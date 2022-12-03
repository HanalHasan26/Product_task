import React, { useState } from 'react';
import { InputGroup, InputGroupText } from 'reactstrap';

import { ShoppingCart, Minus, Plus, X } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import cartItem1 from '../../../assets/images/ecommerce/01.jpg';
import cartItem2 from '../../../assets/images/ecommerce/03.jpg';
import { CheckOut, GoToShopingBag, OrderTotal, ShopingBag } from '../../../Constant';

const CartHeader = () => {
  const history = useNavigate();
  const id = window.location.pathname.split('/').pop();
  const layout = id;
  const [cartDropdown, setCartDropDown] = useState(false);
  const RedirectToCart = () => {
    history(`${process.env.PUBLIC_URL}/app/ecommerce/cart/${layout}`);
  };
  return (
    <li className='cart-nav onhover-dropdown'>
      <div className='cart-box' onClick={() => setCartDropDown(!cartDropdown)}>
        <ShoppingCart />
        <span className='badge rounded-pill badge-primary'>{'2'}</span>
      </div>
      <div className={`cart-dropdown onhover-show-div ${cartDropdown ? 'active' : ''}`}>
        <h6 className='mb-0 f-20 dropdown-title'>{ShopingBag}</h6>
        <ul>
          <li className='mt-0'>
            <div className='media' onClick={RedirectToCart}>
              <img className='img-fluid rounded-circle me-3 img-60' src={cartItem1} alt='' />
              <div className='media-body'>
                <span>{"V-Neck Collar Woman's T-Shirt"}</span>
                <div className='qty-box'>
                  <InputGroup>
                    <InputGroupText>
                      <button className='btn quantity-left-minus' type='button' data-type='minus' data-field=''>
                        <Minus />
                      </button>
                    </InputGroupText>
                    <input className='form-control input-number' type='text' name='quantity' defaultValue='1' />
                    <InputGroupText>
                      <button className='btn quantity-right-plus' type='button' data-type='plus' data-field=''>
                        <Plus />
                      </button>
                    </InputGroupText>
                  </InputGroup>
                </div>
                <h6 className='font-primary'>{'$299.00'}</h6>
              </div>
              <div className='close-circle'>
                <a className='btn-danger' href='#javascript'>
                  <X />
                </a>
              </div>
            </div>
          </li>
          <li className='mt-0'>
            <div className='media' onClick={RedirectToCart}>
              <img className='img-fluid rounded-circle me-3 img-60' src={cartItem2} alt='' />
              <div className='media-body'>
                <span>{"V-Neck Collar Men's T-Shirt"}</span>
                <div className='qty-box'>
                  <InputGroup>
                    <InputGroupText>
                      <button className='btn quantity-left-minus' type='button' data-type='minus' data-field=''>
                        <Minus />
                      </button>
                    </InputGroupText>
                    <input className='form-control input-number' type='text' name='quantity' defaultValue='1' />
                    <InputGroupText>
                      <button className='btn quantity-right-plus' type='button' data-type='plus' data-field=''>
                        <Plus />
                      </button>
                    </InputGroupText>
                  </InputGroup>
                </div>
                <h6 className='font-primary'>{'$299.00'}</h6>
              </div>
              <div className='close-circle'>
                <a className='btn-danger' href='#javascript'>
                  <X />
                </a>
              </div>
            </div>
          </li>
          <li className='total'>
            <h6 className='mb-0'>
              {OrderTotal} : <span className='f-right f-14'>{'$598.00'}</span>
            </h6>
          </li>
          <li className='text-center'>
            <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product/${layout}`} className='d-block mb-3 view-cart f-w-700'>
              {GoToShopingBag}
            </Link>
            <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/checkout/${layout}`} className='btn btn-primary view-checkout'>
              {CheckOut}
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CartHeader;
