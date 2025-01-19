import React from 'react'

export default function Item(props) {
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/t/a/v/8-rsl022-8-red-tape-white-black-original-imah2pbyqkuzyygm.jpeg?q=70&crop=false" className="card-img-top" alt="error" height="250px" />
            <div className="card-body">
                <h5 className="card-title">RED TAPE </h5>
                <p className="card-text lh-1 fs-6 fw-normal">Casual Lifestyle Shoes for Men | Soft Cushioned Insole, Slip-Resistance High Tops For Men  (White , 6)</p>
                <h5 className="card-title">Price : 1100 </h5>
                <div className="d-flex justify-content-between ">
                    <button className="btn btn-sm btn-primary" onClick={props.handleAddCart}>Add to Cart: {props.count}</button>
                    <button className="btn btn-sm btn-primary" onClick={props.handleRemoveCart}>Remove from Cart</button>
                </div>
            </div>
        </div>
    )
}
