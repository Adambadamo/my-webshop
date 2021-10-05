import React from "react";
import './Product.css'

const Product = ({productItems}) => {
    return (
        <div className="products">
            {productItems.map((item) => (
                <div className="card">
                    <div>
                        <img className="product-img" src={item.image} alt={item.name}/>
                    </div>
                    <div>
                        <h3 className="product-name">{item.name}</h3>
                    </div>
                    <div className="product-price">
                        {item.price}
                    </div>
                    <div>
                        <button className="product-add">Add</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product;