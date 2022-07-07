import React from 'react';

const Products = (props) => {
    return (
        <div className='product-wrapper'>
            <h2>{props.productName}</h2>
            <h3>${props.productPrice}</h3>
            <p className="product-description">{props.productDescription}</p>
        </div>
    );
}

export default Products;
