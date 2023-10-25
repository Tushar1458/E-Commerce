import React, {useContext} from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import { ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
const Product = () => {
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id === Number(productId))

  return (
    <div>
        <Breadcrums product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}

export default Product