import React from 'react';
import { useState } from 'react';
import { ResourcePicker } from '@shopify/app-bridge-react';
import { Button } from '@shopify/polaris';
import axios from 'axios';
const Product = () => {

    let shopDomain = new URL(window.location).searchParams.get("shop");
    const [status, setStatus] = useState(false);
    const [product, setProduct] = useState([]);


    const productFun = () => {
        setStatus(true);
    }

    const FindData = (data) => {
        setProduct(data.selection)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        product.map(async(item) => {
            const id = item.id.replace("gid://shopify/Product/", "");
            const amazon = document.getElementById(id + "amzon").value;
            const flipkart = document.getElementById(id + "flipkart").value;
            const meesho = document.getElementById(id + "meesho").value;
            const title = item.title;
            let sku = item.variants[0].sku;
            if (sku == null) {
                sku = "sku" + id;
            }
            try {
               const response = await axios({
                    method: "POST",
                    url:"https://d549-125-99-173-254.in.ngrok.io/api/shopify/product",
                    data: {
                        "shop": shopDomain,
                        "productId": id,
                        "productTitle": title,
                        "productSku": sku,
                        "flipkartLink": flipkart,
                        "amazonLink": amazon,
                        "meeshoLink": meesho
                    },
                    headers: {
                        "Accept": "Application/json",
                        "Content-Type": "Application/json",

                    },
                })
                console.log('response',response)
            } catch (err) {
                console.log('err>', err)
            }



        })
    }

    return (
        <>
            <div>
                <Button onClick={productFun}>Show product</Button>
                {
                    <ResourcePicker resourceType="Product" onSelection={(SelectPayload) => { FindData(SelectPayload) }} open={status}
                        onCancel={() => {
                            setStatus(false);
                        }}
                    />
                }
            </div>
            <div className='product_show'>
                <form action="" onSubmit={handleSubmit}>
                    {
                        product.map((item, index) => {
                            const id = item.id.split("/")
                            return (
                                <>
                                    <div className='product_wrapper' key={index}>
                                        <div className='image_wrap flex_six'>
                                            <img src={item.images[0].originalSrc} alt={item.title} />
                                        </div>
                                        <div className='title_wrap flex_six'>
                                            {item.title}
                                        </div>
                                        <div className='description_wrap flex_six'>
                                            {item.descriptionHtml}
                                        </div>

                                        <div className='flex_six'>
                                            <input type="text" id={`${id[4]}amzon`} name="amazon" />
                                        </div>
                                        <div className='flex_six'>
                                            <input type="text" id={`${id[4]}flipkart`} name="flipkart"  />
                                        </div>
                                        <div className='flex_six'>
                                            <input type="text" id={`${id[4]}meesho`} name="meesho"  />
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }
                    <button type='submit'>Save</button>
                </form>
            </div>
        </>
    )
}

export default Product