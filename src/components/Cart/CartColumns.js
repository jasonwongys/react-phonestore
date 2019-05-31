import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">

            <div className="col-10 mx-auto col-lg-2">
                    <p text-uppercase>Products</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p text-uppercase>Name of Product</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p text-uppercase>Price</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p text-uppercase>Quantity</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p text-uppercase>Remove</p>
                </div>


                <div className="col-10 mx-auto col-lg-2">
                    <p text-uppercase>Total</p>
                </div>
            </div>
        </div>
    )
}
