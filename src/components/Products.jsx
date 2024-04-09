import React from 'react'
import {products} from '../data'
import { SingleProduct } from './SingleProduct'


export const Products = () => {
 //console.log(products); 
 return (
    <div className="container shadow ">
    <div  className='d-flex justify-content-center gap-3 flex-wrap bg-light shadow'>
      <h2 className='w-100 m-2'>Our Products</h2>
    {products.map(obj=><SingleProduct key={obj.id} {...obj}/>)}
    </div>
    </div>
  )
}

