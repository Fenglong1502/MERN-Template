import React, {useEffect, useState} from 'react';
import { Descriptions } from 'antd';

function ProductInfo(props) {
    const [Product, setProduct] = useState({});

    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])


    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price">{Product.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{Product.sold} </Descriptions.Item>
                <Descriptions.Item label="View">{Product.views} </Descriptions.Item>
                <Descriptions.Item label="Description">{Product.description} </Descriptions.Item>
            </Descriptions> 
            <br />
            <br />
            <br />
          

        </div>
    )
}

export default ProductInfo
