import React from 'react'

export default function Item() {
    return (
        <div class="card m-2" style={{ width: "18rem" }}>
            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/t/a/v/8-rsl022-8-red-tape-white-black-original-imah2pbyqkuzyygm.jpeg?q=70&crop=false" class="card-img-top" alt="error" height="250px" />
            <div class="card-body">
                <h5 class="card-title">RED TAPE </h5>
                <p class="card-text lh-1 fs-6 fw-normal">Casual Lifestyle Shoes for Men | Soft Cushioned Insole, Slip-Resistance High Tops For Men  (White , 6)</p>
                <div className="d-flex justify-content-between ">
                    <a href="/" class="btn btn-primary">Price : 1100</a>
                    <a href="/" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    )
}
