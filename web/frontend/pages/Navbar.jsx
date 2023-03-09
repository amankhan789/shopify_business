import React from 'react'
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import ShowAllProduct from './ShowAllProduct';

const Navbar = () => {
    const [product, setProduct] = useState([]);

    let shopDomain = new URL(window.location).searchParams.get("shop");

    useEffect(async () => {
        try {
            const response = await axios({
                method: "GET",
                url: `https://d549-125-99-173-254.in.ngrok.io/api/shopify/product/${shopDomain}`,
                headers: {
                    "Accept": "Application/json",
                    "Content-Type": "Application/json",
                },
            })
            console.log('response>>>', response.data.data)
            setProduct(response.data.data)
        } catch (err) {
            console.log('err>', err)
        }
    }, [])

    return (
        <>
        
            <div>
                <NavLink to="/Setting">Setting</NavLink>
                <NavLink to="/Product">Product</NavLink>
            </div>
            {/* <ShowAllProduct/> */}
            {/* <div className='product_show'>
                    {
                        product.map((item, index) => {
                            console.log('item>>>',item)
                            return (
                                <>
                                    <div className='product_wrapper' key={index}>
                                        <div className='image_wrap flex_six'>
                                        </div>
                                        <div className='title_wrap flex_six'>
                                            {item.productId}
                                        </div>
                                        <div className='description_wrap flex_six'>
                                            {item.productTitle}
                                        </div>
                                        <div className='description_wrap flex_six'>
                                            {item.amazonLink}
                                        </div>
                                        <div className='description_wrap flex_six'>
                                            {item.flipkartLink}
                                        </div>
                                        <div className='description_wrap flex_six'>
                                            {item.meeshoLink}
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }
            </div> */}
        </>
    )
}

export default Navbar