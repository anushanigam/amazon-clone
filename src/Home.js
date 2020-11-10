import React from 'react';
import "./Home.css";
import Product from "./Product.js";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_SADLPDesktop_1440x675_FINAL_en-CA_FT_PVD4020_MLP_Hunters_RUSH.jpg"
                    alt=""></img>
                <div className="home_row">
                    <Product
                        title="The lean startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={4}
                    />
                    <Product
                        title="LG 139 cm (55 inches) 4K UHD Smart LED TV 55UM7290PTD (Ceramic BK + Dark Steel Silver) (2019 Model)"
                        price={299.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={4}
                    />
                    
                    
                </div>
                <div className="home_row">
                    <Product
                        title="
                        Amazon.com
                        Echo (2nd Generation) International Version – Charcoal Fabric"
                        price={299.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg"
                        rating={4}
                    />
                    <Product
                        title="Amazon.in: Best of technology 2020 - Electronics: Electronics"
                        price={299.99}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wearables/Electronics/Activity-trackerelectronics_Shop_by_Category_Tiles_750x783._CB446460525_.jpg"
                        rating={4}
                    />
                    <Product
                        title="
                        Amazon.com
                        Echo (2nd Generation) International Version – Charcoal Fabric"
                        price={299.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg"
                        rating={4}
                    />
                    
                    
                </div>
                <div className="home_row">
                <Product
                        title="
                        Amazon.com
                        Echo (2nd Generation) International Version – Charcoal Fabric"
                        price={299.99}
                        image="https://i.guim.co.uk/img/media/a152f7c85a4cb9122d49058e0b006f2d0426d171/0_0_4328_2599/master/4328.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=64953f4ad1713279706a82f458359184"
                        rating={4}
                    />
                    
                    
                    
                </div>

                
            </div>

        </div>
    );
}

export default Home
