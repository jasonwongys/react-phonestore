import React, { Component } from 'react'
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {id,company,img,price,title,info,inCart} = 
                        value.detailProduct;

                return (
                    <div className="container py-5">
                          {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center
                            text-slated text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                          {/*end of title */}

                          {/*product info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="product"/>
                            </div>

                                 {/*product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h1>Model: {title}</h1>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Made by: <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        price : <span>$</span>
                                        {price}
                                    </strong>
                    
                                </h4>
                                <p class="text-capitalize font-weight-bold mt-3 mb-0">
                                    Some info about product:
                                <p className="text-muted lead">{info}</p>
                                </p>
                                    {/*button text */}

                                    <Link to='/'>
                                        <ButtonContainer>
                                            Back to Products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer 
                                    disabled={inCart? true:false}
                                    onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart? 'InCart' : "add to cart"}
                                    </ButtonContainer>
                            </div>
                        </div>
                    </div>
                );
                }}


            </ProductConsumer>
        )
    }
}
